import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";
import {
  Home,
  Brain,
  Contact,
  Menu,
  X,
  BadgeCheck,
  LogIn,
  BookOpenText,
  Compass,
  ChevronRight,
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/courses", label: "Courses", icon: BookOpenText },
    { path: "/choice", label: "Practice", icon: Brain },
    { path: "/services", label: "Consultancy", icon: Compass },
    { path: "/contact", label: "Contact", icon: Contact },
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isModalOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#7A0A0A]/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 min-h-[76px] items-center justify-between gap-4">
            {/* Brand */}
            <Link
              to="/"
              className="group flex min-w-0 items-center gap-3"
              aria-label="CertiPM Home"
            >
              <img
                src="/atp.jpeg"
                alt="PMI ATP Badge"
                className="h-10 w-10 shrink-0 rounded-xl border border-white/30 object-cover shadow-sm"
              />

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                <BadgeCheck className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <div className="truncate text-xl font-extrabold uppercase tracking-wide text-white sm:text-2xl">
                  CertiPM
                </div>
                <div className="truncate text-[10px] font-medium uppercase tracking-[0.22em] text-red-200 sm:text-xs">
                  By Project Direct Lda.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-2 lg:flex">
              {navItems.map(({ path, label, icon: Icon }) => {
                const isActive = location.pathname === path;

                return (
                  <Link
                    key={path}
                    to={path}
                    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-white text-[#7A0A0A] shadow-md"
                        : "text-red-100 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                );
              })}

              <div className="ml-2 flex items-center">
                <SignedOut>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#6c47ff] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#7b59ff]"
                  >
                    <LogIn className="h-4 w-4" />
                    Sign in / Sign up
                  </button>
                </SignedOut>

                <SignedIn>
                  <div className="rounded-full bg-white/10 p-1 ring-1 ring-white/10">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <SignedIn>
                <div className="rounded-full bg-white/10 p-1 ring-1 ring-white/10">
                  <UserButton />
                </div>
              </SignedIn>

              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-50 transition hover:bg-white/10"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`fixed inset-0 top-[76px] bg-black/40 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={`absolute left-0 right-0 top-full border-t border-white/10 bg-[#7A0A0A] shadow-2xl transition-all duration-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <div className="space-y-1">
                  {navItems.map(({ path, label, icon: Icon }) => {
                    const isActive = location.pathname === path;

                    return (
                      <Link
                        key={path}
                        to={path}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-white text-[#7A0A0A]"
                            : "text-red-100 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" />
                          <span>{label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 opacity-70" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <SignedOut>
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#6c47ff] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#7b59ff]"
                    >
                      <LogIn className="h-4 w-4" />
                      Sign in / Sign up
                    </button>
                  </SignedOut>

                  <SignedIn>
                    <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-red-100">
                      You are signed in.
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sign In Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-[28px] bg-white p-4 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-600"
              aria-label="Close sign in modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pt-8">
              <SignIn />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;