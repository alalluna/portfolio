"use client"
import React, { useTransition, useState } from "react"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc pl-4">
          <li>Node.js</li>
          <li>Express</li>
          <li>Mongo DB</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Firebase</li>
          <li>Multer</li>
          <li>Tailwind</li>
          <li>Curl</li>
          <li>Surge</li>
          <li>Render</li>
          <li>Netlify</li>
          
        </ul>
        <ul className="list-disc pl-4">
          <li>PHP</li>
          <li>Java</li>
          <li>Springboot</li>
          <li>Maven</li>
          <li>Tomcat</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Mockito</li>
          <li>Postman</li>
          <li>Swagger</li> 
          <li>Vercel</li>

        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2025 Tailwind/bootstrap Certification - Hack a Boss Academy ( in progress)</li>
        <li>2025 Typescript Certification - Hack a Boss Academy ( in progress)</li>
        <li>2025 Bootcamp Java and Srpingboot - Hack a Boss Academy</li>
        <li>2024 UX Design: UX/UI user experience + Figma 2024 - Udemy (in porgress)</li>
        <li>2024 Fullstack Bootcamp - MERN - Eurofirms</li>
        <li>2023 Development Certification Javascript algorithms and data structures - FreeCodeCamp</li>
        <li>2022-2023 Higher course of web development technician - CEAC</li>
        <li>2020-2022 Higher course of web graphic design - Deusto</li>
        <li>2010 Master of Education in fine arts - Universitat de València</li>
        <li>2002-2009 Fine arts - Universitat Politécnica de València</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>2024 Full Stack Developer - Personal project of Art's academy (until now)</li>
        <li>2024 Developer business internships - Informatica Valencia</li>
        <li>2023 Designer business intership - Spanish Ole, Sevilla</li>
        <li>2008 II Animation prize -La Marvarrosa animation contest</li>
        <li>2003-22 Freelance designer - Valencia-Pontevedra-Sevilla</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-12 xl:px-8">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-sm">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am excited to work with others in a team.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education & Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Experience & Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
