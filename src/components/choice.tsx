
import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignIn,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

interface QuizChoice {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  redirectUrl: string;
  promotion?: string;
  category?: string;
  promoAccess?: boolean;
  purchaseFullQuiz?: boolean;
}

/*
|--------------------------------------------------------------------------
| CONFIGURATION
|--------------------------------------------------------------------------
*/

const WHATSAPP_NUMBER = "258858029205";

const VALID_PROMO_CODE = "PM01CERTIFIED";

const PROMO_ACCESS_KEY = "certipm_promo_access";

/*
|--------------------------------------------------------------------------
| IMPORTANT
|--------------------------------------------------------------------------
|
| These are the quizzes unlocked by the promo code.
|
| "new-pmp-complete" is deliberately NOT included.
|
*/

const PROMO_QUIZ_IDS = [
  "capm",
  "scrum",
  "new-pmp-people",
  "new-pmp-process",
  "new-pmp-business-environment",
];

/*
|--------------------------------------------------------------------------
| QUIZ LIST
|--------------------------------------------------------------------------
*/

const quizzes: QuizChoice[] = [
  {
    id: "capm",
    title: "CAPM Practice Quiz",
    description:
      "Strengthen your project management foundations with CAPM-focused practice questions aligned with key exam domains, concepts, terminology, and real-world scenarios.",
    instructor: "Patricio Inacio",
    price: 7799,
    originalPrice: 9299,
    redirectUrl: "/capm",
    promotion: "Premium Access",
    category: "Foundation",
    promoAccess: true,
  },

  {
    id: "scrum",
    title: "Scrum Master Quiz",
    description:
      "Prepare for Scrum Master certification with practical agile scenarios covering Scrum roles, events, artefacts, team collaboration, and delivery mindset.",
    instructor: "Patricio Inacio",
    price: 8099,
    originalPrice: 9999,
    redirectUrl: "/scrum",
    promotion: "Premium Access",
    category: "Agile",
    promoAccess: true,
  },

  {
    id: "new-pmp-complete",
    title: "New PMP Practice Quiz - Complete",
    description:
      "A full-length PMP practice quiz aligned with the latest PMI-style coverage. Test your knowledge across the complete PMP exam framework with a comprehensive practice experience.",
    instructor: "Patricio Inacio",
    price: 9499,
    originalPrice: 10999,
    redirectUrl: "/new-pmp-complete",
    promotion: "Full Quiz",
    category: "PMP",
    purchaseFullQuiz: false,
    promoAccess: false,
  },

  {
    id: "new-pmp-people",
    title: "New PMP Practice Quiz - People",
    description:
      "Focused PMP practice quiz covering people, leadership, team dynamics, and stakeholder engagement.",
    instructor: "Patricio Inacio",
    price: 0,
    redirectUrl: "/new-pmp-people",
    promotion: "Promo Access",
    category: "PMP",
    promoAccess: true,
  },

  {
    id: "new-pmp-process",
    title: "New PMP Practice Quiz - Process",
    description:
      "Targeted PMP practice quiz focused on process, delivery, planning, risk, and execution.",
    instructor: "Patricio Inacio",
    price: 0,
    redirectUrl: "/new-pmp-process",
    promotion: "Promo Access",
    category: "PMP",
    promoAccess: true,
  },

  {
    id: "new-pmp-business-environment",
    title: "New PMP Practice Quiz - Business Environment",
    description:
      "A focused PMP practice quiz covering business environment, compliance, organizational strategy, and value delivery.",
    instructor: "Patricio Inacio",
    price: 0,
    redirectUrl: "/new-pmp-business",
    promotion: "Promo Access",
    category: "PMP",
    promoAccess: true,
  },
];

/*
|--------------------------------------------------------------------------
| CARD THEMES
|--------------------------------------------------------------------------
|
| Each quiz receives its own visual identity.
|
| The category / promotion badges remain unchanged.
|
*/

const cardThemes: Record<
  string,
  {
    iconBg: string;
    iconText: string;
    checkText: string;
    buttonBg: string;
    buttonHover: string;
  }
