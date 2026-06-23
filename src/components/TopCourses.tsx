"use client";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

export default function TopCourses() {
  const { lang, t } = useLang();

  return (
    <section className="py-16 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            {t("featured_modules")}
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            {t("featured_modules_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {modules.map((mod) => {
            const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
            return (
              <div key={mod.id} className="course-card bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300">
                <Link href={`/modules/${mod.id}`} className="block relative h-48 overflow-hidden">
                  <img src={mod.image} alt={title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {mod.badge && (
                      <span className="bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                    <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                      <i className="fa-regular fa-clock mr-1" />{mod.duration}
                    </span>
                    <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                      <i className="fa-solid fa-layer-group mr-1" />{mod.moduleCount} {t("lessons")}
                    </span>
                  </div>
                </Link>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded">{mod.category}</span>
                      <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded">{mod.tag}</span>
                    </div>
                    <span className="text-xs text-gray-mid flex items-center gap-1">
                      <i className="fa-solid fa-users" /> {mod.enrolled}
                    </span>
                  </div>

                  <h3 className="font-bold text-primary-dark text-lg mb-2 leading-snug">
                    <Link href={`/modules/${mod.id}`} className="hover:text-primary transition">{title}</Link>
                  </h3>
                  <p className="text-sm text-gray-mid mb-4">
                    {lang === "si" ? mod.descSi.substring(0, 100) + "..." : lang === "ta" ? mod.descTa.substring(0, 100) + "..." : mod.description.substring(0, 100) + "..."}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-primary font-bold text-sm flex items-center gap-1">
                      <i className="fa-solid fa-certificate" /> {t("certificate")}
                    </span>
                    <Link href={`/modules/${mod.id}`} className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded hover:bg-primary-dark transition">
                      {t("enroll_now")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/modules" className="inline-flex items-center gap-2 bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy transition">
            {t("view_all_modules")} <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
