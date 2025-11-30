import React, { useEffect, useState } from "react";
import { CheckCircle2, Info } from "lucide-react";
import quizQuestions from "../data/quizQuestions";
import { useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

interface Question {
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

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
  const [step, setStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(quizQuestions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestionIndex, step]);

  const handleAnswerChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      if ((currentQuestionIndex + 1) % stepSize === 0) setStep((prev) => prev + 1);
      setSubmitted(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      if (currentQuestionIndex % stepSize === 0) setStep((prev) => prev - 1);
      setSubmitted(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results", { state: { userAnswers: answers } });
  };

  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const q = quizQuestions[currentQuestionIndex];

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-lg mb-4">
              <CheckCircle2 className="w-8 h-8 text-red-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Project Management Quiz</h1>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              One question per screen. Explanations will appear only after submission.
            </p>
          </div>

          {/* Info Modal */}
          <button
            className="absolute top-4 right-4 p-3 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            <Info className="w-5 h-5" />
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
                >
                  ×
                </button>
                <h3 className="font-semibold text-xl mb-2 text-center">Quiz Responsible</h3>
                <img
                  src="/patricio.jpg"
                  alt="Responsible person"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <p className="text-center text-lg">Patricio Inacio</p>
                <p className="text-center text-sm text-gray-600">Email: patricio.inacio@certipm.com</p>
              </div>
            </div>
          )}

          {/* Progress bar */}
          <div className="relative mb-8">
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-red-700 to-black rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex flex-wrap justify-between mt-2 text-xs sm:text-sm font-medium gap-y-1">
              {steps.map((label, index) => (
                <span
                  key={index}
                  className={`${index + 1 <= step ? "text-red-700 font-semibold" : "text-gray-400"}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-red-700 shadow-xl rounded-2xl p-6 sm:p-10 space-y-8"
          >
            <div className="space-y-2">
              <p className="font-medium text-gray-800 italic mb-1">Scenario: {q.scenario}</p>
              <p className="font-semibold text-gray-900">
                Q{currentQuestionIndex + 1}: {q.question}
              </p>
              <div className="flex flex-col gap-2 mt-1">
                {q.options.map((option, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer text-gray-800">
                    <input
                      type="radio"
                      name={`q${currentQuestionIndex}`}
                      value={option}
                      checked={answers[currentQuestionIndex] === option}
                      onChange={() => handleAnswerChange(currentQuestionIndex, option)}
                      className="accent-red-700 focus:ring-red-700"
                    />
                    <span>{String.fromCharCode(65 + idx)}. {option}</span>
                  </label>
                ))}
              </div>

              {submitted && (
                <div className="mt-2 p-3 bg-gray-100 border-l-4 border-red-700 rounded">
                  <p className="font-semibold text-red-700">Explanation:</p>
                  <p className="text-gray-700 text-sm">{q.explanation}</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2 sm:gap-0">
              <button
                type="button"
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 w-full sm:w-auto"
              >
                Previous
              </button>

              {currentQuestionIndex === quizQuestions.length - 1 ? (
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors w-full sm:w-auto"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={nextQuestion}
                  className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors w-full sm:w-auto"
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Signed out */}
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You must sign in to access the quiz</h2>
          <SignIn path="/projectQuiz" routing="path" />
        </div>
      </SignedOut>
    </SignedIn>
  );
};

export default ProjectQuiz;
