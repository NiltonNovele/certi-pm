import React, { useState } from "react";
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";
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

const WHATSAPP_NUMBER = "258858029205";
const VALID_PROMO_CODE = "PM01CERTIFIED";
const PROMO_ACCESS_KEY = "certipm_promo_access";

const PROMO_QUIZ_IDS = [
  "capm",
  "scrum",
  "new-pmp-people",
  "new-pmp-process",
  "new-pmp-business-environment",
];

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
    title: "PMP Practice Quiz - Complete",
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
    title: "PMP Practice Quiz - People",
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
    title: "PMP Practice Quiz - Process",
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
    title: "PMP Practice Quiz - Business Environment",
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
 * Each card receives its own default visual theme. The utility classes are
 * written explicitly so Tailwind can detect and generate them reliably.
 */
const cardThemes = [
  {
    icon: "bg-orange-50 text-orange-600",
    accent: "bg-orange-500",
    button: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-200",
    badge: "bg-orange-600",
  },
  {
    icon: "bg-purple-50 text-purple-700",
    accent: "bg-purple-600",
    button: "bg-purple-700 hover:bg-purple-800 focus:ring-purple-200",
    badge: "bg-purple-700",
  },
  {
    icon: "bg-sky-50 text-sky-600",
    accent: "bg-sky-500",
    button: "bg-sky-600 hover:bg-sky-700 focus:ring-sky-200",
    badge: "bg-sky-600",
  },
  {
    icon: "bg-amber-50 text-amber-800",
    accent: "bg-amber-700",
    button: "bg-amber-700 hover:bg-amber-800 focus:ring-amber-200",
    badge: "bg-amber-700",
  },
  {
    icon: "bg-teal-50 text-teal-700",
    accent: "bg-teal-600",
    button: "bg-teal-700 hover:bg-teal-800 focus:ring-teal-200",
    badge: "bg-teal-700",
  },
  {
    icon: "bg-indigo-50 text-indigo-700",
    accent: "bg-indigo-600",
    button: "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-200",
    badge: "bg-indigo-700",
  },
] as const;

