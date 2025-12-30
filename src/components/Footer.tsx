import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BadgeCheck,
  X,
} from "lucide-react";
import { NavigationPage } from "../types";

interface FooterProps {
  onPageChange: (page: NavigationPage) => void;
}

const Footer: React.FC<FooterProps> = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      {/* MODAL */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-md w-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X />
            </button>

            <img
              src={modalImage}
              alt="Certification Badge"
              className="w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <footer className="bg-[#f3f1f1] dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-16">
        <div className="max-w-6xl mx-auto px-5 py-14">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* BRAND */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-7 h-7 text-[#8b0d0d]" />
                <h3 className="text-xl font-extrabold text-[#7a0b0b] dark:text-gray-100">
                  CertiPM
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
                First digital platform that drives professionals to accomplishing
                their world-recognized certifications, from Mozambique, led by
                Patricio Inacio — a reference in project management in Mozambique.
              </p>

              {/* AUTHORIZATION */}
              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                  Authorized Training Partner
                </p>

                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Project Direct Lda. is an <strong>Authorized Training Partner</strong> of PMI
                  (Project Management Institute).
                </p>

                {/* BADGES */}
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  {/* PMI Badge */}
                  <div
                    onClick={() => setModalImage("/atp.jpeg")}
                    className="cursor-pointer w-28 h-20 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 hover:scale-105 transition"
                  >
                    <img
                      src="/atp.jpeg"
                      alt="PMI Authorized Training Partner"
                      className="max-h-16 object-contain"
                    />
                  </div>

                  {/* Instructor Badge */}
                  <div
                    onClick={() => setModalImage("/patricio-badge.jpeg")}
                    className="cursor-pointer w-28 h-20 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 hover:scale-105 transition"
                  >
                    <img
                      src="/atp.jpeg"
                      alt="Authorized Training Instructor"
                      className="max-h-16 object-contain"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Authorized Training Instructor:{" "}
                  <span className="font-semibold">Patricio Inacio</span>
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-gray-100">
                Contact
              </h3>

              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#8b0d0d]" />
                  info@certipm.com
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8b0d0d]" />
                  +258 85 802 9205
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#8b0d0d]" />
                  Maputo, Mozambique
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-gray-100">
                Social Media
              </h3>

              <div className="flex gap-5">
                <a href="https://www.facebook.com/profile.php?id=100064025047744#" target="_blank" rel="noopener noreferrer">
                  <Facebook className="hover:text-[#8b0d0d]" />
                </a>
                <a href="https://x.com/projectdirect3" target="_blank" rel="noopener noreferrer">
                  <Twitter className="hover:text-[#8b0d0d]" />
                </a>
                <a href="https://www.instagram.com/projectdirect9/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="hover:text-[#8b0d0d]" />
                </a>
                <a href="https://www.linkedin.com/company/project-direct-lda/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-[#8b0d0d]" />
                </a>
              </div>

              <div className="mt-6 w-full h-24 border border-dashed rounded-lg flex items-center justify-center bg-white dark:bg-gray-800">
                <img
                  src="/logowhite.png"
                  alt="Project Direct Logo"
                  className="max-h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Project Direct Lda. All rights reserved.
            </p>

            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Developed by{" "}
              <a
                href="https://www.synctechx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#8b0d0d] hover:underline"
              >
                SyncTechX
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
