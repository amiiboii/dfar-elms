"use client";
import { use, useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

const typeIcon: Record<string, string> = {
  video: "fa-solid fa-play-circle text-red-500",
  presentation: "fa-solid fa-file-powerpoint text-orange-500",
  reading: "fa-solid fa-book-open text-blue-500",
  quiz: "fa-solid fa-clipboard-question text-green-600",
};

const typeLabel: Record<string, Record<string, string>> = {
  video: { en: "Video Lecture", si: "වීඩියෝ දේශනය", ta: "வீடியோ விரிவுரை" },
  presentation: { en: "Presentation", si: "ඉදිරිපත් කිරීම", ta: "வழங்கல்" },
  reading: { en: "Reading Material", si: "කියවීම් ද්‍රව්‍ය", ta: "வாசிப்புப் பொருள்" },
  quiz: { en: "Quiz", si: "ප්‍රශ්නාවලිය", ta: "வினாடி வினா" },
};

export default function ModuleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLang();
  const mod = modules.find((m) => m.id === id);
  const [activeLesson, setActiveLesson] = useState(0);

  if (!mod) {
    return (
      <>
        <TopBar />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary-dark mb-4">Module Not Found</h1>
            <Link href="/modules" className="text-primary font-semibold">← Back to Modules</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
  const desc = lang === "si" ? mod.descSi : lang === "ta" ? mod.descTa : mod.description;
  const currentLesson = mod.lessons[activeLesson];
  const lessonTitle = lang === "si" ? currentLesson.titleSi : lang === "ta" ? currentLesson.titleTa : currentLesson.title;
  const completedCount = mod.lessons.filter((l) => l.completed).length;

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-primary-dark py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
            <Link href="/" className="hover:text-accent transition">{t("home")}</Link>
            <i className="fa-solid fa-chevron-right text-[10px]" />
            <Link href="/modules" className="hover:text-accent transition">{t("modules")}</Link>
            <i className="fa-solid fa-chevron-right text-[10px]" />
            <span className="text-accent">{title}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
            <span><i className="fa-solid fa-user mr-1" />{mod.instructor}</span>
            <span><i className="fa-regular fa-clock mr-1" />{mod.duration}</span>
            <span><i className="fa-solid fa-layer-group mr-1" />{mod.moduleCount} {t("lessons")}</span>
            <span><i className="fa-solid fa-users mr-1" />{mod.enrolled} {t("enrolled")}</span>
            <span className="bg-accent/20 text-accent px-2.5 py-0.5 rounded font-semibold">{mod.tag}</span>
          </div>
        </div>
      </div>

      <section className="py-8 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content - Video/Content area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="bg-black rounded-xl overflow-hidden shadow-lg">
                {currentLesson.type === "video" && currentLesson.videoUrl ? (
                  <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={currentLesson.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={lessonTitle}
                    />
                  </div>
                ) : currentLesson.type === "presentation" ? (
                  <div className="aspect-video bg-white overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="bg-gradient-to-r from-primary-dark to-primary p-6 sm:p-8 text-white">
                        <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                          <i className="fa-solid fa-file-powerpoint" /> DFAR E-LMS Presentation
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold">{lessonTitle}</h3>
                      </div>
                      <div className="flex-1 p-6 sm:p-8 bg-gradient-to-b from-gray-50 to-white">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                              <i className="fa-solid fa-shield-halved text-primary text-sm" />
                            </div>
                            <h4 className="font-semibold text-sm text-primary-dark">Safety Protocols</h4>
                            <p className="text-xs text-gray-mid mt-1">International maritime safety standards and DFAR regulations</p>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                              <i className="fa-solid fa-list-check text-accent text-sm" />
                            </div>
                            <h4 className="font-semibold text-sm text-primary-dark">Compliance Checklist</h4>
                            <p className="text-xs text-gray-mid mt-1">Pre-departure safety checks and equipment verification</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-mid border-t pt-3">
                          <span>Slide 1 of 24</span>
                          <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-200 transition"><i className="fa-solid fa-chevron-left" /></button>
                            <button className="px-3 py-1.5 bg-primary text-white rounded hover:bg-primary-dark transition"><i className="fa-solid fa-chevron-right" /></button>
                            <button className="px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-200 transition"><i className="fa-solid fa-expand" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : currentLesson.type === "reading" ? (
                  <div className="aspect-video bg-white overflow-hidden">
                    <div className="h-full flex flex-col">
                      <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <i className="fa-solid fa-file-pdf" />
                          <span className="font-medium">{lessonTitle}.pdf</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-white/20 rounded text-xs hover:bg-white/30 transition">
                            <i className="fa-solid fa-download mr-1" />Download
                          </button>
                          <button className="px-3 py-1 bg-white/20 rounded text-xs hover:bg-white/30 transition">
                            <i className="fa-solid fa-print mr-1" />Print
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 p-6 sm:p-8 overflow-auto bg-gray-50">
                        <div className="max-w-lg mx-auto bg-white shadow-md p-6 sm:p-8 rounded">
                          <div className="text-center mb-4 pb-4 border-b">
                            <img src="/logo-black.png" alt="DFAR" className="h-8 mx-auto mb-2" />
                            <p className="text-[10px] text-gray-400">Department of Fisheries and Aquatic Resources</p>
                          </div>
                          <h4 className="font-bold text-primary-dark text-lg mb-3">{lessonTitle}</h4>
                          <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
                            <p>This document covers the essential knowledge required for this module section. All fisheries personnel must be familiar with these guidelines.</p>
                            <p className="font-semibold text-primary-dark mt-3">Key Topics:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>International standards and best practices</li>
                              <li>Sri Lankan maritime regulations and DFAR directives</li>
                              <li>Practical guidelines for field implementation</li>
                              <li>Case studies from Sri Lankan fisheries districts</li>
                            </ul>
                          </div>
                          <div className="text-center mt-4 text-xs text-gray-400">Page 1 of 12</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-white overflow-hidden">
                    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <i className="fa-solid fa-clipboard-question text-3xl text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{lessonTitle}</h3>
                      <p className="text-gray-mid text-sm mb-1">5 multiple choice questions</p>
                      <p className="text-gray-mid text-xs mb-6">Test your understanding of this section before moving on</p>
                      <Link href={`/assessment/${mod.id}`} className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block">
                        <i className="fa-solid fa-play mr-2" />Start Quiz
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Current lesson info */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-mid mb-1">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold">
                        Lesson {activeLesson + 1} of {mod.lessons.length}
                      </span>
                      <span><i className={typeIcon[currentLesson.type]} /> {typeLabel[currentLesson.type][lang] || typeLabel[currentLesson.type].en}</span>
                      <span><i className="fa-regular fa-clock" /> {currentLesson.duration}</span>
                    </div>
                    <h2 className="text-xl font-bold text-primary-dark">{lessonTitle}</h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
                      disabled={activeLesson === 0}
                      className="px-3 py-2 rounded-lg border border-gray-200 text-gray-mid hover:bg-gray-50 disabled:opacity-30 transition"
                    >
                      <i className="fa-solid fa-chevron-left" />
                    </button>
                    <button
                      onClick={() => setActiveLesson(Math.min(mod.lessons.length - 1, activeLesson + 1))}
                      disabled={activeLesson === mod.lessons.length - 1}
                      className="px-3 py-2 rounded-lg border border-gray-200 text-gray-mid hover:bg-gray-50 disabled:opacity-30 transition"
                    >
                      <i className="fa-solid fa-chevron-right" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-mid text-sm">{desc}</p>
              </div>
            </div>

            {/* Sidebar - Lesson list + Assessment */}
            <div className="space-y-6">
              {/* Progress card */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-primary-dark mb-3">{t("progress")}</h3>
                <div className="flex justify-between text-sm text-gray-mid mb-2">
                  <span>{completedCount}/{mod.lessons.length} {t("lessons")}</span>
                  <span className="font-semibold text-primary">{mod.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-primary rounded-full h-3 transition-all" style={{ width: `${mod.progress}%` }} />
                </div>
                {mod.progress === 100 ? (
                  <Link href={`/certificate/${mod.id}`} className="w-full block text-center bg-green-600 text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition text-sm">
                    <i className="fa-solid fa-download mr-2" />{t("download_certificate")}
                  </Link>
                ) : (
                  <Link href={`/assessment/${mod.id}`} className="w-full block text-center bg-accent text-primary-dark font-semibold py-2.5 rounded-lg hover:bg-yellow-400 transition text-sm">
                    <i className="fa-solid fa-clipboard-check mr-2" />{t("take_assessment")}
                  </Link>
                )}
              </div>

              {/* Assessment info */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-primary-dark mb-3">{t("assessments")}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-mid">{t("questions")}</span><span className="font-semibold">{mod.assessment.questions}</span></div>
                  <div className="flex justify-between"><span className="text-gray-mid">{t("time_limit")}</span><span className="font-semibold">{mod.assessment.timeLimit} {t("minutes")}</span></div>
                  <div className="flex justify-between"><span className="text-gray-mid">{t("pass_mark")}</span><span className="font-semibold">{mod.assessment.passMark}%</span></div>
                  <div className="flex justify-between">
                    <span className="text-gray-mid">{t("attempts_remaining")}</span>
                    <span className="font-semibold text-primary">{mod.assessment.attemptsPerDay - mod.assessment.attemptsUsed}/day</span>
                  </div>
                </div>
              </div>

              {/* Lesson list */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="font-bold text-primary-dark">{t("lessons")} ({mod.lessons.length})</h3>
                </div>
                <div className="max-h-[500px] overflow-y-auto">
                  {mod.lessons.map((lesson, idx) => {
                    const lTitle = lang === "si" ? lesson.titleSi : lang === "ta" ? lesson.titleTa : lesson.title;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(idx)}
                        className={`w-full text-left px-4 py-3 border-b border-gray-50 flex items-start gap-3 hover:bg-gray-50 transition ${
                          idx === activeLesson ? "bg-primary/5 border-l-3 border-l-primary" : ""
                        }`}
                      >
                        <div className="mt-0.5">
                          {lesson.completed ? (
                            <i className="fa-solid fa-circle-check text-green-500" />
                          ) : idx === activeLesson ? (
                            <i className="fa-solid fa-circle-play text-primary" />
                          ) : (
                            <i className="fa-regular fa-circle text-gray-300" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${lesson.completed ? "text-gray-500" : "text-primary-dark"}`}>
                            {idx + 1}. {lTitle}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-mid mt-0.5">
                            <i className={typeIcon[lesson.type]} />
                            <span>{typeLabel[lesson.type][lang] || typeLabel[lesson.type].en}</span>
                            <span>· {lesson.duration}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
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