> = {
  capm: {
    // PMI-inspired orange
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    checkText: "text-orange-600",
    buttonBg: "bg-orange-600",
    buttonHover: "hover:bg-orange-700",
  },

  scrum: {
    // PMI-inspired purple
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    checkText: "text-purple-600",
    buttonBg: "bg-purple-600",
    buttonHover: "hover:bg-purple-700",
  },

  "new-pmp-complete": {
    // PMI-inspired deep blue
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    checkText: "text-blue-600",
    buttonBg: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
  },

  "new-pmp-people": {
    // Light blue / cyan
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
    checkText: "text-sky-600",
    buttonBg: "bg-sky-600",
    buttonHover: "hover:bg-sky-700",
  },

  "new-pmp-process": {
    // Brown / bronze
    iconBg: "bg-amber-50",
    iconText: "text-amber-700",
    checkText: "text-amber-700",
    buttonBg: "bg-amber-700",
    buttonHover: "hover:bg-amber-800",
  },

  "new-pmp-business-environment": {
    // Teal / green-blue
    iconBg: "bg-teal-50",
    iconText: "text-teal-600",
    checkText: "text-teal-600",
    buttonBg: "bg-teal-600",
    buttonHover: "hover:bg-teal-700",
  },
};

/*
|--------------------------------------------------------------------------
| COMPONENT
|--------------------------------------------------------------------------
*/

