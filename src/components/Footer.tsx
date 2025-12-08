import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { NavigationPage } from "../types";

interface FooterProps {
  onPageChange: (page: NavigationPage) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const quickLinks = [
    { id: "Home" as NavigationPage, label: "Início" },
    { id: "Discovery" as NavigationPage, label: "Explorar" },
    { id: "Contacto" as NavigationPage, label: "Contacto" },
  ];

  return (
    <footer className="bg-[#f3f1f1] dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-gray-100 mb-3">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-gray-700 dark:text-gray-400 hover:text-[#8b0d0d] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-gray-100 mb-3">Contacto</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#8b0d0d]" />
                <span>info@certipm.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8b0d0d]" />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#8b0d0d]" />
                <span>Maputo, Moçambique</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-gray-100 mb-3">Redes Sociais</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100064025047744#"
                className="text-gray-700 dark:text-gray-400 hover:text-[#8b0d0d] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/projectdirect3"
                className="text-gray-700 dark:text-gray-400 hover:text-[#8b0d0d] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/projectdirect9/"
                className="text-gray-700 dark:text-gray-400 hover:text-[#8b0d0d] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/project-direct-lda/posts/?feedView=all"
                className="text-gray-700 dark:text-gray-400 hover:text-[#8b0d0d] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Project Direct Lda. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            Developed by <a href="https://www.synctechx.com" target="_blank" className="font-semibold text-[#8b0d0d] hover:underline">SyncTechX</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
