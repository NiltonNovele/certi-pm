// Updated Navigation component styled to match the dark-red professional theme shown in the screenshots.

import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useTheme } from "../contexts/ThemeContext";
import {
  Home,
  Brain,
  Contact,
  Menu,
  X,
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/projectQuiz", label: "Praticar", icon: Brain },
    { path: "/contact", label: "Contacto", icon: Contact },
  ];

  return (
    <>
      <audio ref={audioRef} src="/helio.mp3" loop />

      {/* NAVBAR */}
      <nav className="bg-[#7A0A0A] shadow-lg sticky top-0 z-50 border-b border-[#9c1d1d] transition-colors duration-200">
        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                {/* <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl"> */}
                  <img src="/pjlogo.png" width={100} height={100}/>
                {/* </div> */}
              </div>
              <div>
                {/* <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
                  Project Direct
                </span> */}
                <div className="text-xs text-red-200 font-medium uppercase tracking-widest">
                  Project Direct Lda.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 uppercase tracking-wide
                    ${location.pathname === path
                      ? "text-white bg-[#A81414] shadow-lg shadow-black/30"
                      : "text-red-100 hover:text-white hover:bg-[#8d1313]"}
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            {/* Theme + Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-red-100 hover:text-white hover:bg-[#8d1313] transition-all duration-200"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button> */}

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
            <div className="lg:hidden border-t border-[#9c1d1d] bg-[#7A0A0A]">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-4 text-sm font-semibold uppercase tracking-wide
                    ${location.pathname === path
                      ? "text-white bg-[#A81414]"
                      : "text-red-100 hover:text-white hover:bg-[#8d1313]"}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-white dark:bg-gray-800 w-11/12 md:w-3/4 lg:w-2/3 rounded-2xl shadow-lg relative overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <iframe
              src="https://refres.co/trilho.academico"
              className="w-full h-[600px] rounded-2xl"
              frameBorder="0"
              title="Doação Trilho Académico"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
