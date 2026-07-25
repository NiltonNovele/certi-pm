import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BadgeCheck,
  Info,
  Clock3,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  X,
  AlertCircle,
  Home,
  RotateCcw,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignIn,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import quizQuestions from "../data/new-pmp-people";

/*
|--------------------------------------------------------------------------
| QUIZ CONFIGURATION
|--------------------------------------------------------------------------
*/

const QUIZ_TIME_MINUTES = 240;
const QUIZ_TIME_SECONDS = QUIZ_TIME_MINUTES * 60;

/*
|--------------------------------------------------------------------------
| PROMO CONFIGURATION
|--------------------------------------------------------------------------
|
| These values MUST match the values used in Choose.tsx.
|
*/

const PROMO_ACCESS_KEY = "certipm_promo_access";
const PROMO_CODE = "PM01CERTIFIED";
const QUIZ_ID = "new-pmp-people";

/*
|--------------------------------------------------------------------------
| TYPES
|--------------------------------------------------------------------------
*/

interface QuizQuestion {
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface PromoAccess {
  code: string;
  quizzes: string[];
}

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

const Pmpeople: React.FC = () => {
  const navigate = useNavigate();

  /*
  |--------------------------------------------------------------------------
  | STATE
  |--------------------------------------------------------------------------
  */

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [answers, setAnswers] = useState<string[]>(
    () => Array(quizQuestions.length).fill("")
  );

  const [timeLeft, setTimeLeft] =
    useState(QUIZ_TIME_SECONDS);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [reviewMode, setReviewMode] =
    useState(false);

  const [score, setScore] =
    useState<number | null>(null);

  const [hasPromoAccess, setHasPromoAccess] =
    useState(false);

  const [accessChecked, setAccessChecked] =
    useState(false);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  const submitLockRef =
    useRef(false);

  /*
  |--------------------------------------------------------------------------
  | VERIFY PROMO ACCESS
  |--------------------------------------------------------------------------
  |
  | Reads the promo access saved by Choose.tsx.
  |
  | Expected structure:
  |
  | {
  |   "code": "PM01CERTIFIED",
  |   "quizzes": [
  |     "capm",
  |     "scrum",
  |     "new-pmp-people",
  |     "new-pmp-process",
  |     "new-pmp-business-environment"
  |   ]
  | }
  |
  | Notice that:
  |
  | "new-pmp-complete"
  |
  | is intentionally NOT included.
  |
  */

  useEffect(() => {
    const verifyPromoAccess = () => {
      try {
        const storedAccess =
          sessionStorage.getItem(
            PROMO_ACCESS_KEY
          );

        if (!storedAccess) {
          setHasPromoAccess(false);
          return;
        }

        const parsedAccess: PromoAccess =
          JSON.parse(storedAccess);

        const validPromoCode =
          parsedAccess?.code === PROMO_CODE;

        const hasQuizAccess =
          Array.isArray(parsedAccess?.quizzes) &&
          parsedAccess.quizzes.includes(QUIZ_ID);

        setHasPromoAccess(
          validPromoCode && hasQuizAccess
        );
      } catch (error) {
        console.error(
          "Unable to verify promo access:",
          error
        );

        setHasPromoAccess(false);
      } finally {
        setAccessChecked(true);
      }
    };

    verifyPromoAccess();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | SUBMIT QUIZ
  |--------------------------------------------------------------------------
  */

  const submitQuiz = useCallback(() => {
    if (submitLockRef.current) {
      return;
    }

    submitLockRef.current = true;

    const correctAnswers =
      answers.reduce(
        (total, answer, index) => {
          if (
            answer ===
            quizQuestions[index]?.correctAnswer
          ) {
            return total + 1;
          }

          return total;
        },
        0
      );

    const percentage =
      quizQuestions.length > 0
        ? Math.round(
            (correctAnswers /
              quizQuestions.length) *
              100
          )
        : 0;

    setScore(percentage);
    setHasSubmitted(true);
    setReviewMode(true);
    setTimeLeft(0);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [answers]);

  /*
  |--------------------------------------------------------------------------
  | TIMER
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (
      reviewMode ||
      hasSubmitted ||
      !hasPromoAccess ||
      !accessChecked ||
      quizQuestions.length === 0
    ) {
      return;
    }

    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }

    const timer =
      window.setInterval(() => {
        setTimeLeft(
          (previousTime) => {
            if (previousTime <= 1) {
              window.clearInterval(timer);
              return 0;
            }

            return previousTime - 1;
          }
        );
      }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    reviewMode,
    hasSubmitted,
    hasPromoAccess,
    accessChecked,
    timeLeft,
    submitQuiz,
  ]);

  /*
  |--------------------------------------------------------------------------
  | ANSWER HANDLING
  |--------------------------------------------------------------------------
  */

  const handleAnswerChange = (
    index: number,
    value: string
  ) => {
    if (
      reviewMode ||
      hasSubmitted
    ) {
      return;
    }

    setAnswers(
      (previousAnswers) => {
        const updatedAnswers = [
          ...previousAnswers,
        ];

        updatedAnswers[index] = value;

        return updatedAnswers;
      }
    );
  };

  /*
  |--------------------------------------------------------------------------
  | NAVIGATION
  |--------------------------------------------------------------------------
  */

  const nextQuestion = () => {
    if (
      currentQuestionIndex <
      quizQuestions.length - 1
    ) {
      setCurrentQuestionIndex(
        (previousIndex) =>
          previousIndex + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const prevQuestion = () => {
    if (
      currentQuestionIndex > 0
    ) {
      setCurrentQuestionIndex(
        (previousIndex) =>
          previousIndex - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /*
  |--------------------------------------------------------------------------
  | RESTART QUIZ
  |--------------------------------------------------------------------------
  */

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);

    setAnswers(
      Array(quizQuestions.length).fill("")
    );

    setTimeLeft(
      QUIZ_TIME_SECONDS
    );

    setScore(null);

    setReviewMode(false);

    setHasSubmitted(false);

    submitLockRef.current = false;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | DERIVED VALUES
  |--------------------------------------------------------------------------
  */

  const progress =
    quizQuestions.length > 0
      ? ((currentQuestionIndex + 1) /
          quizQuestions.length) *
        100
      : 0;

  const answeredCount =
    useMemo(
      () =>
        answers.filter(
          (answer) =>
            answer.trim() !== ""
        ).length,
      [answers]
    );

  const currentQuestion:
    | QuizQuestion
    | undefined =
    quizQuestions[
      currentQuestionIndex
    ];

  const isLastQuestion =
    currentQuestionIndex ===
    quizQuestions.length - 1;

  /*
  |--------------------------------------------------------------------------
  | TIME FORMAT
  |--------------------------------------------------------------------------
  */

  const formatTime = (
    seconds: number
  ) => {
    const safeSeconds =
      Math.max(0, seconds);

    const hours =
      Math.floor(
        safeSeconds / 3600
      );

    const minutes =
      Math.floor(
        (safeSeconds % 3600) / 60
      );

    const remainingSeconds =
      safeSeconds % 60;

    return `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  /*
  |--------------------------------------------------------------------------
  | ACCESS CHECK LOADING
  |--------------------------------------------------------------------------
  */

  if (!accessChecked) {
    return (
      <SignedIn>
        <div className="flex min-h-screen items-center justify-center bg-[#f8f7f5] px-4">
          <div className="rounded-3xl border border-gray-200 bg-white px-8 py-10 text-center shadow-xl">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-red-700" />

            <p className="mt-5 text-sm font-semibold text-gray-700">
              Verifying quiz access...
            </p>
          </div>
        </div>
      </SignedIn>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <>
      <SignedIn>
        {!hasPromoAccess ? (
          /*
          |--------------------------------------------------------------------------
          | NO PROMO ACCESS
          |--------------------------------------------------------------------------
          */

          <div className="min-h-screen bg-[#f8f7f5] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center">
              <div className="w-full rounded-[32px] border border-gray-200 bg-white p-7 text-center shadow-xl sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                  <AlertCircle className="h-8 w-8" />
                </div>

                <h1 className="mt-6 text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Promo access required
                </h1>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
                  This PMP People practice quiz is
                  available through the valid promo
                  code. Return to the quiz library and
                  enter your promo code to unlock
                  access.
                </p>

                <button
                  onClick={() =>
                    navigate("/choice")
                  }
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-800"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Quiz Library
                </button>
              </div>
            </div>
          </div>
        ) : quizQuestions.length === 0 ? (
          /*
          |--------------------------------------------------------------------------
          | EMPTY QUIZ
          |--------------------------------------------------------------------------
          */

          <div className="min-h-screen bg-[#f8f7f5] px-4 py-10">
            <div className="mx-auto max-w-2xl rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-xl">
              <AlertCircle className="mx-auto h-12 w-12 text-red-700" />

              <h1 className="mt-5 text-2xl font-bold text-gray-950">
                Quiz unavailable
              </h1>

              <p className="mt-3 text-sm text-gray-600">
                No questions are currently available
                for this quiz.
              </p>

              <button
                onClick={() =>
                  navigate("/choice")
                }
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Quiz Library
              </button>
            </div>
          </div>
        ) : (
          /*
          |--------------------------------------------------------------------------
          | QUIZ
          |--------------------------------------------------------------------------
          */

          <div className="min-h-screen bg-[#f8f7f5] px-4 py-8 text-gray-900 sm:px-6 lg:px-8 lg:py-10">
            <div className="mx-auto max-w-6xl">

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
                        PMP People Practice Quiz
                      </div>

                      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                        Test your PMP readiness
                      </h1>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                        Practise against a PMP People-focused
                        question bank, track your progress, and
                        review detailed explanations after
                        submission.
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
                        onClick={() =>
                          setIsModalOpen(true)
                        }
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
                              /{" "}
                              {quizQuestions.length}
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
                              /{" "}
                              {quizQuestions.length}
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

                          <span>
                            {Math.round(progress)}%
                          </span>
                        </div>

                        <div className="h-3 rounded-full bg-gray-200">
                          <div
                            className="h-3 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-black transition-all duration-300"
                            style={{
                              width: `${progress}%`,
                            }}
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
                      onClick={() =>
                        setIsModalOpen(false)
                      }
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
                {!reviewMode &&
                currentQuestion ? (
                  <div className="p-5 sm:p-7 lg:p-8">
                    <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      <span className="font-bold">
                        Scenario:
                      </span>{" "}
                      {currentQuestion.scenario}
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                        Question{" "}
                        {currentQuestionIndex + 1}
                      </p>

                      <p className="mt-2 text-xl font-bold leading-8 text-gray-950">
                        {currentQuestion.question}
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      {currentQuestion.options.map(
                        (
                          option,
                          index
                        ) => {
                          const isSelected =
                            answers[
                              currentQuestionIndex
                            ] === option;

                          return (
                            <label
                              key={`${option}-${index}`}
                              className={`flex cursor-pointer items-start gap-4 rounded-2xl border px-4 py-4 transition-all ${
                                isSelected
                                  ? "border-red-300 bg-red-50 shadow-sm"
                                  : "border-gray-200 bg-white hover:border-red-200 hover:bg-red-50/40"
                              }`}
                            >
                              <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                checked={
                                  isSelected
                                }
                                onChange={() =>
                                  handleAnswerChange(
                                    currentQuestionIndex,
                                    option
                                  )
                                }
                                className="mt-1 h-4 w-4 accent-red-700"
                              />

                              <span className="text-sm leading-7 text-gray-700 sm:text-base">
                                {option}
                              </span>
                            </label>
                          );
                        }
                      )}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        onClick={
                          prevQuestion
                        }
                        disabled={
                          currentQuestionIndex ===
                          0
                        }
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Previous
                      </button>

                      {isLastQuestion ? (
                        <button
                          onClick={
                            submitQuiz
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                        >
                          Submit Quiz
                          <CheckCircle2 className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={
                            nextQuestion
                          }
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
                          score !== null &&
                          score >= 80
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {score !== null &&
                        score >= 80 ? (
                          <CheckCircle2 className="h-8 w-8" />
                        ) : (
                          <AlertCircle className="h-8 w-8" />
                        )}
                      </div>

                      <h2 className="mt-4 text-3xl font-extrabold text-gray-950">
                        Final Score:{" "}
                        {score ?? 0}%
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                        Review each answer below and
                        use the explanations to improve
                        your understanding before your
                        next attempt.
                      </p>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <button
                          onClick={
                            restartQuiz
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white hover:bg-red-800"
                        >
                          <RotateCcw className="h-4 w-4" />
                          Retake Quiz
                        </button>

                        <button
                          onClick={() =>
                            navigate(
                              "/choice"
                            )
                          }
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-black"
                        >
                          <Home className="h-4 w-4" />
                          Quiz Library
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 space-y-6">
                      {quizQuestions.map(
                        (
                          question,
                          index
                        ) => {
                          const isCorrect =
                            answers[
                              index
                            ] ===
                            question.correctAnswer;

                          return (
                            <div
                              key={index}
                              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                            >
                              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                    Question{" "}
                                    {index + 1}
                                  </p>

                                  <p className="mt-2 text-base font-bold leading-7 text-gray-900">
                                    {
                                      question.question
                                    }
                                  </p>
                                </div>

                                <span
                                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                                    isCorrect
                                      ? "bg-green-100 text-green-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {isCorrect
                                    ? "Correct"
                                    : "Incorrect"}
                                </span>
                              </div>

                              <div className="mt-4 grid gap-3">
                                <div className="rounded-2xl border border-gray-200 bg-[#fafafa] px-4 py-3">
                                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                    Your answer
                                  </p>

                                  <p
                                    className={`mt-1 text-sm font-medium ${
                                      isCorrect
                                        ? "text-green-700"
                                        : "text-red-700"
                                    }`}
                                  >
                                    {answers[
                                      index
                                    ] ||
                                      "No answer"}
                                  </p>
                                </div>

                                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3">
                                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-green-700">
                                    Correct answer
                                  </p>

                                  <p className="mt-1 text-sm font-medium text-green-800">
                                    {
                                      question.correctAnswer
                                    }
                                  </p>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3">
                                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                    Explanation
                                  </p>

                                  <p className="mt-1 text-sm leading-7 text-gray-600">
                                    {
                                      question.explanation
                                    }
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
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
                  Please sign in to continue to your
                  PMP practice quiz.
                </p>
              </div>

              <SignIn
                path="/new-pmp-people"
                routing="path"
              />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default Pmpeople;