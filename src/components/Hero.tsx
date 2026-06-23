"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/LangContext";

export default function Hero() {
  const { t } = useLang();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/modules?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/modules");
    }
  };

  return (
    <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-[Catamaran]">
          {t("hero_title_1")}
          <br />
          <span className="text-accent">{t("hero_title_2")}</span>
        </h1>
        <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
          {t("hero_desc")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
          <span className="flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full">
            <i className="fa-solid fa-anchor text-accent" /> {t("fisheries_safety")}
          </span>
          <span className="flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full">
            <i className="fa-solid fa-ship text-accent" /> {t("navigation")}
          </span>
          <span className="flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full">
            <i className="fa-solid fa-fish text-accent" /> {t("aquaculture")}
          </span>
          <span className="flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full">
            <i className="fa-solid fa-id-card text-accent" /> {t("licensing")}
          </span>
        </div>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex rounded-lg overflow-hidden shadow-2xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search_placeholder")}
            className="flex-1 px-5 py-4 text-gray-800 placeholder-gray-400 text-base outline-none bg-white"
          />
          <button type="submit" className="bg-accent text-primary-dark font-bold px-8 py-4 hover:bg-yellow-400 transition flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass" />
            {t("search")}
          </button>
        </form>
      </div>
    </section>
  );
}
