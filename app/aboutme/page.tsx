import Image from "next/image";
import React from "react";
import thirdman from "./app/images/thirdman.jpg";
import rocks from "./app/images/rocks.jpg";
import mirror from "./app/images/mirror.jpg";

const LearnMore: React.FC = () => {
  return (
    <div className="py-24 bg-[#c9c1c1]">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-center font-normal text-2xl mt-10">
          Detailed-oriented and innovative Software Engineer with 2 years of
          experience in developing scalable web applications and software
          solutions. Proficient in CI/CD pipelines, AWS, Jenkins, Dockers and
          Kubernetes, with a strong focus on React and Next.js applications.
          Excellent problem solving skills and a passion for optimizing user
          experience and performance.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className=" bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/thirdman.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Education
              </h2>
              <ul className="list-inside text-gray-700 mb-4 px-6 list-none">
                <li>LL.B Civil Law (WES Evaluated)</li>
                <p> Olabisi Onabanjo University, Ago Iwoye</p>
                <li>LL.M, International Commercial Law (WES Evaluated)</li>
                <p>University of Aberdeen</p>
              </ul>
            </div>
          </div>
          <div className=" bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/rocks.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Certifications
              </h2>
              <ul className="list-inside text-gray-700 mb-4 px-6 list-none">
                <li>SSM: Certified Scaled Scrum Master.</li>
                <li>CSPO: Certified Scrum Product Owner.</li>
                <li>AWS: We believe in the power of teamwork.</li>
                <li>CSM: Certified Scrum Master SAFe Agile 5.1.</li>
              </ul>
            </div>
          </div>
          <div className=" bg-[#f4f5f8] shadow-md">
            <div className="relative">
              <Image
                src="/images/mirror.jpg"
                alt="background"
                width={320}
                height={200}
              />
              <h2 className="text-2xl font-semibold mb-4 pl-4 pt-2">
                Technical Skills
              </h2>
              <ul className="list-inside text-gray-700 px-6 list-none">
                <li>Methodologies: Agile, Scrum, Test-Driven Development</li>
                <li>Databases: MySQL, PostgresSQL,Neon Tech </li>
                <li>Tools: Github, Dockers, Aws, Jenkins</li>
                <li>Programming Languages: Java, Python, JavaScripts</li>
                <li>Web Technologies: CSS, HTML,Next-js, Nodes-js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