const Choose: React.FC = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [showPromoModal, setShowPromoModal] = useState(false);

  const promoQuizzes = quizzes.filter((quiz) =>
    PROMO_QUIZ_IDS.includes(quiz.id),
  );

  const getWhatsAppLink = (quiz: QuizChoice) => {
    const message = `Hello CertiPM, I would like to request access to the ${quiz.title}. Please send me more information about availability, access, and next steps.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  const handleRequestAccess = (quiz: QuizChoice) => {
    window.open(getWhatsAppLink(quiz), "_blank", "noopener,noreferrer");
  };

  const handlePurchaseFullQuiz = () => undefined;

  const handleApplyPromo = () => {
    const normalizedCode = promoCode.trim().toUpperCase();

    if (normalizedCode !== VALID_PROMO_CODE) {
      setPromoError("Invalid promo code. Please try again.");
      return;
    }

    try {
      sessionStorage.setItem(
        PROMO_ACCESS_KEY,
        JSON.stringify({ code: VALID_PROMO_CODE, quizzes: PROMO_QUIZ_IDS }),
      );

      if (!sessionStorage.getItem(PROMO_ACCESS_KEY)) {
        setPromoError("Unable to activate promo access. Please try again.");
        return;
      }

      setPromoError("");
      setShowPromoModal(true);
    } catch (error) {
      console.error("Unable to save promo access:", error);
      setPromoError("Unable to activate promo access. Please try again.");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl sm:h-72 sm:w-72" />
              <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl sm:h-80 sm:w-80" />
              <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white blur-3xl sm:h-72 sm:w-72" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700 shadow-sm sm:text-xs">
                  <Sparkles className="h-4 w-4" />
                  Quiz Library
                </div>
                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                  Choose your next <span className="text-orange-600">practice quiz</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base lg:text-lg">
                  Access premium certification practice quizzes, sharpen your exam readiness, and prepare with confidence.
                </p>
              </div>

              <div className="mb-12 rounded-[24px] border border-orange-100 bg-white p-5 shadow-xl sm:rounded-[28px] sm:p-8 lg:mb-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700 sm:text-xs">
                      <BadgePercent className="h-4 w-4" />
                      Promo Access
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-gray-950 sm:text-3xl">Have a promo code?</h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                      Enter your promo code to unlock instant access to eligible practice quizzes.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        value={promoCode}
                        onChange={(event) => {
                          setPromoCode(event.target.value);
                          if (promoError) setPromoError("");
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") handleApplyPromo();
                        }}
                        placeholder="Enter promo code"
                        autoComplete="off"
                        className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-600 focus:ring-4 focus:ring-orange-100"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700 sm:w-auto"
                      >
                        Apply Code
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    {promoError && <p className="mt-3 text-sm text-red-600">{promoError}</p>}
                  </div>
                </div>
              </div>

              <div className="mb-12 lg:mb-16">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Available now</p>
                    <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">Start practicing today</h2>
                  </div>
                  <p className="text-sm text-gray-500">{quizzes.length} quizzes available</p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {quizzes.map((quiz, index) => {
                    const theme = cardThemes[index % cardThemes.length];

                    return (
                      <div
                        key={quiz.id}
                        className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[28px] sm:p-6"
                      >
                        <div className={`absolute inset-x-0 top-0 h-1 ${theme.accent}`} />

                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${theme.icon}`}>
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <div className="flex flex-wrap gap-2 sm:justify-end">
                            {quiz.category && (
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                                {quiz.category}
                              </span>
                            )}
                            {quiz.promotion && (
                              <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${theme.badge}`}>
                                {quiz.promotion}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{quiz.title}</h3>
                          <p className="mt-4 text-sm leading-7 text-gray-600">{quiz.description}</p>
                          <div className="mt-5 flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${theme.icon.split(" ")[1]}`} />
                            <span>
                              Instructor:{" "}
                              <span className="font-semibold text-gray-700">{quiz.instructor}</span>
                            </span>
                          </div>
                        </div>

                        {quiz.purchaseFullQuiz ? (
                          <button
                            onClick={handlePurchaseFullQuiz}
                            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4 sm:text-base ${theme.button}`}
                          >
                            Purchase Full Quiz
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleRequestAccess(quiz)}
                            className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4 sm:text-base ${theme.button}`}
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

        {showPromoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl sm:rounded-[28px] sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-green-700 sm:text-xs">
                <CheckCircle2 className="h-4 w-4" />
                Promo Activated
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Choose a quiz to start</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                Your promo code has been accepted. You now have access to the eligible quizzes below.
              </p>

              <div className="mt-6 space-y-3">
                {promoQuizzes.map((quiz, index) => {
                  const theme = cardThemes[index % cardThemes.length];
                  return (
                    <button
                      key={quiz.id}
                      onClick={() => {
                        setShowPromoModal(false);
                        navigate(quiz.redirectUrl);
                      }}
                      className={`inline-flex w-full items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 transition hover:bg-gray-100 ${theme.icon.split(" ")[1]}`}
                    >
                      <span className="min-w-0 flex-1 text-gray-800">{quiz.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </button>
                  );
                })}
              </div>

              <button onClick={() => setShowPromoModal(false)} className="mt-6 w-full text-sm text-gray-500 hover:underline">
                Cancel
              </button>
            </div>
          </div>
        )}
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen bg-[#f8f7f5] px-4 sm:px-6">
          <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center py-10 sm:py-12">
            <div className="mb-8 max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700 shadow-sm sm:text-xs">
                <Sparkles className="h-4 w-4" />
                Quiz Library
              </div>
              <h2 className="mt-5 text-3xl font-extrabold text-gray-950 sm:text-4xl">You must sign in to access quizzes</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">Sign in to purchase and access your practice quizzes.</p>
            </div>
            <div className="w-full max-w-md overflow-hidden rounded-[24px] bg-white p-4 shadow-xl sm:rounded-[28px] sm:p-8">
              <SignIn path="/choice" routing="path" />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default Choose;

/*
  Theme mapping:
  1. CAPM: PMI orange
  2. Scrum: purple
  3. Complete PMP: light blue
  4. People: brown/amber
  5. Process: teal
  6. Business Environment: indigo
*/
