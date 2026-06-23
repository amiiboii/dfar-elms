"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

const user = {
  name: "Samantha Jayawardena",
  role: "Fisheries Officer",
  district: "Galle",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  joined: "March 2026",
};

const recentActivity = [
  { action: "Completed lesson", detail: "Emergency Procedures at Sea", module: "Maritime Safety", time: "2 hours ago", icon: "fa-solid fa-check-circle text-green-500" },
  { action: "Started module", detail: "Sustainable Fishing Practices", module: "Aquaculture", time: "1 day ago", icon: "fa-solid fa-play-circle text-primary" },
  { action: "Earned certificate", detail: "Fish Processing & Export Standards", module: "Processing", time: "3 days ago", icon: "fa-solid fa-certificate text-accent" },
  { action: "Passed assessment", detail: "Score: 92%", module: "Fish Processing", time: "3 days ago", icon: "fa-solid fa-trophy text-green-600" },
  { action: "Enrolled in module", detail: "Boat License Certification", module: "Licensing", time: "1 week ago", icon: "fa-solid fa-user-plus text-blue-500" },
];

const certificates = [
  { module: "Fish Processing & Export Standards", date: "June 20, 2026", id: "DFAR-CERT-2026-0412" },
];

export default function DashboardPage() {
  const { lang, t } = useLang();
  const enrolled = modules.filter((m) => m.progress > 0);
  const completed = modules.filter((m) => m.progress === 100);
  const inProgress = modules.filter((m) => m.progress > 0 && m.progress < 100);
  const overallProgress = enrolled.length > 0
    ? Math.round(enrolled.reduce((sum, m) => sum + m.progress, 0) / enrolled.length)
    : 0;

  return (
    <>
      <TopBar />
      <Navbar />

      <section className="bg-gray-light min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Profile header */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
            <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover border-4 border-primary/20" />
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl font-bold text-primary-dark">{user.name}</h1>
              <p className="text-gray-mid text-sm">{user.role} — {user.district} District</p>
              <p className="text-gray-mid text-xs mt-1">Member since {user.joined}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/modules" className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition">
                <i className="fa-solid fa-book-open mr-2" />{t("modules")}
              </Link>
              <button className="px-5 py-2 border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition">
                <i className="fa-solid fa-gear mr-2" />Settings
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="stat-card bg-white rounded-xl p-5 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-book text-primary text-xl" />
                </div>
                <span className="text-3xl font-extrabold text-primary-dark">{enrolled.length}</span>
              </div>
              <p className="text-sm text-gray-mid font-medium">{t("enrolled_modules")}</p>
            </div>
            <div className="stat-card bg-white rounded-xl p-5 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-circle-check text-green-600 text-xl" />
                </div>
                <span className="text-3xl font-extrabold text-primary-dark">{completed.length}</span>
              </div>
              <p className="text-sm text-gray-mid font-medium">{t("completed_modules")}</p>
            </div>
            <div className="stat-card bg-white rounded-xl p-5 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-certificate text-accent text-xl" />
                </div>
                <span className="text-3xl font-extrabold text-primary-dark">{certificates.length}</span>
              </div>
              <p className="text-sm text-gray-mid font-medium">{t("certificates_earned")}</p>
            </div>
            <div className="stat-card bg-white rounded-xl p-5 shadow-sm transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-blue-600 text-xl" />
                </div>
                <span className="text-3xl font-extrabold text-primary-dark">{overallProgress}%</span>
              </div>
              <p className="text-sm text-gray-mid font-medium">{t("overall_progress")}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Continue learning */}
              {inProgress.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-primary-dark mb-4">
                    <i className="fa-solid fa-play-circle text-primary mr-2" />{t("continue_where")}
                  </h2>
                  <div className="space-y-4">
                    {inProgress.map((mod) => {
                      const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
                      return (
                        <Link key={mod.id} href={`/modules/${mod.id}`} className="block bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
                          <div className="flex gap-4">
                            <img src={mod.image} alt={title} className="w-24 h-20 rounded-lg object-cover shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">{mod.category}</span>
                                <span className="text-xs text-gray-mid">{mod.instructor}</span>
                              </div>
                              <h3 className="font-bold text-primary-dark text-base mb-2 truncate">{title}</h3>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 bg-gray-200 rounded-full h-2">
                                  <div className="bg-primary rounded-full h-2" style={{ width: `${mod.progress}%` }} />
                                </div>
                                <span className="text-sm font-semibold text-primary shrink-0">{mod.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Completed modules */}
              {completed.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-primary-dark mb-4">
                    <i className="fa-solid fa-circle-check text-green-600 mr-2" />{t("completed_modules")}
                  </h2>
                  <div className="space-y-3">
                    {completed.map((mod) => {
                      const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
                      return (
                        <div key={mod.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-check text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-primary-dark text-sm truncate">{title}</h3>
                            <p className="text-xs text-gray-mid">{mod.category} · {mod.instructor}</p>
                          </div>
                          <Link href={`/modules/${mod.id}`} className="text-primary text-sm font-medium hover:text-primary-dark shrink-0">
                            {t("view_certificate")} →
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Certificates */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-certificate text-accent" /> {t("my_certificates")}
                </h3>
                {certificates.length > 0 ? (
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-lg p-4 border border-primary/10">
                        <h4 className="font-semibold text-primary-dark text-sm mb-1">{cert.module}</h4>
                        <p className="text-xs text-gray-mid mb-2">Issued: {cert.date}</p>
                        <p className="text-xs font-mono text-primary/70 mb-3">ID: {cert.id}</p>
                        <Link href="/certificate/fish-processing" className="w-full block text-center bg-primary text-white text-xs font-semibold py-2 rounded hover:bg-primary-dark transition">
                          <i className="fa-solid fa-download mr-1" /> {t("download_certificate")}
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-mid">No certificates yet. Complete a module and pass the assessment to earn your first certificate.</p>
                )}
              </div>

              {/* Recent activity */}
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h3 className="font-bold text-primary-dark mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-clock-rotate-left text-primary" /> {t("recent_activity")}
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((act, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <i className={`${act.icon} mt-0.5`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary-dark">{act.action}</p>
                        <p className="text-xs text-gray-mid truncate">{act.detail}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
