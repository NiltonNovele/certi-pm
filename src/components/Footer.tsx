
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
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { NavigationPage } from "../types";

interface FooterProps {
  onPageChange: (page: NavigationPage) => void;
}

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100064025047744#",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://x.com/projectdirect3",
    label: "X",
    icon: Twitter,
  },
  {
    href: "https://www.instagram.com/projectdirect9/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/project-direct-lda/posts/?feedView=all",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "info@certipm.com",
    href: "mailto:info@certipm.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+258 85 802 9205",
    href: "tel:+258858029205",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maputo, Mozambique",
    href: "https://maps.google.com/?q=Maputo,Mozambique",
  },
];

const Footer: React.FC<FooterProps> = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-white p-4 shadow-2xl dark:bg-gray-900 sm:p-5">
            <button
              onClick={() => setModalImage(null)}
              className="absolute right-3 top-3 rounded-full bg-gray-100 p-2 text-gray-600 transition hover:bg-red-50 hover:text-red-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-red-950/30 dark:hover:text-red-400"
              aria-label="Close badge preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="rounded-2xl bg-[#f8f7f5] p-3 dark:bg-gray-800">
              <img
                src={modalImage}
                alt="Certification Badge"
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="mt-20 border-t border-gray-200 bg-[#f8f7f5] text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

            {/* Brand */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8b0d0d]/10 text-[#8b0d0d]">
                    <BadgeCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#7a0b0b] dark:text-white">
                      CertiPM
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Project Management Training & Certification
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-700 dark:text-gray-400">
                  First digital platform that drives professionals to accomplishing
                  their world-recognized certifications, from Mozambique, led by
                  Patricio Inacio — a reference in project management in Mozambique.
                </p>

                <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/70 p-5 dark:border-red-950/40 dark:bg-red-950/10">
                  <div className="flex items-center gap-2 text-[#7a0b0d] dark:text-red-300">
                    <ShieldCheck className="h-5 w-5" />

                    <p className="text-sm font-semibold">
                      Authorized Training Partner
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-400">
                    Project Direct Lda. is an{" "}
                    <strong>Authorized Training Partner</strong> of PMI
                    (Project Management Institute).
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* PMI Authorized Training Partner Badge */}
                    <button
                      type="button"
                      onClick={() => setModalImage("/atp.jpeg")}
                      className="group flex h-24 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white transition hover:-translate-y-0.5 hover:border-[#8b0d0d] hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                      <img
                        src="/atp.jpeg"
                        alt="PMI Authorized Training Partner"
                        className="max-h-16 object-contain transition group-hover:scale-[1.02]"
                      />
                    </button>

                    {/* Authorized Training Instructor Badge - Clickable Credly Link */}
                    <a
                      href="https://www.credly.com/badges/d061652a-dea3-4ea1-aae2-fb1e16207c46/linked_in_profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Verify Authorized Training Instructor badge on Credly"
                      className="group flex h-24 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white transition hover:-translate-y-0.5 hover:border-[#8b0d0d] hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                    >
                      <img
                        src="/inst.jpeg"
                        alt="Authorized Training Instructor - Verify on Credly"
                        className="max-h-16 object-contain transition group-hover:scale-[1.02]"
                      />
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-gray-600 dark:text-gray-400">
                    Authorized Training Instructor:{" "}
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Patricio Inacio
                    </span>
                  </p>

                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                    Click the instructor badge to verify the credential on Credly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <div className="h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-7">
                <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-white">
                  Contact
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Reach out to us directly through the channels below.
                </p>

                <ul className="mt-6 space-y-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={item.label}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 rounded-xl bg-[#8b0d0d]/10 p-2 text-[#8b0d0d]">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.label}
                          </p>

                          <a
                            href={item.href}
                            target={
                              item.label === "Location" ? "_blank" : undefined
                            }
                            rel={
                              item.label === "Location"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm text-gray-600 transition hover:text-[#8b0d0d] dark:text-gray-400 dark:hover:text-red-300"
                          >
                            {item.value}
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="lg:col-span-4">
              <div className="h-full rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-7">
                <h3 className="text-lg font-bold text-[#7a0b0b] dark:text-white">
                  Social Media
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Follow Project Direct and stay connected with our latest updates.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-[#f8f7f5] text-gray-700 transition hover:-translate-y-0.5 hover:border-[#8b0d0d] hover:text-[#8b0d0d] hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-red-400 dark:hover:text-red-300"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-[#f8f7f5] p-5 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex min-h-[110px] items-center justify-center">
                    <img
                      src="/logowhite.png"
                      alt="Project Direct Logo"
                      className="max-h-24 object-contain"
                    />
                  </div>
                </div>

                <a
                  href="https://www.synctechx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8b0d0d] transition hover:underline dark:text-red-300"
                >
                  Developed by SyncTechX
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
            <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Project Direct Lda. All rights reserved.
              </p>

              <p className="text-xs text-gray-600 dark:text-gray-400">
                CertiPM • Professional project management learning from Mozambique
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
