import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">CertiPM – Terms and Conditions & Privacy Notice</h1>
        <p className="text-gray-500 text-sm text-center">
          Project Direct Lda<br />
          Last Updated: December 1, 2025
        </p>

        <p className="text-gray-700">
          These Terms and Conditions ("Terms") govern your access to and use of the CertiPM platform ("Platform"), owned and operated by Project Direct Lda. By creating an account, accessing the Platform, or purchasing and using any practice exams or services, you agree to be bound by these Terms. If you do not agree, you must not use the Platform.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Definitions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Company:</strong> Project Direct Lda, the owner and operator of CertiPM.</li>
          <li><strong>Platform / CertiPM:</strong> The online service offering practice questions and exam preparation content.</li>
          <li><strong>User / You:</strong> Any individual who accesses or uses the Platform.</li>
          <li><strong>Content:</strong> All practice questions, explanations, study materials, text, images, software, and other materials available on the Platform.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Purpose of the Platform</h2>
        <p className="text-gray-700">
          CertiPM provides practice questions and study materials designed to support Users in preparing for third-party certification exams such as PMP, CAPM, and Scrum Master.
          CertiPM does not guarantee exam results and is not affiliated with, endorsed by, or approved by PMI®, Scrum.org®, Scrum Alliance®, or any other certification body.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Eligibility</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>You must be at least 18 years old or have legal capacity to enter into a contract.</li>
          <li>You must provide accurate and complete registration information.</li>
          <li>You must use the Platform in compliance with these Terms and all applicable laws.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Account Registration and Security</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You must notify the Company immediately of any unauthorized access or suspected security breach.</li>
          <li>The Company is not liable for losses arising from unauthorized use of your account.</li>
          <li>The Company may suspend or terminate accounts suspected of misuse, fraud, or violation of these Terms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Paid Services, Pricing, and Payments</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Access to certain Content and practice exams requires payment.</li>
          <li>Prices are displayed on the Platform and may change without prior notice.</li>
          <li>Payments are processed through secure third-party payment providers.</li>
          <li>All purchases are non-refundable, except where legally required.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">6. License to Use</h2>
        <p className="text-gray-700">
          Upon successful payment, the Company grants you a limited, non-exclusive, non-transferable, revocable license to access and use the purchased Content for personal, non-commercial exam preparation only.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>You may not copy, reproduce, distribute, or publicly display Content.</li>
          <li>You may not share your account or grant access to any other person.</li>
          <li>You may not reverse engineer, scrape, or attempt to extract data from the Platform.</li>
          <li>Any unauthorized use may result in termination and legal action.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Intellectual Property</h2>
        <p className="text-gray-700">
          All Content on CertiPM is the exclusive property of Project Direct Lda or its licensors. You acquire no ownership rights through use or purchase.
          Certification trademarks (e.g., PMP®, CAPM®, Scrum Master®) belong to their respective owners. CertiPM claims no affiliation or endorsement.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">8. Service Availability and Modifications</h2>
        <p className="text-gray-700">
          The Platform may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. The Company may modify or discontinue any feature or Content at any time without liability.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">9. User Conduct</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Users must not misuse the Platform or attempt unauthorized access.</li>
          <li>Users must not upload malware or engage in disruptive activity.</li>
          <li>The Platform may not be used for commercial, competitive, or data-mining purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">10. Disclaimers</h2>
        <p className="text-gray-700">
          The Platform and Content are provided on an “as-is” and “as-available” basis. The Company does not guarantee accuracy, uninterrupted access, or successful exam results.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">11. Limitation of Liability</h2>
        <p className="text-gray-700">
          To the maximum extent permitted by law, the Company shall not be liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid by you in the previous 12 months.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">12. Indemnification</h2>
        <p className="text-gray-700">
          You agree to indemnify and hold harmless Project Direct Lda from any claims arising from your use of the Platform or violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">13. Privacy and Data Protection</h2>
        <p className="text-gray-700">
          Your data is processed in accordance with the CertiPM Privacy Policy and applicable laws. By using the Platform, you consent to such processing.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">14. Termination</h2>
        <p className="text-gray-700">
          The Company may suspend or terminate your account at any time for violation of these Terms or unlawful activity. No refunds will be issued unless legally required.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">15. Third-Party Links</h2>
        <p className="text-gray-700">
          The Platform may include links to third-party websites. The Company is not responsible for their content or practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">16. Changes to Terms</h2>
        <p className="text-gray-700">
          These Terms may be updated at any time. Continued use of the Platform after changes constitutes acceptance of the revised Terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">17. Governing Law and Jurisdiction</h2>
        <p className="text-gray-700">
          These Terms are governed by the laws of the Republic of Mozambique. Any disputes shall be resolved exclusively in Mozambican courts.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6">18. Contact Information</h2>
        <p className="text-gray-700">
          For questions or concerns, contact
          <a href="mailto:info@certipm.com" className="text-purple-600 font-medium ml-1">info@certipm.com</a>
        </p>

        <div className="text-center mt-6">
          <a href="/" className="text-purple-600 hover:underline font-medium">Back to home</a>
        </div>
      </div>
    </div>
  );
};

export default Terms;