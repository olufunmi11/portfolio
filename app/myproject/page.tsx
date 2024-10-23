import React from "react";

const LearnMore: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#7e888f] p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <p className="text-lg mb-4 max-w-2xl text-center">
        Welcome to my project page! Here, In here provide insights into my past
        Business Analyst projects to the present projects as DevOps Engineer, My
        goal is to help you understand what I do and how I can support your
        needs.
      </p>
      <div className="bg-[#a1abae] p-6 rounded shadow-md max-w-3xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-4">Business Analyst</h2>
        <p className="text-gray-700 mb-4">
          Coordinated project initiatives, focusing on improving website
          functionalities, standardizing forms, and coordinating with regional
          teams. Defined and documented business requirements, guiding projects
          from inception to implementation. Worked across teams, including UX
          designers, MarTech, and Department of Technical Support, to ensure
          deliverables aligned with company goals. Managed multiple projects
          simultaneously, delivering improvements in efficiency and process
          consistency
        </p>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <b>System Utilization:</b> Deveolped a web application service
            model, utilizing information from legacy systems, reducing
            bottlenecks, and elevating project workshops.
          </li>
          <li>
            <b>Global Form Standardization:</b> created standarized forms across
            LAO, APAC, EMEA and NA, allowing for streamlined approach across
            markets while balancing global requirements and complex nuances
            (Russia Market) to ensure compliance.
          </li>
          <li>
            <b>Website Enhancement:</b> Streamlined access to essential
            healthcare services after improving website functionality- including
            navigation, billing, and portal functionalities - delivering a more
            user-friendly experience.
          </li>
          <li>
            <b>Product Portfolio Expansion:</b> Launched the Auto-detection
            product, by implementing the IP default and redirecting strategies
            to ensure seamless integration with existing systems.
          </li>
        </ul>
      </div>
      <div className="bg-[#768489] p-6 rounded shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Software Engineer</h2>
        <p className="text-gray-700 mb-4">
          We offer a variety of services tailored to meet your needs, including:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Consulting Services</li>
          <li>Project Management</li>
          <li>Training and Development</li>
          <li>Technical Support</li>
        </ul>
      </div>
    </div>
  );
};

export default LearnMore;
