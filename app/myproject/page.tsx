import Image from "next/image";
import React from "react";
import beach from "./app/images/bestasya.jpg";
import desktop from "./app/images/markusspiske.jpg";
import alexant from "./app/images/alexant.jpg";
import agneselunecka from "./app/images/agneselunecka.jpg";

const LearnMore: React.FC = () => {
  return (
    <div className="py-24 bg-[#7e888f]">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
        <p className="text-center font-normal text-2xl mt-10">
          Welcome to my project page! Here, In here provide insights into my
          past Business Analyst projects to the present projects as DevOps
          Engineer, My goal is to help you understand what I do and how I can
          support your needs.
        </p>
        <div className="grid grid-cols-4 gap-5 mt-10">
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/bestasya.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Business Analyst
              </h2>
              <p className="text-gray-700 mb-4 px-6">
                Coordinated project initiatives, focusing on improving website
                functionalities, standardizing forms, and coordinating with
                regional teams. Defined and documented business requirements,
                guiding projects from inception to implementation. Worked across
                teams, including UX designers, MarTech, and Department of
                Technical Support, to ensure deliverables aligned with company
                goals. Managed multiple projects simultaneously, delivering
                improvements in efficiency and process consistency
              </p>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/markusspiske.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Projects
              </h2>
              <ul className="list-inside text-gray-700 mb-4 px-6 list-none">
                <li>
                  <b>System Utilization:</b> Deveolped a web application service
                  model, utilizing information from legacy systems, reducing
                  bottlenecks, and elevating project workshops.
                </li>
                <li>
                  <b>Global Form Standardization:</b> created standarized forms
                  across LAO, APAC, EMEA and NA, allowing for streamlined
                  approach across markets while balancing global requirements
                  and complex nuances (Russia Market) to ensure compliance.
                </li>
                <li>
                  <b>Website Enhancement:</b> Streamlined access to essential
                  healthcare services after improving website functionality-
                  including navigation, billing, and portal functionalities -
                  delivering a more user-friendly experience.
                </li>
                <li>
                  <b>Product Portfolio Expansion:</b> Launched the
                  Auto-detection product, by implementing the IP default and
                  redirecting strategies to ensure seamless integration with
                  existing systems.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/alexant.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Software Engineer
              </h2>
              <ul className="list-inside text-gray-700 mb-4 px-6 list-none">
                <li>Consulting Services</li>
                <li>Project Management</li>
                <li>Training and Development</li>
                <li>Technical Support</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/agneselunecka.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Projects
              </h2>
              <ul className="list-inside text-gray-700 mb-4 px-6 list-none">
                <li>Consulting Services</li>
                <li>Project Management</li>
                <li>Training and Development</li>
                <li>Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
