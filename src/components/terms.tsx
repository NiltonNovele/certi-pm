// pages/terms.tsx
import React from 'react';

  const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Termos e Condições de Uso e Política de Privacidade</h1>
        <p className="text-gray-500 text-sm text-center">
          Trilho Acadêmico – SyncTechX Lda. <br />
          Data de entrada em vigor: 27 de Outubro de 2025 | Última atualização: 27 de Outubro de 2025
        </p>

        <p className="text-gray-700">
          Bem-vindo ao Trilho Acadêmico, uma plataforma inovadora desenvolvida pela SyncTechX Lda., destinada a revolucionar a orientação educacional em Moçambique através do uso de Inteligência Artificial (IA) e ferramentas digitais de última geração. Ao acessar ou utilizar nossos serviços, o usuário concorda integralmente com estes Termos e Condições e com a Política de Privacidade. Caso não concorde, o usuário deverá interromper imediatamente o uso da plataforma.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Definições</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Plataforma:</strong> refere-se ao Trilho Acadêmico, acessível via web ou aplicativo móvel.</li>
          <li><strong>Usuário:</strong> pessoa física que acessa ou utiliza a plataforma.</li>
          <li><strong>Conta:</strong> perfil criado pelo usuário para acessar funcionalidades exclusivas.</li>
          <li><strong>Dados pessoais:</strong> qualquer informação relacionada a uma pessoa identificada ou identificável.</li>
          <li><strong>SyncTechX:</strong> empresa responsável pelo desenvolvimento, operação e manutenção da plataforma Trilho Acadêmico.</li>
          <li><strong>Parceiros:</strong> instituições de ensino, empresas e órgãos governamentais integrados à plataforma.</li>
          <li><strong>Serviços:</strong> todos os recursos, funcionalidades e conteúdos disponibilizados pelo Trilho Acadêmico.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Objetivo da Plataforma</h2>
        <p className="text-gray-700">
          O Trilho Acadêmico foi desenvolvido para ajudar estudantes a descobrirem suas vocações através de análises baseadas em IA, oferecer recomendações personalizadas de cursos e carreiras, mapear universidades e bolsas de estudo, simplificar a jornada acadêmica e conectar estudantes a oportunidades reais.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Aceitação dos Termos</h2>
        <p className="text-gray-700">
          Ao se cadastrar ou utilizar a plataforma, o usuário declara que possui pelo menos 16 anos de idade ou está utilizando o serviço com consentimento dos pais ou responsáveis, fornecerá informações verdadeiras e compreende que os Termos podem ser atualizados periodicamente.
        </p>

        {/* Continue adicionando seções aqui com o mesmo padrão de heading + parágrafo/lista */}

        <h2 className="text-xl font-semibold text-gray-800 mt-6">14. Disposições Finais</h2>
        <p className="text-gray-700">
          A nulidade de qualquer cláusula destes Termos não afetará as demais disposições. Estes Termos constituem o acordo integral entre o usuário e a SyncTechX, substituindo quaisquer acordos anteriores.
        </p>

        <div className="text-center mt-6">
          <a href="/">
            <a className="text-purple-600 hover:underline font-medium">Voltar à página inicial</a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terms;
