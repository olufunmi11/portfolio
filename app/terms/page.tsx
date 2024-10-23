import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#c4bbb0] p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <div className="bg-[#beb5a9] p-6 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to my Terms of Service. By accessing my website, you agree to
          comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By using my services, you confirm that you have read, understood, and
          agreed to these terms. If you do not agree, you must not use my
          services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
        <p className="text-gray-700 mb-4">
          I reserve the right to modify these terms at any time. Any changes
          will be effective immediately upon posting on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            You are responsible for maintaining the confidentiality of your
            account information.
          </li>
          <li>
            You must not use the service for any illegal or unauthorized
            purpose.
          </li>
          <li>You agree to comply with all applicable laws and regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          My liability is limited to the maximum extent permitted by law. I am
          not liable for any indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms are governed by the laws of the jurisdiction in which I
          operate, without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms of Service, please contact
          me at support@example.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
