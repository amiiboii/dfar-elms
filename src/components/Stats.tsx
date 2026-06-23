"use client";
import { useLang } from "@/lib/LangContext";

const stats = [
  { icon: "fa-solid fa-award", value: "150+", labelKey: "learning_modules" },
  { icon: "fa-solid fa-chalkboard-user", value: "45", labelKey: "expert_instructors_stat" },
  { icon: "fa-solid fa-user-graduate", value: "10,000+", labelKey: "registered_users" },
  { icon: "fa-solid fa-certificate", value: "5,200+", labelKey: "certificates_issued" },
];

export default function Stats() {
  const { t } = useLang();
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 border-2 border-white rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="text-center text-white">
              <div className="text-5xl mb-4 text-accent">
                <i className={stat.icon} />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-white/75 text-base font-medium">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
