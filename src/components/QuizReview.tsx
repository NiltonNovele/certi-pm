import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizReview: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div>No results available</div>;

  const { quiz, answers, score, passed, attemptNumber, locked } = state;

  if (locked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Access Locked
          </h2>
          <p>You have exceeded the maximum of 2 attempts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-2">{quiz.title} – Results</h1>
        <p className="mb-1">Attempt: {attemptNumber} / 2</p>
        <p className="mb-1">Score: <strong>{score}%</strong></p>

        <p className={`font-bold ${passed ? "text-green-600" : "text-red-600"}`}>
          {passed ? "PASSED" : "FAILED (Minimum 85%)"}
        </p>

        <hr className="my-6" />

        {quiz.questions.map((q: any, i: number) => (
          <div key={i} className="mb-6">
            <p className="font-semibold">{i + 1}. {q.question}</p>

            <p className="text-sm mt-1">
              Your Answer:{" "}
              <span className={answers[i] === q.correctAnswer ? "text-green-600" : "text-red-600"}>
                {q.options[answers[i]] ?? "No answer"}
              </span>
            </p>

            <p className="text-sm">
              Correct Answer:{" "}
              <span className="text-green-700 font-medium">
                {q.options[q.correctAnswer]}
              </span>
            </p>

            <p className="text-sm text-gray-600 mt-1">
              Explanation: {q.explanation}
            </p>

            <hr className="mt-4" />
          </div>
        ))}

        {!passed && attemptNumber < 2 && (
          <button
            onClick={() => navigate(`/quiz/${quiz.quizId}`)}
            className="mt-6 bg-red-700 text-white px-4 py-2 rounded"
          >
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizReview;
