import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#f3f1f1] text-gray-900 transition-colors duration-200 overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-[85vh] flex items-center justify-center text-center px-6">
        <img
          src="/images/project-direct-banner.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#7a0b0b]">
            Consultoria • Gestão de Projectos • Capacitação
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ajudamos organizações a crescer, melhorar processos,
            desenvolver competências e entregar resultados reais.
          </p>

          <Link to="/projectQuiz">
            <button className="px-10 py-4 bg-[#8b0d0d] hover:bg-[#a11212] rounded-2xl text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform flex items-center mx-auto space-x-2">
              <Rocket className="w-5 h-5" />
              <span>Fazer Quiz</span>
            </button>
          </Link>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section className="py-20 bg-[#f3f1f1]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <img
              src="pjlogo2.png"
              className="w-100 h-80 rounded-3xl object-cover shadow-xl border border-[#8b0d0d]"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">Sobre Nós</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              Somos uma empresa de consultoria em gestão comprometida com o
              aperfeiçoamento das competências de gestão de projectos e programas
              em organizações e pessoas. A nossa missão é criar valor para os nossos parceiros.
            </p>
            <p className="leading-relaxed text-gray-700">
              Sediados em Maputo, fornecemos soluções ajustadas e focadas em resultados.
            </p>
          </div>

        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section className="py-20 bg-[#f3f1f1]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#7a0b0b]">O Que Fazemos</h2>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Avaliamos e apoiamos organizações na resolução de problemas, maximização do desempenho,
            melhoria de processos e desenvolvimento de competências.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#7a0b0b]">Pesquisa</h3>
              <p className="text-gray-700 text-sm">
                Realizamos pesquisas em gestão e negociação para apoio na tomada de decisões.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#7a0b0b]">Consultoria</h3>
              <p className="text-gray-700 text-sm">
                Avaliamos organizações, identificamos oportunidades e apoiamos na implementação de soluções.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#7a0b0b]">Projectos</h3>
              <p className="text-gray-700 text-sm">
                Garantimos processos adequados para o ciclo de vida completo de cada projecto.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-[#f3f1f1]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">Os Nossos Valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {[
              { t: "Apoio", d: "Apoiamo-nos mutuamente e enfrentamos obstáculos em equipa." },
              { t: "Avanço", d: "Desejamos crescimento contínuo e evitamos a estagnação." },
              { t: "Posse", d: "Assumimos responsabilidade e tratamos cada projecto como nosso." },
              { t: "Profissionalismo", d: "Mantemos ética, respeito e integridade em tudo o que fazemos." },
            ].map((v, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-semibold text-[#7a0b0b] mb-3">{v.t}</h3>
                <p className="text-gray-700 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE O INSTRUTOR */}
      <section className="py-20 bg-[#f3f1f1]">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#7a0b0b]">Sobre o Instrutor</h2>
            <p className="leading-relaxed mb-6 text-gray-700">
              O instrutor responsável pela formação é um profissional experiente
              com anos de prática em gestão, capacitação e consultoria estratégica.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✔ +5 anos de experiência</li>
              <li>✔ Especialista em desenvolvimento organizacional</li>
              <li>✔ Mentor de equipas e profissionais em vários sectores</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/patricio.jpg"
              className="w-72 h-72 rounded-3xl object-cover shadow-xl border border-[#8b0d0d]"
            />
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f3f1f1]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-[#7a0b0b]">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quem pode beneficiar dos vossos serviços?",
                a: "Empresas, organizações, empreendedores e profissionais que procuram melhorar processos ou adquirir competências."
              },
              {
                q: "Oferecem formações presenciais e online?",
                a: "Sim, disponibilizamos ambos os formatos dependendo das necessidades do cliente."
              },
              {
                q: "Como posso solicitar um orçamento?",
                a: "Basta entrar em contacto connosco através da página de contacto."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="font-semibold mb-2 text-[#7a0b0b]">{item.q}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
