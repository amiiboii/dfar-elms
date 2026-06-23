"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ModulesContent() {
  const { lang, t } = useLang();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  const categories = ["All", ...new Set(modules.map((m) => m.category))];
  const filtered = modules.filter((m) => {
    const matchCat = filter === "All" || m.category === filter;
    const title = lang === "si" ? m.titleSi : lang === "ta" ? m.titleTa : m.title;
    const desc = lang === "si" ? m.descSi : lang === "ta" ? m.descTa : m.description;
    const q = search.toLowerCase();
    const matchSearch = !q || title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || m.category.toLowerCase().includes(q) || m.tag.toLowerCase().includes(q) || m.instructor.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t("modules")}</h1>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-accent transition">{t("home")}</Link>
            <i className="fa-solid fa-chevron-right text-[10px]" />
            <span className="text-accent">{t("modules")}</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-light min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === cat
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder={t("search_placeholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-primary outline-none"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <i className="fa-solid fa-xmark text-sm" />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-mid mb-6">
            {search ? (
              <>Showing <strong>{filtered.length}</strong> results for &ldquo;<strong>{search}</strong>&rdquo;</>
            ) : (
              <>Showing <strong>{filtered.length}</strong> of {modules.length} modules</>
            )}
          </p>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <i className="fa-solid fa-search text-4xl text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-primary-dark mb-2">No modules found</h3>
              <p className="text-gray-mid text-sm mb-4">Try a different search term or clear the filters</p>
              <button onClick={() => { setSearch(""); setFilter("All"); }} className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition">
                Clear Filters
              </button>
            </div>
          )}

          {/* Module grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((mod) => {
              const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
              return (
                <Link
                  key={mod.id}
                  href={`/modules/${mod.id}`}
                  className="course-card bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300 block"
                >
                  <div className="relative h-48 overflow-hidden">
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
                    {mod.progress > 0 && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-primary">
                        {mod.progress === 100 ? "Done" : mod.progress + "%"}
                      </div>
                    )}
                  </div>

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
                    <h3 className="font-bold text-primary-dark text-lg mb-2 leading-snug">{title}</h3>

                    {mod.progress > 0 && mod.progress < 100 && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-mid mb-1">
                          <span>{t("progress")}</span>
                          <span>{mod.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${mod.progress}%` }} />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-mid flex items-center gap-1">
                        <i className="fa-solid fa-user" /> {mod.instructor}
                      </span>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1">
                        {mod.progress === 0 ? t("start_learning") : mod.progress === 100 ? t("view_certificate") : t("continue_learning")}
                        <i className="fa-solid fa-arrow-right text-xs" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ModulesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-gray-light" />}>
        <ModulesContent />
      </Suspense>
      <Footer />
    </>
  );
}
