// Updated Enquiry Component
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const Enquiry: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 800);
  };

  return (
    <div className="min-h-screen bg-[#f3f1f1] dark:bg-gray-900 transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#7a0b0b] dark:text-[#e8dddd] tracking-tight mb-3">
            Entrar em <span className="text-[#b81414]">Contacto</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Envie-nos uma mensagem ou utilize os nossos contactos diretos para falar connosco.
          </p>
        </div>

        {/* Grid Layout (Improved spacing & hierarchy) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left – Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-[#7a0b0b] dark:text-white mb-10">
                  Formulário de Contacto
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="O teu nome"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="teuemail@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Assunto */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Assunto"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      placeholder="A tua mensagem aqui..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-red-600 outline-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#8b0d0d] hover:bg-[#a11212] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center space-y-6 py-10">
                <CheckCircle className="w-20 h-20 text-green-600" />
                <h2 className="text-3xl font-bold text-[#7a0b0b] dark:text-white">
                  Mensagem Enviada!
                </h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-md">
                  A tua mensagem foi enviada com sucesso. Para assistência mais rápida, utiliza o WhatsApp.
                </p>
                <a
                  href="https://wa.me/258841234567?text=Olá!%20Gostaria%20de%20saber%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition"
                >
                  Falar no WhatsApp
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>

          {/* Right – Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#7a0b0b] dark:text-white mb-4">
                Detalhes de Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-lg">
                Podes entrar em contacto diretamente connosco através dos canais abaixo.
              </p>
            </div>

            {/* Contact Blocks (improved spacing & alignment) */}
            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    WhatsApp
                  </h4>
                  <p className="text-gray-700 dark:text-gray-400">+258 84 123 4567</p>
                  <a
                    href="https://wa.me/258847529665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition"
                  >
                    Enviar Mensagem
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-700 dark:text-gray-400">ajuda@projectdirect.com</p>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#8b0d0d] text-white shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Localização</h4>
                  <p className="text-gray-700 dark:text-gray-400">Maputo, Moçambique</p>
                </div>
              </div>
            </div>

            {/* Map Section (larger & cleaner) */}
            {/* <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
              <img
                src="/mz-loc2.avif"
                alt="Mapa de localização"
                className="w-full h-64 object-cover"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
