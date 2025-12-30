import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from "@clerk/clerk-react";
import { Home, Brain, Contact, Menu, X, BadgeCheck, LogIn, BookOpenText, Compass } from "lucide-react";

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

  return (
    <>
      <nav className="bg-[#7A0A0A] shadow-lg sticky top-0 z-50 border-b border-[#9c1d1d] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo + ATP Badge */}
            <Link to="/" className="flex items-center space-x-3">
              <img src="/atp.jpeg" alt="PMI ATP Badge" className="w-10 h-auto rounded shadow-sm border border-white" />
              <BadgeCheck className="w-9 h-9 text-white" />
              <div>
                <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
                  CertiPM
                </span>
                <div className="text-xs text-red-200 font-medium tracking-widest">
                  By Project Direct Lda.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 uppercase tracking-wide
                    ${location.pathname === path
                      ? "text-white bg-[#A81414] shadow-lg shadow-black/30"
                      : "text-red-100 hover:text-white hover:bg-[#8d1313]"}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}

              {/* Clerk inline modal trigger */}
              <SignedOut>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-[#6c47ff] text-white text-sm font-medium flex items-center gap-1"
                >
                  <LogIn className="w-4 h-4" />
                  Sign in / Sign up
                </button>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-red-100 hover:text-white hover:bg-[#8d1313] transition-all duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-[#9c1d1d] bg-[#7A0A0A] flex flex-col">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-4 text-sm font-semibold uppercase tracking-wide
                    ${location.pathname === path
                      ? "text-white bg-[#A81414]"
                      : "text-red-100 hover:text-white hover:bg-[#8d1313]"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}

              {/* Mobile Clerk modal button */}
              <div className="px-4 py-4 flex flex-col space-y-2 border-t border-[#9c1d1d]">
                <SignedOut>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full px-4 py-2 rounded-lg bg-[#6c47ff] text-white text-sm font-medium flex justify-center items-center gap-1"
                  >
                    <LogIn className="w-4 h-4" /> Sign in / Sign up
                  </button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Clerk SignIn Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <SignIn />
        </div>
      )}
    </>
  );
};

export default Navigation;
