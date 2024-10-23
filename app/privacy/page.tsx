import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#acafa5] p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <div className="bg-[#98998c] p-6 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4">
          This Privacy Policy explains how I collect, use, disclose, and
          safeguard your information when you visit my website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information I Collect</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Personal Information: Name, email address, etc.</li>
          <li>Usage Data: Information about how you use our website.</li>
          <li>Cookies: We use cookies to enhance user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We may use the information we collect in the following ways:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>To improve our website and services.</li>
          <li>To communicate with you regarding updates and promotions.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Disclosure of Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          I do not sell or rent your personal information to third parties.I may
          disclose your information in the following situations:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>To comply with legal obligations.</li>
          <li>To protect and defend our rights.</li>
          <li>To prevent fraudulent activity.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          Depending on your location, you may have certain rights regarding your
          personal information, including the right to access, correct, or
          delete your information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          I may update this Privacy Policy from time to time. I will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact me
          at support@example.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
