import React, { useEffect, useState } from "react";
import { BadgeCheck, Info } from "lucide-react";
import quizQuestions from "../data/pmpQuestions";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";

interface Question {
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// CONFIG
const QUIZ_TIME_MINUTES = 230;
const QUIZ_TIME_SECONDS = QUIZ_TIME_MINUTES * 60;

const stepSize = 5;
const totalSteps = Math.ceil(quizQuestions.length / stepSize);
const steps = Array.from(
  { length: totalSteps },
  (_, i) =>
    `Questions ${i * stepSize + 1}-${Math.min(
      (i + 1) * stepSize,
      quizQuestions.length
    )}`
);

const ProjectQuiz: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(quizQuestions.length).fill("")
  );
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SECONDS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // PAYMENT REDIRECT
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("status") === "success") {
      setPaymentSuccess(true);
      navigate("/projectQuiz", { replace: true });
    }
  }, [location, navigate]);

  // TIMER
  useEffect(() => {
    if (reviewMode) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [reviewMode]);

  const handleAnswerChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      if ((currentQuestionIndex + 1) % stepSize === 0)
        setStep((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      if (currentQuestionIndex % stepSize === 0)
        setStep((prev) => prev - 1);
    }
  };

  const submitQuiz = () => {
    const correct = answers.filter(
      (a, i) => a === quizQuestions[i].correctAnswer
    ).length;

    const percentage = Math.round(
      (correct / quizQuestions.length) * 100
    );

    setScore(percentage);
    setReviewMode(true);
  };

  const progress =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const q = quizQuestions[currentQuestionIndex];

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">

          {paymentSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded text-center font-semibold">
              Payment successful! You can now start the quiz.
            </div>
          )}

          {/* HEADER */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-lg mb-4">
              <BadgeCheck className="w-8 h-8 text-red-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              PMP Practice Quiz
            </h1>

            {!reviewMode && (
              <div className="mt-4 text-xl font-bold text-red-700">
                Time Remaining: {formatTime(timeLeft)}
              </div>
            )}
          </div>

          {/* INFO BUTTON */}
          <button
            className="absolute top-4 right-4 p-3 bg-red-700 text-white rounded-full shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <Info className="w-5 h-5" />
          </button>

          {/* INFO MODAL */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-2xl"
                >
                  ×
                </button>
                <h3 className="font-semibold text-xl text-center mb-4">
                  Quiz Responsible
                </h3>
                <img
                  src="/patricio.jpg"
                  className="w-32 h-32 rounded-full mx-auto mb-2"
                />
                <p className="text-center">Patricio Inacio</p>
                <p className="text-center text-sm text-gray-600">
                  patricio.inacio@certipm.com
                </p>
              </div>
            </div>
          )}

          {/* PROGRESS */}
          {!reviewMode && (
            <div className="mb-8">
              <div className="h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-gradient-to-r from-red-700 to-black rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* <div className="flex justify-between mt-2 text-xs font-medium">
                {steps.map((label, i) => (
                  <span
                    key={i}
                    className={
                      i + 1 <= step ? "text-red-700" : "text-gray-400"
                    }
                  >
                    {label}
                  </span>
                ))}
              </div> */}
            </div>
          )}

          {/* QUIZ / REVIEW */}
          <div className="bg-white border border-red-700 shadow-xl rounded-2xl p-6 space-y-6">
            {!reviewMode ? (
              <>
                <p className="italic text-gray-700">
                  Scenario: {q.scenario}
                </p>
                <p className="font-semibold">
                  Q{currentQuestionIndex + 1}: {q.question}
                </p>

                {q.options.map((o, i) => (
                  <label key={i} className="flex gap-2">
                    <input
                      type="radio"
                      checked={answers[currentQuestionIndex] === o}
                      onChange={() =>
                        handleAnswerChange(currentQuestionIndex, o)
                      }
                    />
                    {o}
                  </label>
                ))}

                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 bg-gray-700 text-white rounded"
                  >
                    Previous
                  </button>

                  {currentQuestionIndex === quizQuestions.length - 1 ? (
                    <button
                      onClick={submitQuiz}
                      className="px-4 py-2 bg-red-700 text-white rounded"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      onClick={nextQuestion}
                      className="px-4 py-2 bg-red-700 text-white rounded"
                    >
                      Next
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-center">
                  Final Score: {score}%
                </h2>

                {quizQuestions.map((q, i) => (
                  <div key={i} className="border-t pt-4">
                    <p className="font-semibold">{q.question}</p>

                    <p>
                      Your answer:{" "}
                      <span
                        className={
                          answers[i] === q.correctAnswer
                            ? "text-red-600"
                            : "text-red-600"
                        }
                      >
                        {answers[i] || "No answer"}
                      </span>
                    </p>

                    <p className="text-green-700">
                      Correct answer: {q.correctAnswer}
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      {q.explanation}
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <SignIn path="/projectQuiz" routing="path" />
        </div>
      </SignedOut>
    </SignedIn>
  );
};

export default ProjectQuiz;
