import React, { useState } from "react";
import axios from "axios";
import { SignedIn, SignedOut, SignIn, useUser  } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface QuizChoice {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  redirectUrl: string;
  comingSoon?: boolean;
  promotion?: string;
}

const quizzes: QuizChoice[] = [
  {
    id: "pmp",
    title: "PMP Practice Quiz",
    description: "Prepare for the Project Management Professional (PMP) exam.",
    instructor: "Patricio Inacio",
    price: 399,
    originalPrice: 1399,
    redirectUrl: "/projectQuiz",
    promotion: "Black November",
  },
  {
    id: "capm",
    title: "CAPM Practice Quiz",
    description:
      "Certified Associate in Project Management (CAPM) practice questions.",
    instructor: "Patricio Inacio",
    price: 1000,
    redirectUrl: "",
    comingSoon: true,
  },
  {
    id: "scrum",
    title: "Scrum Master Quiz",
    description: "Agile Scrum Master certification practice questions.",
    instructor: "Patricio Inacio",
    price: 1200,
    redirectUrl: "",
    comingSoon: true,
  },
];

const VALID_PROMO_CODE = "CERTIPM01SYNCTECHX";

const Choose: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

  const handlePracticeNow = async (quiz: QuizChoice) => {
  if (quiz.comingSoon) return;

  setLoading(quiz.id);
  try {
    const user_id = "USER_ID_HERE"; // Replace with real Clerk ID

    const response = await axios.post(
      "https://api.certipm.com/api/create-payment",
      {
        amount: 1,
        description: `${quiz.title} Practice Quiz`,
        user_id,
      }
    );

    if (response.data.checkout_url) {
      // ✅ Store desired redirect
      localStorage.setItem("postPaymentRedirect", quiz.redirectUrl);

      // ✅ Redirect to Riha
      window.location.href = response.data.checkout_url;
    } else {
      alert("Failed to generate payment link. Please try again.");
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment initiation failed.");
  } finally {
    setLoading(null);
  }
};

  const handleApplyPromo = () => {
    if (promoCode.trim() === VALID_PROMO_CODE) {
      setPromoError("");
      navigate("/projectQuiz");
    } else {
      setPromoError("Invalid promo code. Please try again.");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
          {/* PROMO CODE SECTION */}
          <div className="max-w-lg mx-auto mb-10 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Have a promo code?
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              Enter your promo code below to unlock direct access.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                onClick={handleApplyPromo}
                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition font-semibold"
              >
                Apply Code
              </button>
            </div>

            {promoError && (
              <p className="text-red-600 text-sm mt-2">{promoError}</p>
            )}
          </div>

          {/* QUIZ CARDS */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between relative"
              >
                {quiz.comingSoon && (
                  <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}

                {quiz.promotion && (
                  <span className="absolute top-4 right-4 bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {quiz.promotion}
                  </span>
                )}

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {quiz.title}
                  </h2>
                  <p className="text-gray-700 mb-2">{quiz.description}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    Instructor: <span className="font-medium">{quiz.instructor}</span>
                  </p>

                  {quiz.originalPrice ? (
                    <div className="mb-1">
                      <span className="text-gray-500 line-through mr-2">
                        {quiz.originalPrice.toLocaleString()} MZN
                      </span>
                      <span className="text-lg font-bold text-red-700">
                        {quiz.price.toLocaleString()} MZN
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-800 font-semibold">
                      Price: {quiz.price.toLocaleString()} MZN
                    </p>
                  )}
                </div>

                <button
                  disabled={loading === quiz.id || quiz.comingSoon}
                  onClick={() => handlePracticeNow(quiz)}
                  className={`mt-4 w-full px-4 py-2 rounded-lg transition font-semibold ${
                    quiz.comingSoon
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-red-700 text-white hover:bg-red-800"
                  }`}
                >
                  {quiz.comingSoon
                    ? "Coming Soon"
                    : loading === quiz.id
                    ? "Processing..."
                    : "Practice Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You must sign in to access quizzes
          </h2>
          <SignIn path="/choice" routing="path" />
        </div>
      </SignedOut>
    </>
  );
};

export default Choose;
