"use client";
import { useLang } from "@/lib/LangContext";

const categories = [
  { nameKey: "maritime_safety", icon: "fa-solid fa-life-ring", enrolled: 3278, courses: 28 },
  { nameKey: "navigation_seamanship", icon: "fa-solid fa-compass", enrolled: 2544, courses: 18 },
  { nameKey: "aquaculture", icon: "fa-solid fa-fish", enrolled: 1890, courses: 22 },
  { nameKey: "fish_processing", icon: "fa-solid fa-industry", enrolled: 1456, courses: 15 },
  { nameKey: "licensing_compliance", icon: "fa-solid fa-id-card", enrolled: 4677, courses: 32 },
  { nameKey: "conservation", icon: "fa-solid fa-leaf", enrolled: 1120, courses: 12 },
  { nameKey: "boat_maintenance", icon: "fa-solid fa-wrench", enrolled: 980, courses: 10 },
  { nameKey: "export_standards", icon: "fa-solid fa-globe", enrolled: 760, courses: 8 },
];

export default function Categories() {
  const { t } = useLang();
  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            {t("module_categories")}
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            {t("module_categories_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.nameKey}
              href="/modules"
              className="category-card bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm transition-all duration-300 group"
            >
              <div className="cat-icon text-primary text-4xl mb-4">
                <i className={cat.icon} />
              </div>
              <h3 className="font-bold text-primary-dark text-lg mb-2">{t(cat.nameKey)}</h3>
              <div className="cat-count text-gray-mid text-sm">
                <span className="font-semibold text-primary-dark">{cat.enrolled.toLocaleString()}</span> {t("enrolled")}
              </div>
              <div className="cat-count text-gray-mid text-sm mt-1">{cat.courses} {t("courses")}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
