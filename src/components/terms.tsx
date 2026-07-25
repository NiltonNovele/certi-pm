import React from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  Scale,
  CreditCard,
  UserCheck,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const sections = [
  { id: "definitions", label: "Definitions", icon: FileText },
  { id: "purpose", label: "Platform Purpose", icon: ShieldCheck },
  { id: "eligibility", label: "Eligibility", icon: UserCheck },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "law", label: "Governing Law", icon: Scale },
];

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              Legal
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              CertiPM – Terms and Conditions & Privacy Notice
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
              These terms explain how CertiPM may be used, how purchases and access
              work, and how Project Direct Lda processes personal data when you use
              the platform.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="rounded-full bg-gray-100 px-4 py-2 font-medium">
                Project Direct Lda
              </div>
              <div className="rounded-full bg-gray-100 px-4 py-2 font-medium">
                Last Updated: 1 December 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
                  On this page
                </h2>

                <div className="mt-5 space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-blue-700"
                      >
                        <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{section.label}</span>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Contact
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    For questions about these terms, contact:
                  </p>
                  <a
                    href="mailto:info@certipm.com"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
                  >
                    info@certipm.com
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm leading-7 text-gray-700 sm:text-base">
                  These Terms and Conditions ("Terms") govern your access to and use
                  of the CertiPM platform ("Platform"), owned and operated by
                  Project Direct Lda. By creating an account, accessing the
                  Platform, or purchasing and using any practice exams or services,
                  you agree to be bound by these Terms. If you do not agree, you
                  must not use the Platform.
                </p>
              </div>

              <div
                id="definitions"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">1. Definitions</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>
                    <strong>Company:</strong> Project Direct Lda, the owner and
                    operator of CertiPM.
                  </li>
                  <li>
                    <strong>Platform / CertiPM:</strong> The online service
                    offering practice questions and exam preparation content.
                  </li>
                  <li>
                    <strong>User / You:</strong> Any individual who accesses or
                    uses the Platform.
                  </li>
                  <li>
                    <strong>Content:</strong> All practice questions,
                    explanations, study materials, text, images, software, and
                    other materials available on the Platform.
                  </li>
                </ul>
              </div>

              <div
                id="purpose"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">
                  2. Purpose of the Platform
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  CertiPM provides practice questions and study materials designed
                  to support Users in preparing for third-party certification exams
                  such as PMP, CAPM, and Scrum Master. CertiPM does not guarantee
                  exam results and is not affiliated with, endorsed by, or approved
                  by PMI®, Scrum.org®, Scrum Alliance®, or any other certification
                  body.
                </p>
              </div>

              <div
                id="eligibility"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">3. Eligibility</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>
                    You must be at least 18 years old or have legal capacity to
                    enter into a contract.
                  </li>
                  <li>You must provide accurate and complete registration information.</li>
                  <li>
                    You must use the Platform in compliance with these Terms and
                    all applicable laws.
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  4. Account Registration and Security
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your login credentials.
                  </li>
                  <li>
                    You must notify the Company immediately of any unauthorized
                    access or suspected security breach.
                  </li>
                  <li>
                    The Company is not liable for losses arising from unauthorized
                    use of your account.
                  </li>
                  <li>
                    The Company may suspend or terminate accounts suspected of
                    misuse, fraud, or violation of these Terms.
                  </li>
                </ul>
              </div>

              <div
                id="payments"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">
                  5. Paid Services, Pricing, and Payments
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>Access to certain Content and practice exams requires payment.</li>
                  <li>Prices are displayed on the Platform and may change without prior notice.</li>
                  <li>
                    Payments are processed through secure third-party payment
                    providers.
                  </li>
                  <li>
                    All purchases are non-refundable, except where legally required.
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">6. License to Use</h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  Upon successful payment, the Company grants you a limited,
                  non-exclusive, non-transferable, revocable license to access and
                  use the purchased Content for personal, non-commercial exam
                  preparation only.
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>You may not copy, reproduce, distribute, or publicly display Content.</li>
                  <li>You may not share your account or grant access to any other person.</li>
                  <li>
                    You may not reverse engineer, scrape, or attempt to extract
                    data from the Platform.
                  </li>
                  <li>Any unauthorized use may result in termination and legal action.</li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  7. Intellectual Property
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  All Content on CertiPM is the exclusive property of Project
                  Direct Lda or its licensors. You acquire no ownership rights
                  through use or purchase. Certification trademarks (e.g., PMP®,
                  CAPM®, Scrum Master®) belong to their respective owners. CertiPM
                  claims no affiliation or endorsement.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  8. Service Availability and Modifications
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  The Platform may be temporarily unavailable due to maintenance,
                  updates, or circumstances beyond our control. The Company may
                  modify or discontinue any feature or Content at any time without
                  liability.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">9. User Conduct</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                  <li>Users must not misuse the Platform or attempt unauthorized access.</li>
                  <li>Users must not upload malware or engage in disruptive activity.</li>
                  <li>
                    The Platform may not be used for commercial, competitive, or
                    data-mining purposes.
                  </li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">10. Disclaimers</h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  The Platform and Content are provided on an “as-is” and
                  “as-available” basis. The Company does not guarantee accuracy,
                  uninterrupted access, or successful exam results.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  11. Limitation of Liability
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  To the maximum extent permitted by law, the Company shall not be
                  liable for indirect, incidental, or consequential damages. Total
                  liability is limited to the amount paid by you in the previous 12
                  months.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  12. Indemnification
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  You agree to indemnify and hold harmless Project Direct Lda from
                  any claims arising from your use of the Platform or violation of
                  these Terms.
                </p>
              </div>

              <div
                id="privacy"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">
                  13. Privacy and Data Protection
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  Your data is processed in accordance with the CertiPM Privacy
                  Policy and applicable laws. By using the Platform, you consent to
                  such processing.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">14. Termination</h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  The Company may suspend or terminate your account at any time for
                  violation of these Terms or unlawful activity. No refunds will be
                  issued unless legally required.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  15. Third-Party Links
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  The Platform may include links to third-party websites. The
                  Company is not responsible for their content or practices.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  16. Changes to Terms
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  These Terms may be updated at any time. Continued use of the
                  Platform after changes constitutes acceptance of the revised
                  Terms.
                </p>
              </div>

              <div
                id="law"
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-gray-950">
                  17. Governing Law and Jurisdiction
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  These Terms are governed by the laws of the Republic of
                  Mozambique. Any disputes shall be resolved exclusively in
                  Mozambican courts.
                </p>
              </div>

              <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  18. Contact Information
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base">
                  For questions or concerns, contact
                  <a
                    href="mailto:info@certipm.com"
                    className="ml-1 font-medium text-blue-700 hover:underline"
                  >
                    info@certipm.com
                  </a>
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:text-blue-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;