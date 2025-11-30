// QuizResults.tsx - React Router version
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import quizQuestions from "../data/quizQuestions";

const QuizResults: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [reviewMode, setReviewMode] = useState(false);

  // Get user answers from navigation state
  const userAnswers: string[] = location.state?.userAnswers || [];

  // Calculate score
  const score = quizQuestions.reduce(
    (total, question, idx) =>
      total + (userAnswers[idx] === question.correctAnswer ? 1 : 0),
    0
  );

  // Retry quiz
  const retryQuiz = () => {
    navigate("/projectQuiz", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Quiz Results
          </h1>
          <p className="mt-2 text-gray-700 text-lg">
            You scored{" "}
            <span className="font-bold text-red-700">
              {score}/{quizQuestions.length}
            </span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            onClick={retryQuiz}
            className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
          >
            Retry Quiz
          </button>

          <button
            onClick={() => setReviewMode(!reviewMode)}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            {reviewMode ? "Hide Review" : "Review Quiz"}
          </button>
        </div>

        {/* Review Section */}
        {reviewMode &&
          quizQuestions.map((q, idx) => {
            const isCorrect = userAnswers[idx] === q.correctAnswer;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-300 rounded-xl p-4 sm:p-6 shadow mb-4"
              >
                <p className="italic text-gray-700 mb-1">Scenario: {q.scenario}</p>
                <p className="font-semibold text-gray-900 mb-2">
                  Q{idx + 1}: {q.question}
                </p>

                <div className="flex flex-col gap-1 mb-2">
                  {q.options.map((option, i) => {
                    const selected = userAnswers[idx] === option;
                    const correct = option === q.correctAnswer;
                    return (
                      <p
                        key={i}
                        className={`pl-2 ${
                          correct
                            ? "text-green-700 font-semibold"
                            : selected && !correct
                            ? "text-red-700 line-through"
                            : "text-gray-800"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}. {option}
                      </p>
                    );
                  })}
                </div>

                <div className="p-3 bg-gray-100 border-l-4 border-red-700 rounded">
                  <p className="font-semibold text-red-700">Explanation:</p>
                  <p className="text-gray-700 text-sm">{q.explanation}</p>
                </div>

                <p className="mt-2 text-sm">
                  Your answer:{" "}
                  <span
                    className={
                      isCorrect
                        ? "text-green-700 font-semibold"
                        : "text-red-700 font-semibold"
                    }
                  >
                    {userAnswers[idx] || "No answer"}
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default QuizResults;
