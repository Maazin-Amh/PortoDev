"use client";

import Experience from "@/components/experien";
import Header from "@/components/header";
import Project from "@/components/projects";
import Skill from "@/components/skills";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  const [skillTab, setSkillTab] = useState("Languages-&-Frameworks");

  useEffect(() => {
    const projects = document.getElementById("trigger-projects");
    const skills = document.getElementById("trigger-skills");
    const experience = document.getElementById("trigger-experience");

    const observerProjects = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(0);
      },
      { threshold: 0.5 },
    );

    const observerSkills = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(1);
      },
      { threshold: 0.5 },
    );

    const observerExperience = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(2);
      },
      { threshold: 0.5 },
    );

    if (projects) observerProjects.observe(projects);
    if (skills) observerSkills.observe(skills);
    if (experience) observerExperience.observe(experience);

    return () => {
      observerProjects.disconnect();
      observerSkills.disconnect();
      observerExperience.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      <main className="text-white">
        <section className="flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xl font-bold uppercase sm:mb-6 sm:text-2xl md:text-3xl">
              Ariiq Maazin H
            </p>

            <h1 className="text-4xl font-bold sm:text-6xl md:text-8xl">
              Full-Stack
              <br />
              <span className="text-maroon">Developer</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-gray-400 sm:mt-8 sm:text-sm md:text-base">
              I am a Full Stack Developer passionate about building modern,
              responsive, and scalable web applications. I actively participate
              in developer communities, including DevFest, to expand my
              knowledge, connect with fellow developers, and stay updated with
              the latest technologies. I continuously explore new tools and
              technologies while developing projects to enhance my skills and
              experience.
            </p>

            <div className="mt-8 sm:mt-10">
              <a
                href="/Cv_Ariiqmaazin.pdf"
                download="CV-Ariiq-Maazin-H.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-putihsusu px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-maroon hover:text-white sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-solid fa-download" />
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="sticky top-0 flex h-screen px-4 pb-24 pt-4 sm:px-6 md:px-20 md:pb-6 md:pt-0">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 md:grid md:grid-cols-[180px_1fr] md:items-center md:gap-16">
              <div className="flex w-full shrink-0 items-center justify-center pt-2 md:w-auto md:pt-0">
                <h1 className="whitespace-nowrap text-3xl font-black tracking-tighter text-putihsusu sm:text-4xl md:-rotate-90 md:text-8xl">
                  {active === 0 && "PROJECTS"}
                  {active === 1 && "SKILLS"}
                  {active === 2 && "EXPERIENCE"}
                </h1>
              </div>

              <div className="relative w-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto scrollbar-none md:flex-none md:overflow-hidden">
                <AnimatePresence mode="wait">
                  {active === 0 && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <Project
                          title="Information Technology 25"
                          description="Information center website for information technology students, class of 25"
                          link="https://information-technology-25-official.com/"
                          bahasa={["NextJS", "Firebase", "Typescript"]}
                        />

                        <Project
                          title="Lopercourse"
                          description="Course online website buy, learning and meeting is under development"
                          link="https://github.com/Maazin-Amh/Lopercourse"
                          bahasa={["React", "JavaScript"]}
                        />

                        <Project
                          title="Shop App"
                          description="Online shopping app that works like ikea app"
                          link="https://github.com/Maazin-Amh/shop-app"
                          bahasa={["Flutter", "Dart", "Firebase"]}
                        />

                        <Project
                          title="Classroom"
                          description="Classroom website that is equipped with backend"
                          link="https://github.com/Maazin-Amh/FE_CLASSROOM_APP"
                          bahasa={[
                            "NextJS",
                            "Aiven",
                            "Typescript",
                            "NextJS",
                            "SQL",
                          ]}
                        />
                        <Project
                          title="Color Detector"
                          description="A feature that detects a color via the camera which directly connects to the figma app"
                          link="https://github.com/Maazin-Amh/deteksi-warna"
                          bahasa={["Python", "Plugin Figma"]}
                        />
                      </div>

                      <a
                        href="https://github.com/Maazin-Amh"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-maroon transition hover:text-white"
                      >
                        See Full My Repo
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                    </motion.div>
                  )}

                  {active === 1 && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-6 flex gap-3 overflow-x-auto pb-1 scrollbar-none sm:mb-8 sm:gap-6">
                        <button
                          onClick={() => setSkillTab("Languages-&-Frameworks")}
                          className={`shrink-0 pb-2 text-xs cursor-pointer font-semibold transition sm:pb-3 sm:text-sm ${
                            skillTab === "Languages-&-Frameworks"
                              ? "border-b-2 border-maroon text-maroon"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          Languages & Frameworks
                        </button>
                        <button
                          onClick={() => setSkillTab("Database")}
                          className={`shrink-0 pb-2 text-xs cursor-pointer font-semibold transition sm:pb-3 sm:text-sm ${
                            skillTab === "Database"
                              ? "border-b-2 border-maroon text-maroon"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          Database & Tools
                        </button>
                        <button
                          onClick={() => setSkillTab("Development_Concepts")}
                          className={`shrink-0 pb-2 text-xs cursor-pointer font-semibold transition sm:pb-3 sm:text-sm ${
                            skillTab === "Development_Concepts"
                              ? "border-b-2 border-maroon text-maroon"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          Dev Concepts
                        </button>
                        <button
                          onClick={() => setSkillTab("tools")}
                          className={`shrink-0 pb-2 text-xs cursor-pointer font-semibold transition sm:pb-3 sm:text-sm ${
                            skillTab === "tools"
                              ? "border-b-2 border-maroon text-maroon"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          Tools
                        </button>
                      </div>

                      {skillTab === "Languages-&-Frameworks" && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <Skill name="Go" icon="/assets/Go.png" />
                          <Skill
                            name="JavaScript"
                            icon="/assets/JavaScript.png"
                          />
                          <Skill name="C++" icon="/assets/C++.png" />
                          <Skill name="Flutter" icon="/assets/Flutter.png" />
                          <Skill name="TS" icon="/assets/Typescript.png" />
                          <Skill name="React" icon="/assets/React.png" />
                          <Skill name="NextJS" icon="/assets/Nextjs.png" />
                          <Skill name="NestJS" icon="/assets/Nestjs.png" />
                        </div>
                      )}
                      {skillTab === "Database" && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <Skill name="MySQL" icon="/assets/MySQL.png" />
                          <Skill
                            name="Firebase Firestore"
                            icon="/assets/Firebase.png"
                          />
                          <Skill name="Aiven" icon="/assets/aiven.png" />
                        </div>
                      )}

                      {skillTab === "Development_Concepts" && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <Skill name="REST API" />
                          <Skill name="CRUD Operations" />
                          <Skill name="Object-Oriented Programming (OOP)" />
                          <Skill name="Authentication & Authorization" />
                          <Skill name="Frontend Development" />
                          <Skill name="Backend Development" />
                        </div>
                      )}

                      {skillTab === "tools" && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <Skill
                            name="Antigravity IDE"
                            icon="/assets/ide.png"
                          />
                          <Skill
                            name="GitHub & Git"
                            icon="/assets/Github.png"
                          />
                          <Skill name="Postman" icon="/assets/Postman.png" />
                          <Skill name="Xcode" icon="/assets/Xcode.png" />
                        </div>
                      )}
                    </motion.div>
                  )}

                  {active === 2 && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-2">
                        <Experience
                          jabatan="IT Support & Full-Stack Developer"
                          range="January 2025 - April 2025"
                          nama_perusahaan="PT FSCM Manufacturing Indonesia"
                          lokasi="Bogor, West Java, Indonesia"
                          desk="Worked as an IT Support and Full-Stack Developer at an Astra-affiliated company for a three-month industrial internship. Developed a company suggestion system website to make submitting suggestions and accessing company facilities and infrastructure easier."
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-[-100vh]">
            <div id="trigger-projects" className="h-screen" />
            <div id="trigger-skills" className="h-screen" />
            <div id="trigger-experience" className="h-screen" />
          </div>
        </section>
      </main>
    </>
  );
}
