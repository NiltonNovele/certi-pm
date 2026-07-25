import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = window.setTimeout(() => setVisible(true), 500);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-2xl"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-md">
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="hidden shrink-0 rounded-2xl bg-red-50 p-3 text-red-700 sm:block">
                  <Cookie className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-700">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Privacy
                      </div>

                      <h2 className="mt-3 text-lg font-bold text-gray-900 sm:text-xl">
                        We use cookies
                      </h2>
                    </div>

                    <button
                      onClick={() => setVisible(false)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                      aria-label="Close cookie notice"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                    This website uses cookies to improve your browsing
                    experience, remember your preferences, and help us understand
                    how the site is used. By clicking{" "}
                    <span className="font-semibold text-gray-900">Accept</span>,
                    you agree to the use of cookies. You can refuse if you
                    prefer.{" "}
                    <Link
                      to="/terms"
                      className="font-medium text-red-700 underline underline-offset-4 transition hover:text-red-800"
                    >
                      Learn more
                    </Link>
                    .
                  </p>

                  <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                    <button
                      onClick={() => handleConsent("rejected")}
                      className="inline-flex items-center justify-center rounded-2xl bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => handleConsent("accepted")}
                      className="inline-flex items-center justify-center rounded-2xl bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-800"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 bg-gray-50/80 px-5 py-3 sm:px-6">
              <p className="text-xs leading-6 text-gray-500">
                Your choice will be saved on this device.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;