import React, { useState } from "react";
import axios from "axios";
import {
  SignedIn,
  SignedOut,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
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
    price: 999,
    originalPrice: 1899,
    redirectUrl: "/pmp",
    promotion: "New Year’s Special",
  },
  {
    id: "capm",
    title: "CAPM Practice Quiz",
    description:
      "Certified Associate in Project Management (CAPM) practice questions.",
    instructor: "Patricio Inacio",
    price: 799,
    originalPrice: 1699,
    redirectUrl: "/capm",
    promotion: "New Year’s Special",
  },
  {
    id: "scrum",
    title: "Scrum Master Quiz",
    description: "Agile Scrum Master certification practice questions.",
    instructor: "Patricio Inacio",
    price: 599,
    originalPrice: 1499,
    redirectUrl: "/scrum",
    promotion: "New Year’s Special",
  },
];

const VALID_PROMO_CODE = "CERTIPM01SYNCTECHX";

const Choose: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [loading, setLoading] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [showPromoModal, setShowPromoModal] = useState(false);

  const handlePracticeNow = async (quiz: QuizChoice) => {
    if (quiz.comingSoon) return;

    setLoading(quiz.id);
    try {
      const user_id = user?.id;

      const response = await axios.post(
        "https://api.certipm.com/api/create-payment",
        {
          amount: quiz.price,
          description: `${quiz.title} Practice Quiz`,
          user_id,
          redirect_url: `${window.location.origin}${quiz.redirectUrl}`,
        }
      );

      if (response.data.checkout_url) {
        localStorage.setItem("postPaymentRedirect", quiz.redirectUrl);
        window.location.href = response.data.checkout_url;
      } else {
        alert("Failed to generate payment link.");
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
      setShowPromoModal(true);
    } else {
      setPromoError("Invalid promo code. Please try again.");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
          {/* PROMO SECTION */}
          <div className="max-w-lg mx-auto mb-10 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">Have a promo code?</h2>
            <p className="text-gray-600 text-sm mb-4">
              Enter your promo code to unlock instant access.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600"
              />
              <button
                onClick={handleApplyPromo}
                className="px-6 py-2 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800"
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
                className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between relative"
              >
                {quiz.promotion && (
                  <span className="absolute top-4 right-4 bg-red-700 text-white text-xs px-3 py-1 rounded-full">
                    {quiz.promotion}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                  <p className="text-gray-700 mb-2">{quiz.description}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    Instructor:{" "}
                    <span className="font-medium">{quiz.instructor}</span>
                  </p>

                  <div>
                    <span className="line-through text-gray-400 mr-2">
                      {quiz.originalPrice?.toLocaleString()} MZN
                    </span>
                    <span className="text-lg font-bold text-red-700">
                      {quiz.price.toLocaleString()} MZN
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handlePracticeNow(quiz)}
                  disabled={loading === quiz.id}
                  className="mt-4 w-full py-2 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800"
                >
                  {loading === quiz.id ? "Processing..." : "Practice Now"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PROMO MODAL */}
        {showPromoModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold mb-2">
                🎉 Promo Code Activated!
              </h2>
              <p className="text-gray-600 mb-4">
                Choose which quiz you would like to start.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => navigate("/pmp")}
                  className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  PMP Practice Quiz
                </button>
                <button
                  onClick={() => navigate("/capm")}
                  className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  CAPM Practice Quiz
                </button>
                <button
                  onClick={() => navigate("/scrum")}
                  className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  Scrum Master Quiz
                </button>
              </div>

              <button
                onClick={() => setShowPromoModal(false)}
                className="mt-5 text-sm text-gray-500 hover:underline w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <h2 className="text-2xl font-bold mb-6">
            You must sign in to access quizzes
          </h2>
          <SignIn path="/choice" routing="path" />
        </div>
      </SignedOut>
    </>
  );
};

export default Choose;
