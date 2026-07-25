import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, Home } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#7a0b0b] via-[#8f1212] to-[#b11a1a] px-4 py-10 sm:px-6">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-2xl">
        <div className="rounded-[32px] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md sm:p-10 md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-white shadow-lg sm:h-24 sm:w-24">
            <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
            Error 404
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-red-50 sm:text-base">
            Sorry, the page you are looking for does not exist, may have been
            moved, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#7a0b0b] shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50 sm:w-auto sm:text-base"
            >
              <Home className="h-5 w-5" />
              Go to Home
            </button>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <p className="text-xs leading-6 text-red-100/90 sm:text-sm">
              Please check the web address or return to the homepage to continue browsing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;