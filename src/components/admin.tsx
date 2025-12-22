import { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5006" });

export default function AdminDashboard() {
  const [pin, setPin] = useState("");
  const [auth, setAuth] = useState(false);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  const login = async () => {
    try {
      api.defaults.headers.pin = pin;
      await api.get("/api/admin/quizzes");
      setAuth(true);
      load();
    } catch {
      alert("Invalid PIN");
    }
  };

  const load = async () => {
    const res = await api.get("/api/admin/quizzes");
    setQuizzes(res.data);
  };

  const addQuestion = () => {
    setSelected({
      ...selected,
      questions: [...selected.questions, {
        scenario: "",
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0,
        explanation: ""
      }]
    });
  };

  if (!auth)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow">
          <input maxLength={4} onChange={e => setPin(e.target.value)} />
          <button onClick={login}>Enter</button>
        </div>
      </div>
    );

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        {quizzes.map(q => (
          <div key={q._id} className="p-4 bg-white shadow rounded"
               onClick={() => setSelected(q)}>
            <h2>{q.title}</h2>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">{selected.title}</h2>

          {selected.questions.map((q: any, i: number) => (
            <div key={i} className="border p-4 mb-4">
              <input placeholder="Scenario"
                value={q.scenario}
                onChange={e => q.scenario = e.target.value} />
              <input placeholder="Question"
                value={q.question}
                onChange={e => q.question = e.target.value} />

              {q.options.map((o: string, j: number) => (
                <input key={j}
                  placeholder={`Option ${j + 1}`}
                  value={o}
                  onChange={e => q.options[j] = e.target.value} />
              ))}

              <select
                value={q.correctAnswer}
                onChange={e => q.correctAnswer = Number(e.target.value)}>
                {[0,1,2,3].map(i => <option key={i} value={i}>{i+1}</option>)}
              </select>

              <textarea placeholder="Explanation"
                value={q.explanation}
                onChange={e => q.explanation = e.target.value} />
            </div>
          ))}

          <button onClick={addQuestion}>Add Question</button>
          <button onClick={() =>
            api.put(`/api/admin/quizzes/${selected._id}`, selected)
          }>Save</button>
        </div>
      )}
    </div>
  );
}
