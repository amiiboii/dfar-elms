"use client";
import { useLang } from "@/lib/LangContext";

export default function TopBar() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="bg-primary-dark text-white py-2.5">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-book text-accent" />
            <span>{t("total_modules")}: <strong>150+</strong></span>
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <i className="fa-solid fa-users text-accent" />
            <span>{t("active_users")}: <strong>10,000+</strong></span>
          </span>
          <span className="hidden md:flex items-center gap-2">
            <i className="fa-solid fa-phone text-accent" />
            <span>{t("help_line")}: <strong>+94 112 446 183</strong></span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang("si")}
            className={`px-2.5 py-0.5 rounded text-xs font-semibold transition ${lang === "si" ? "bg-accent text-primary-dark" : "bg-white/20 hover:bg-white/30"}`}
          >
            සිංහල
          </button>
          <button
            onClick={() => setLang("ta")}
            className={`px-2.5 py-0.5 rounded text-xs font-semibold transition ${lang === "ta" ? "bg-accent text-primary-dark" : "bg-white/20 hover:bg-white/30"}`}
          >
            தமிழ்
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2.5 py-0.5 rounded text-xs font-semibold transition ${lang === "en" ? "bg-accent text-primary-dark" : "bg-white/20 hover:bg-white/30"}`}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}
