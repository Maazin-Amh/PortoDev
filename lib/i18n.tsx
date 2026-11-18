"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "id";

const translations = {
  heroDescription: {
    en: "I am a Full Stack Developer passionate about building modern, responsive, and scalable web applications. I actively participate in developer communities, including DevFest, to expand my knowledge, connect with fellow developers, and stay updated with the latest technologies. I continuously explore new tools and technologies while developing projects to enhance my skills and experience.",
    id: "Saya seorang Full Stack Developer yang bersemangat membangun aplikasi web modern, responsif, dan skalabel. Saya aktif berpartisipasi di komunitas developer, termasuk DevFest, untuk memperluas pengetahuan, terhubung dengan sesama developer, dan tetap mengikuti perkembangan teknologi terbaru. Saya terus mengeksplorasi tools dan teknologi baru sambil mengembangkan proyek untuk meningkatkan kemampuan dan pengalaman saya.",
  },
  downloadCv: {
    en: "Download CV",
    id: "Unduh CV",
  },

  projects: {
    en: "PROJECTS",
    id: "PROYEK",
  },
  skills: {
    en: "SKILLS",
    id: "KEAHLIAN",
  },
  experience: {
    en: "EXPERIENCE",
    id: "PENGALAMAN",
  },

  navProject: {
    en: "Project",
    id: "Proyek",
  },
  navSkill: {
    en: "Skill",
    id: "Keahlian",
  },
  navExperience: {
    en: "Experience",
    id: "Pengalaman",
  },

  langFrameworks: {
    en: "Languages & Frameworks",
    id: "Bahasa & Framework",
  },
  dbTools: {
    en: "Database & Tools",
    id: "Database & Tools",
  },
  devConcepts: {
    en: "Dev Concepts",
    id: "Konsep Dev",
  },
  tools: {
    en: "Tools",
    id: "Tools",
  },

  projectIT25Desc: {
    en: "Information center website for information technology students, class of 25",
    id: "Website pusat informasi untuk mahasiswa teknologi informasi, angkatan 25",
  },
  projectLopercourseDesc: {
    en: "Course online website buy, learning and meeting is under development",
    id: "Website kursus online untuk pembelian, pembelajaran, dan pertemuan yang sedang dalam pengembangan",
  },
  projectShopAppDesc: {
    en: "Online shopping app that works like ikea app",
    id: "Aplikasi belanja online yang bekerja seperti aplikasi IKEA",
  },
  projectClassroomDesc: {
    en: "Classroom website that is equipped with backend",
    id: "Website kelas yang dilengkapi dengan backend",
  },
  projectColorDetectorDesc: {
    en: "A feature that detects a color via the camera which directly connects to the figma app",
    id: "Fitur yang mendeteksi warna melalui kamera yang terhubung langsung ke aplikasi Figma",
  },
  seeFullRepo: {
    en: "See Full My Repo",
    id: "Lihat Repo Lengkap",
  },

  expJobTitle: {
    en: "IT Support & Full-Stack Developer",
    id: "IT Support & Full-Stack Developer",
  },
  expRange: {
    en: "January 2025 - April 2025",
    id: "Januari 2025 - April 2025",
  },
  expLocation: {
    en: "Bogor, West Java, Indonesia",
    id: "Bogor, Jawa Barat, Indonesia",
  },
  expDescription: {
    en: "Worked as an IT Support and Full-Stack Developer at an Astra-affiliated company for a three-month industrial internship. Developed a company suggestion system website to make submitting suggestions and accessing company facilities and infrastructure easier.",
    id: "Bekerja sebagai IT Support dan Full-Stack Developer di perusahaan afiliasi Astra selama tiga bulan magang industri. Mengembangkan website sistem saran perusahaan untuk mempermudah pengajuan saran dan akses fasilitas serta infrastruktur perusahaan.",
  },
} as const;

type TranslationKey = keyof typeof translations;

type I18nContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "id" : "en"));

  const t = (key: TranslationKey): string => translations[key][lang];

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLang() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useLang must be used within I18nProvider");
  return context;
}
