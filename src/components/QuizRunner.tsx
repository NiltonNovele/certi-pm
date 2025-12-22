import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignIn, useUser } from "@clerk/clerk-react";

const QuizRunner: React.FC = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const [quiz, setQuiz] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);

  // Fetch quiz from backend
  useEffect(() => {
    if (!quizId) return;
    axios.get(`http://localhost:5006/api/quizzes/${quizId}`)
      .then(res => {
        setQuiz(res.data);
        setAnswers(Array(res.data.questions.length).fill(-1));
        setTimeLeft(res.data.timeLimitMinutes * 60);
      })
      .catch(err => console.error(err));
  }, [quizId]);

  // Timer
  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!quiz) return <div>Loading...</div>;
  const q = quiz.questions[index];

  const submitQuiz = async () => {
    if (!user) return;
    try {
      const res = await axios.post(
        `http://localhost:5006/api/quizzes/${quiz.quizId}/submit`,
        {
          userId: user.id,
          answers
        }
      );
      navigate("/review", { state: { quiz, answers, ...res.data } });
    } catch (err) {
      console.error(err);
      alert("Failed to submit quiz.");
    }
  };

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
          <p className="text-red-700 font-bold mb-4">
            Time Remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
          </p>

          <p className="italic text-gray-600">{q.scenario}</p>
          <p className="font-semibold mt-2">{q.question}</p>

          <div className="mt-4 space-y-2">
            {q.options.map((o: string, i: number) => (
              <label key={i} className="flex gap-2 items-center cursor-pointer">
                <input
                  type="radio"
                  checked={answers[index] === i}
                  onChange={() => {
                    const a = [...answers];
                    a[index] = i;
                    setAnswers(a);
                  }}
                  className="accent-red-700"
                />
                {o}
              </label>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              disabled={index === 0}
              onClick={() => setIndex(i => i - 1)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
            >
              Prev
            </button>

            {index === quiz.questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className="bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => setIndex(i => i + 1)}
                className="bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      <SignedOut>
        <SignIn path={`/quiz/${quizId}`} routing="path" />
      </SignedOut>
    </SignedIn>
  );
};

export default QuizRunner;
