/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Button, Menu, TabBar } from "glisse";
import { useLang } from "@/lib/i18n";

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/mazienn._/" },
  { label: "GitHub", url: "https://github.com/Maazin-Amh" },
  { label: "X", url: "https://x.com/Kingostyl" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ariiq-maazin/" },
  { label: "BlueSky", url: "https://bsky.app/profile/mazien.bsky.social" },
];

const sections = [
  { value: "Project", id: "trigger-projects" },
  { value: "Skill", id: "trigger-skills" },
  { value: "Experience", id: "trigger-experience" },
];

export default function Header() {
  const [tab, setTab] = useState("Project");
  const { lang, toggleLang, t } = useLang();

  const menuItems = [
    ...socialLinks.map((item) => ({
      label: item.label,
      onSelect: () => window.open(item.url, "_blank", "noopener,noreferrer"),
    })),
    "separator" as const,
    {
      label: lang === "en" ? "Bahasa Indonesia" : "English",
      onSelect: toggleLang,
    },
  ];

  const handleTabChange = (value: string) => {
    setTab(value);

    const section = sections.find((item) => item.value === value);

    if (section) {
      document.getElementById(section.id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTab(section.value);
          }
        },
        {
          threshold: 0,
          rootMargin: "-40% 0px -40% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="fixed bottom-0 left-0 z-50 w-full px-3 pb-3 sm:px-6 sm:pb-4 md:px-10 lg:px-12">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-center gap-2 sm:h-16 sm:gap-4 md:justify-between">
        <Button
          style={{
            width: "clamp(40px, 5vw, 64px)",
            height: "clamp(40px, 5vw, 64px)",
            minWidth: "clamp(40px, 5vw, 64px)",
            padding: "4px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="h-full w-full rounded-full object-cover"
          />
        </Button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-4 md:gap-6">
          <div className="min-w-0">
            <TabBar
              aria-label="Portfolio Navigation"
              items={[
                { value: "Project", label: t("navProject") },
                { value: "Skill", label: t("navSkill") },
                { value: "Experience", label: t("navExperience") },
              ]}
              value={tab}
              onValueChange={handleTabChange}
            />
          </div>

          <div className="shrink-0">
            <Menu className="menu-up" aria-label="Menu" items={menuItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}
