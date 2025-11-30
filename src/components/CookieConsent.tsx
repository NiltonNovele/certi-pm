import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 z-50 w-auto md:max-w-sm"
        >
          <p className="text-sm text-gray-800 mb-3 leading-relaxed">
            This website uses cookies to improve your browsing experience. By
            clicking{" "}
            <span className="font-semibold">“Accept”</span>, you agree to the
            use of cookies. You can refuse if you prefer.{" "}
            <a
              href="/terms"
              className="underline text-red-700 hover:text-red-800 transition"
            >
              Learn more
            </a>
            .
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={rejectCookies}
              className="px-3 py-1 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Reject
            </button>

            <button
              onClick={acceptCookies}
              className="px-3 py-1 text-sm rounded-lg bg-red-700 text-white hover:bg-red-800 transition"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
