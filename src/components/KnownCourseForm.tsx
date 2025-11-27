import React, { useEffect, useState } from "react";
import { CheckCircle2, Info } from "lucide-react";

interface Question {
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const steps = ["Questions 1-5", "Questions 6-10", "Questions 11-15", "Questions 16-20"];

const quizQuestions: Question[] = [
  {
    scenario: "Your company is developing a new customer-facing mobile app. The sponsor wants to release the full application at once, but the competitive market is evolving quickly.",
    question: "What should you do first to ensure the project delivers value as soon as possible?",
    options: [
      "Prioritise the backlog based on business value and work with stakeholders to plan incremental releases",
      "Ask the team to focus only on developing the features that are easiest to implement first",
      "Delay the discussion until the full design is complete",
      "Insist that the sponsor chooses which features to release first"
    ],
    correctAnswer: "Prioritise the backlog based on business value and work with stakeholders to plan incremental releases",
    explanation: "Incremental delivery requires identifying valuable features and arranging them so that early releases provide the highest business value. Prioritisation with stakeholders aligns scope with market needs and supports delivering value sooner."
  },
  {
    scenario: "A software modernisation project is halfway through development when a competitor releases a feature changing customer expectations.",
    question: "What should you do NEXT?",
    options: [
      "Continue with the current plan",
      "Work with the product owner and sponsor to reassess expected business value and adjust priorities if needed",
      "Put the project on hold until executives decide what to do",
      "Increase the team's work hours to catch up"
    ],
    correctAnswer: "Work with the product owner and sponsor to reassess expected business value and adjust priorities if needed",
    explanation: "Continuous evaluation of business value during execution is key. Collaborating with sponsor and product owner helps determine if scope, schedule, or priorities should be modified."
  },
  {
    scenario: "Your team is developing an employee mobile-access portal. The product owner wants to release an MVP in two months, but authentication alone will take that long.",
    question: "What should you do to help find a viable MVP?",
    options: [
      "Decompose authentication into smaller components to determine a simpler, secure version for MVP",
      "Tell the product owner MVP timeline must be extended",
      "Drop authentication from MVP",
      "Assign more people to accelerate authentication"
    ],
    correctAnswer: "Decompose authentication into smaller components to determine a simpler, secure version for MVP",
    explanation: "Decomposing tasks to identify minimum functionality needed encourages collaboration, creative problem-solving, and a true MVP mindset."
  },
  {
    scenario: "You are managing a hospital expansion project. Engineers prefer weekly technical briefings, administrators want high-level updates only on milestones.",
    question: "What should you do FIRST to ensure the communication approach fits stakeholder needs?",
    options: [
      "Send same weekly briefing to all",
      "Conduct stakeholder communication needs analysis",
      "Ask the Sponsor to decide communications",
      "Allow stakeholders to request updates when they want"
    ],
    correctAnswer: "Conduct stakeholder communication needs analysis",
    explanation: "A structured analysis identifies who needs what information, when, and in what form, aligning with project management best practices."
  },
  {
    scenario: "You are managing installation of a robotic assembly line. Supervisors prefer in-person briefings at shift changes, executives want monthly dashboards.",
    question: "What is the BEST action to ensure communication meets needs?",
    options: [
      "Communicate only via formal reports",
      "Hold daily meetings for all stakeholders",
      "Use only methods preferred by executives",
      "Establish a communication plan tailored to each stakeholder group"
    ],
    correctAnswer: "Establish a communication plan tailored to each stakeholder group",
    explanation: "Creating a comprehensive plan defining methods, channels, frequency, and detail ensures communication is structured and tailored."
  }
  // Continue filling all 20 questions in this format
];

const ProjectQuiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>(Array(quizQuestions.length).fill(''));
  const [showExplanation, setShowExplanation] = useState<boolean[]>(Array(quizQuestions.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [step]);

  const handleAnswerChange = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
    const explanationUpdated = [...showExplanation];
    explanationUpdated[index] = true;
    setShowExplanation(explanationUpdated);
  };

  const nextStep = () => step < steps.length && setStep(prev => prev + 1);
  const prevStep = () => step > 1 && setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quiz completed! Your answers have been submitted.');
  };

  const progress = (step / steps.length) * 100;
  const startIndex = (step - 1) * 5;
  const currentQuestions = quizQuestions.slice(startIndex, startIndex + 5);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-lg mb-4">
            <CheckCircle2 className="w-8 h-8 text-red-700" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Project Management Quiz</h1>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">Answer the questions carefully. Each step contains 5 questions.</p>
        </div>

        {/* Info Modal */}
        <button
          className="absolute top-4 right-4 p-3 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          <Info className="w-5 h-5" />
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-600 hover:text-black">×</button>
              <h3 className="font-semibold text-xl mb-2 text-center">Quiz Responsible</h3>
              <img src="/patricio.jpg" alt="Responsible person" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <p className="text-center text-lg">Patricio Inacio</p>
              <p className="text-center text-sm text-gray-600">Email: joao.silva@example.com</p>
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="relative mb-8">
          <div className="h-2 bg-gray-300 rounded-full">
            <div className="h-2 bg-gradient-to-r from-red-700 to-black rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-xs sm:text-sm font-medium">
            {steps.map((label, index) => (
              <span key={index} className={`${index + 1 <= step ? 'text-red-700 font-semibold' : 'text-gray-400'}`}>{label}</span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-red-700 shadow-xl rounded-2xl p-6 sm:p-10 space-y-8">
          {currentQuestions.map((q, i) => (
            <div key={startIndex + i} className="space-y-2">
              <p className="font-medium text-gray-800 italic mb-1">Scenario: {q.scenario}</p>
              <p className="font-semibold text-gray-900">Q{startIndex + i + 1}: {q.question}</p>
              <div className="flex flex-col gap-2 mt-1">
                {q.options.map((option, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer text-gray-800">
                    <input
                      type="radio"
                      name={`q${startIndex + i}`}
                      value={option}
                      checked={answers[startIndex + i] === option}
                      onChange={() => handleAnswerChange(startIndex + i, option)}
                      className="accent-red-700 focus:ring-red-700"
                    />
                    <span>{String.fromCharCode(65 + idx)}. {option}</span>
                  </label>
                ))}
              </div>
              {showExplanation[startIndex + i] && (
                <div className="mt-2 p-3 bg-gray-100 border-l-4 border-red-700 rounded">
                  <p className="font-semibold text-red-700">Explanation:</p>
                  <p className="text-gray-700 text-sm">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button type="button" onClick={prevStep} disabled={step === 1} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50">Previous</button>
            {step === steps.length ? (
              <button type="submit" className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors">Submit</button>
            ) : (
              <button type="button" onClick={nextStep} className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors">Next</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectQuiz;