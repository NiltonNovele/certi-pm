import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl md:text-8xl font-extrabold text-gray-900 dark:text-white mb-6">
          x_x
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Oops! Parece que você tentou acessar uma página que não existe ou foi removida.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para Início
        </button>
      </div>
    </div>
  );
};

export default NotFound;