const Choose: React.FC = () => {
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");

  const [promoError, setPromoError] = useState("");

  const [showPromoModal, setShowPromoModal] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | PROMO QUIZZES
  |--------------------------------------------------------------------------
  */

  const promoQuizzes = quizzes.filter((quiz) =>
    PROMO_QUIZ_IDS.includes(quiz.id)
  );

  /*
  |--------------------------------------------------------------------------
  | WHATSAPP
  |--------------------------------------------------------------------------
  */

  const getWhatsAppLink = (quiz: QuizChoice) => {
    const message = `Hello CertiPM, I would like to request access to the ${quiz.title}. Please send me more information about availability, access, and next steps.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  /*
  |--------------------------------------------------------------------------
  | REQUEST ACCESS
  |--------------------------------------------------------------------------
  */

  const handleRequestAccess = (quiz: QuizChoice) => {
    window.open(
      getWhatsAppLink(quiz),
      "_blank",
      "noopener,noreferrer"
    );
  };

  /*
  |--------------------------------------------------------------------------
  | PURCHASE FULL QUIZ
  |--------------------------------------------------------------------------
  |
  | Intentionally does nothing.
  |
  | The button remains visible exactly as requested.
  |
  */

  const handlePurchaseFullQuiz = () => {
    return;
  };

  /*
  |--------------------------------------------------------------------------
  | APPLY PROMO CODE
  |--------------------------------------------------------------------------
  */

  const handleApplyPromo = () => {
    const normalizedCode = promoCode.trim().toUpperCase();

    /*
    |--------------------------------------------------------------------------
    | INVALID CODE
    |--------------------------------------------------------------------------
    */

    if (normalizedCode !== VALID_PROMO_CODE) {
      setPromoError(
        "Invalid promo code. Please try again."
      );

      return;
    }

    /*
    |--------------------------------------------------------------------------
    | SAVE PROMO ACCESS
    |--------------------------------------------------------------------------
    */

    try {
      sessionStorage.setItem(
        PROMO_ACCESS_KEY,
        JSON.stringify({
          code: VALID_PROMO_CODE,
          quizzes: PROMO_QUIZ_IDS,
        })
      );

      /*
      |--------------------------------------------------------------------------
      | VERIFY THAT ACCESS WAS ACTUALLY SAVED
      |--------------------------------------------------------------------------
      */

      const savedAccess =
        sessionStorage.getItem(PROMO_ACCESS_KEY);

      if (!savedAccess) {
        setPromoError(
          "Unable to activate promo access. Please try again."
        );

        return;
      }

      /*
      |--------------------------------------------------------------------------
      | SUCCESS
      |--------------------------------------------------------------------------
      */

      setPromoError("");

      setShowPromoModal(true);
    } catch (error) {
      console.error(
        "Unable to save promo access:",
        error
      );

      setPromoError(
        "Unable to activate promo access. Please try again."
      );
    }
  };

  /*
  |--------------------------------------------------------------------------
  | RENDER
  |--------------------------------------------------------------------------
  */

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
          <section className="relative overflow-hidden">
            {/* BACKGROUND */}

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-red-200/30 blur-3xl sm:h-72 sm:w-72" />

              <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-80 sm:w-80" />

              <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white blur-3xl sm:h-72 sm:w-72" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              {/* HERO */}

              <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:text-xs">
                  <Sparkles className="h-4 w-4" />
                  Quiz Library
                </div>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                  Choose your next{" "}
                  <span className="text-red-700">
                    practice quiz
                  </span>
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base lg:text-lg">
                  Access premium certification
                  practice quizzes, sharpen your
                  exam readiness, and prepare with
                  confidence.
                </p>
              </div>

              {/* PROMO SECTION */}

              <div className="mb-12 rounded-[24px] border border-red-100 bg-white p-5 shadow-xl sm:rounded-[28px] sm:p-8 lg:mb-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700 sm:text-xs">
                      <BadgePercent className="h-4 w-4" />
                      Promo Access
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-gray-950 sm:text-3xl">
                      Have a promo code?
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                      Enter your promo code to unlock
                      instant access to eligible
                      practice quizzes.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
                    <div className="flex flex-col gap-3">
                      <input
                        value={promoCode}
                        onChange={(event) => {
                          setPromoCode(
                            event.target.value
                          );

                          if (promoError) {
                            setPromoError("");
                          }
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            handleApplyPromo();
                          }
                        }}
                        placeholder="Enter promo code"
                        autoComplete="off"
                        className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-600 focus:ring-4 focus:ring-red-100"
                      />

                      <button
                        onClick={handleApplyPromo}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 sm:w-auto"
                      >
                        Apply Code
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    {promoError && (
                      <p className="mt-3 text-sm text-red-600">
                        {promoError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ALL QUIZZES */}

              <div className="mb-12 lg:mb-16">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                      Available now
                    </p>

                    <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                      Start practicing today
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500">
                    {quizzes.length} quizzes available
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {quizzes.map((quiz) => {
                    /*
                    |--------------------------------------------------------------------------
                    | GET INDIVIDUAL CARD THEME
                    |--------------------------------------------------------------------------
                    */

                    const theme =
                      cardThemes[quiz.id] ||
                      cardThemes["capm"];

                    return (
                      <div
                        key={quiz.id}
                        className="group relative flex h-full flex-col rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[28px] sm:p-6"
                      >
                        {/* CARD HEADER */}

                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          {/* THEMED GRADUATION CAP */}

                          <div
                            className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText}`}
                          >
                            <GraduationCap className="h-5 w-5" />
                          </div>

                          {/* CATEGORY / PROMOTION
                              KEPT UNCHANGED */}

                          <div className="flex flex-wrap gap-2 sm:justify-end">
                            {quiz.category && (
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                                {quiz.category}
                              </span>
                            )}

                            {quiz.promotion && (
                              <span className="rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white">
                                {quiz.promotion}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* CARD CONTENT */}

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {quiz.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-gray-600">
                            {quiz.description}
                          </p>

                          {/* THEMED INSTRUCTOR CHECK ICON */}

                          <div className="mt-5 flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle2
                              className={`mt-0.5 h-4 w-4 shrink-0 ${theme.checkText}`}
                            />

                            <span>
                              Instructor:{" "}
                              <span className="font-semibold text-gray-700">
                                {quiz.instructor}
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* THEMED CARD BUTTON */}

                        {quiz.purchaseFullQuiz ? (
                          <button
                            onClick={
                              handlePurchaseFullQuiz
                            }
                            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition ${theme.buttonBg} ${theme.buttonHover} sm:text-base`}
                          >
                            Purchase Full Quiz
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleRequestAccess(
                                quiz
                              )
                            }
                            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition ${theme.buttonBg} ${theme.buttonHover} sm:text-base`}
                          >
                            Request Access
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* PROMO MODAL */}

        {showPromoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl sm:rounded-[28px] sm:p-8">
              {/* SUCCESS BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-green-700 sm:text-xs">
                <CheckCircle2 className="h-4 w-4" />
                Promo Activated
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Choose a quiz to start
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Your promo code has been accepted.
                You now have access to the eligible
                quizzes below.
              </p>

              {/* PROMO ACCESS QUIZZES */}

              <div className="mt-6 space-y-3">
                {promoQuizzes.map((quiz) => (
                  <button
                    key={quiz.id}
                    onClick={() => {
                      setShowPromoModal(false);

                      navigate(quiz.redirectUrl);
                    }}
                    className="inline-flex w-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                  >
                    <span className="min-w-0 flex-1">
                      {quiz.title}
                    </span>

                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </button>
                ))}
              </div>

              {/* CLOSE */}

              <button
                onClick={() =>
                  setShowPromoModal(false)
                }
                className="mt-6 w-full text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </SignedIn>

      {/* SIGNED OUT */}

      <SignedOut>
        <div className="min-h-screen bg-[#f8f7f5] px-4 sm:px-6">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center py-10 sm:py-12">
            <div className="mb-8 max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700 shadow-sm sm:text-xs">
                <Sparkles className="h-4 w-4" />
                Quiz Library
              </div>

              <h2 className="mt-5 text-3xl font-extrabold text-gray-950 sm:text-4xl">
                You must sign in to access quizzes
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Sign in to purchase and access your
                practice quizzes.
              </p>
            </div>

            <div className="w-full max-w-md overflow-hidden rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-8">
              <SignIn
                path="/choice"
                routing="path"
              />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default Choose;
