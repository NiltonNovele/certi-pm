import React, { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Info,
  Clock3,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  AlertCircle,
} from "lucide-react";
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

const ProjectQuiz: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const submitQuiz = () => {
    const correct = answers.filter(
      (a, i) => a === quizQuestions[i].correctAnswer
    ).length;

    const percentage = Math.round((correct / quizQuestions.length) * 100);

    setScore(percentage);
    setReviewMode(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progress =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer.trim() !== "").length,
    [answers]
  );

  const q: Question = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-[#f8f7f5] px-4 py-8 text-gray-900 sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-6xl">
            {paymentSuccess && (
              <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-4 text-center text-sm font-semibold text-green-700 shadow-sm sm:text-base">
                Payment successful! You can now start the PMP quiz.
              </div>
            )}

            {/* HEADER */}
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-red-100/60 blur-3xl" />
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-100/50 blur-3xl" />
              </div>

              <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                      <BadgeCheck className="h-4 w-4" />
                      PMP Practice Quiz
                    </div>

                    <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                      Test your PMP readiness
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                      Practise against a full PMP-style question bank, track your
                      progress, and review detailed explanations after submission.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {!reviewMode && (
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-sm">
                        <Clock3 className="h-4 w-4" />
                        {formatTime(timeLeft)}
                      </div>
                    )}

                    <button
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-700 text-white shadow-md transition hover:bg-red-800"
                      onClick={() => setIsModalOpen(true)}
                      aria-label="Open quiz information"
                    >
                      <Info className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {!reviewMode && (
                  <>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          Question
                        </p>
                        <p className="mt-2 text-lg font-bold text-gray-900">
                          {currentQuestionIndex + 1}
                          <span className="text-sm font-medium text-gray-500">
                            {" "}
                            / {quizQuestions.length}
                          </span>
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          Answered
                        </p>
                        <p className="mt-2 text-lg font-bold text-gray-900">
                          {answeredCount}
                          <span className="text-sm font-medium text-gray-500">
                            {" "}
                            / {quizQuestions.length}
                          </span>
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          Completion
                        </p>
                        <p className="mt-2 text-lg font-bold text-gray-900">
                          {Math.round(progress)}%
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                        <span>Progress</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-gray-200">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-black transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* INFO MODAL */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
                <div className="relative w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-600"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                      <Info className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      Quiz Responsible
                    </h3>

                    <img
                      src="/patricio.jpg"
                      alt="Patricio Inacio"
                      className="mx-auto mt-5 h-28 w-28 rounded-full object-cover shadow-md"
                    />

                    <p className="mt-4 text-base font-semibold text-gray-900">
                      Patricio Inacio
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      patricio.inacio@certipm.com
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* QUIZ / REVIEW */}
            <div className="mt-8 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl">
              {!reviewMode ? (
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    Scenario: {q.scenario}
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      Question {currentQuestionIndex + 1}
                    </p>
                    <p className="mt-2 text-xl font-bold leading-8 text-gray-950">
                      {q.question}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {q.options.map((option, i) => {
                      const isSelected = answers[currentQuestionIndex] === option;

                      return (
                        <label
                          key={i}
                          className={`flex cursor-pointer items-start gap-4 rounded-2xl border px-4 py-4 transition-all ${
                            isSelected
                              ? "border-red-300 bg-red-50 shadow-sm"
                              : "border-gray-200 bg-white hover:border-red-200 hover:bg-red-50/40"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentQuestionIndex}`}
                            checked={isSelected}
                            onChange={() =>
                              handleAnswerChange(currentQuestionIndex, option)
                            }
                            className="mt-1 h-4 w-4 accent-red-700"
                          />
                          <span className="text-sm leading-7 text-gray-700 sm:text-base">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      onClick={prevQuestion}
                      disabled={currentQuestionIndex === 0}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </button>

                    {isLastQuestion ? (
                      <button
                        onClick={submitQuiz}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                      >
                        Submit Quiz
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={nextQuestion}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                      >
                        Next
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-6 text-center shadow-sm">
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                        score! >= 80
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {score! >= 80 ? (
                        <CheckCircle2 className="h-8 w-8" />
                      ) : (
                        <AlertCircle className="h-8 w-8" />
                      )}
                    </div>

                    <h2 className="mt-4 text-3xl font-extrabold text-gray-950">
                      Final Score: {score}%
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                      Review each answer below and use the explanations to improve
                      your understanding before your next attempt.
                    </p>
                  </div>

                  <div className="mt-8 space-y-6">
                    {quizQuestions.map((question, i) => {
                      const isCorrect = answers[i] === question.correctAnswer;

                      return (
                        <div
                          key={i}
                          className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Question {i + 1}
                              </p>
                              <p className="mt-2 text-base font-bold leading-7 text-gray-900">
                                {question.question}
                              </p>
                            </div>

                            <span
                              className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                                isCorrect
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {isCorrect ? "Correct" : "Incorrect"}
                            </span>
                          </div>

                          <div className="mt-4 grid gap-3">
                            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Your answer
                              </p>
                              <p
                                className={`mt-1 text-sm font-medium ${
                                  isCorrect ? "text-green-700" : "text-red-700"
                                }`}
                              >
                                {answers[i] || "No answer"}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700">
                                Correct answer
                              </p>
                              <p className="mt-1 text-sm font-medium text-green-800">
                                {question.correctAnswer}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                Explanation
                              </p>
                              <p className="mt-1 text-sm leading-7 text-gray-600">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen bg-[#f8f7f5] px-4 py-8 sm:px-6">
          <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
            <div className="w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
              <div className="mb-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                  <BadgeCheck className="h-7 w-7" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-950">
                  Sign in to access the PMP quiz
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Please sign in to continue to your purchased PMP practice quiz.
                </p>
              </div>

              <SignIn path="/projectQuiz" routing="path" />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default ProjectQuiz;