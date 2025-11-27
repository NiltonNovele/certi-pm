import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent: React.FC = () => {
  const [visivel, setVisivel] = useState<boolean>(false);

  useEffect(() => {
    const consentimento = localStorage.getItem("cookieConsent");
    if (!consentimento) {
      setVisivel(true);
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem("cookieConsent", "aceite");
    setVisivel(false);
  };

  const recusarCookies = () => {
    localStorage.setItem("cookieConsent", "recusado");
    setVisivel(false);
  };

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-2xl p-5 z-50 w-auto md:max-w-sm"
        >
          <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">
            Este website utiliza cookies para melhorar a sua experiência de
            navegação. Ao clicar em <span className="font-semibold">“Aceitar”</span>, 
            autoriza a utilização de cookies. Pode recusar se preferir.{" "}
            <a
              href="/terms"
              className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              Saiba mais
            </a>
            .
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={recusarCookies}
              className="px-3 py-1 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Recusar
            </button>
            <button
              onClick={aceitarCookies}
              className="px-3 py-1 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
