"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongo DB</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Css</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>Surge</li>
        <li>Render</li>
        <li>Netlifly</li>
        <li>Vercel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2024 UX Design: UX/UI user experience + Figma 2024 - Udemy </li>
        <li>2024 Fullstack Bootcamp - MERN - Eurofirms</li>
        <li>2023 Developer Certification Javascript algorithms and data structures - FreeCodeCamp</li>
        <li>2022-2023 Higher course of web development technician </li>
        <li>2020-2022 Higher course of web graphic design </li>
        <li>Master of Educationin fine arts 2010</li>
        <li>Fine arts 2002-2009</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>2024 Fullstack Bootcamp - MERN- Eurofirms</li>
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
    <section className="text-cyan-950" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">

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
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Experience{" "}
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
