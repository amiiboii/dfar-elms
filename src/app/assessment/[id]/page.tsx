"use client";
import { use, useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

const sampleQuestions = [
  {
    q: { en: "What is the primary purpose of a life jacket?", si: "ජීවිත කබායක මූලික අරමුණ කුමක්ද?", ta: "உயிர்காப்பு ஜாக்கெட்டின் முதன்மை நோக்கம் என்ன?" },
    options: {
      en: ["To keep the wearer afloat in water", "To protect from sunburn", "To keep warm in cold weather", "To signal rescue teams"],
      si: ["ඇඳුම් ලාභියා ජලයේ පාවීමට", "හිරු රශ්මි ආරක්ෂාව", "සීතල කාලගුණයේ උණුසුම", "ගලවා ගැනීමේ කණ්ඩායම් වෙත සංඥා"],
      ta: ["அணிபவரை நீரில் மிதக்கவைக்க", "சூரிய ஒளி காயங்களிலிருந்து பாதுகாக்க", "குளிர் காலநிலையில் சூடாக வைக்க", "மீட்புக் குழுக்களுக்கு சமிக்ஞை செய்ய"],
    },
    correct: 0,
  },
  {
    q: { en: "What should you do when you see dark cumulonimbus clouds approaching?", si: "අඳුරු කියුමුලෝනිම්බස් වලාකුළු ළඟා වන විට ඔබ කුමක් කළ යුතුද?", ta: "இருண்ட கியுமுலோனிம்பஸ் மேகங்கள் நெருங்குவதைக் கண்டால் என்ன செய்ய வேண්டும்?" },
    options: {
      en: ["Return to shore immediately", "Continue fishing", "Anchor the boat", "Speed up fishing operations"],
      si: ["වහාම වෙරළට ආපසු යන්න", "ධීවරය දිගටම කරන්න", "බෝට්ටුව නැංගුරම් දමන්න", "ධීවර කටයුතු වේගවත් කරන්න"],
      ta: ["உடனடியாக கரைக்குத் திரும்புங்கள்", "மீன்பிடியைத் தொடருங்கள்", "படகை நங்கூரமிடுங்கள்", "மீன்பிடி நடவடிக்கைகளை விரைவுபடுத்துங்கள்"],
    },
    correct: 0,
  },
  {
    q: { en: "What is the VHF channel designated for maritime distress calls?", si: "සමුද්‍ර අපදා ඇමතුම් සඳහා නම් කර ඇති VHF නාලිකාව කුමක්ද?", ta: "கடல் துயர அழைப்புகளுக்கு நியமிக்கப்பட்ட VHF சேனல் எது?" },
    options: {
      en: ["Channel 16", "Channel 1", "Channel 70", "Channel 9"],
      si: ["නාලිකාව 16", "නාලිකාව 1", "නාලිකාව 70", "නාලිකාව 9"],
      ta: ["சேனல் 16", "சேனல் 1", "சேனல் 70", "சேனல் 9"],
    },
    correct: 0,
  },
  {
    q: { en: "How many crew members must be trained in first aid on a fishing vessel?", si: "ධීවර යාත්‍රාවක කී දෙනෙකුට ප්‍රථමාධාර පුහුණුව තිබිය යුතුද?", ta: "ஒரு மீன்பிடி கப்பலில் எத்தனை பணியாளர்கள் முதலுதவியில் பயிற்சி பெற்றிருக்க வேண்டும்?" },
    options: {
      en: ["At least one per vessel", "All crew members", "Only the captain", "No requirement exists"],
      si: ["යාත්‍රාවකට අවම වශයෙන් එක් අයෙක්", "සියලුම කාර්ය මණ්ඩල සාමාජිකයන්", "නායකයා පමණි", "අවශ්‍යතාවක් නැත"],
      ta: ["கப்பலுக்கு குறைந்தது ஒருவர்", "அனைத்து பணியாளர்களும்", "கப்பித்தான் மட்டுமே", "தேவை இல்லை"],
    },
    correct: 0,
  },
  {
    q: { en: "What is the recommended minimum distance to maintain from coral reefs while fishing?", si: "ධීවරයේදී කොරල්පරවලින් පවත්වා ගත යුතු අවම දුර කුමක්ද?", ta: "மீன்பிடிக்கும்போது பவளப்பாறைகளிலிருந்து பராமரிக்க வேண்டிய குறைந்தபட்ச தூரம் என்ன?" },
    options: {
      en: ["200 meters", "50 meters", "500 meters", "1 kilometer"],
      si: ["මීටර 200", "මීටර 50", "මීටර 500", "කිලෝමීටර 1"],
      ta: ["200 மீட்டர்", "50 மீட்டர்", "500 மீட்டர்", "1 கிலோமீட்டர்"],
    },
    correct: 0,
  },
];

type Phase = "intro" | "quiz" | "result";

export default function AssessmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLang();
  const mod = modules.find((m) => m.id === id);
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(sampleQuestions.map(() => null));
  const [timeLeft, setTimeLeft] = useState(mod?.assessment.timeLimit ? mod.assessment.timeLimit * 60 : 2700);

  if (!mod) {
    return (
      <>
        <TopBar /><Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-primary-dark">Module Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
  const score = answers.filter((a, i) => a === sampleQuestions[i].correct).length;
  const pct = Math.round((score / sampleQuestions.length) * 100);
  const passed = pct >= mod.assessment.passMark;

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  if (phase === "intro") {
    return (
      <>
        <TopBar /><Navbar />
        <section className="min-h-screen bg-gray-light py-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-clipboard-check text-3xl text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary-dark mb-2">{t("assessments")}</h1>
              <h2 className="text-lg text-gray-mid mb-6">{title}</h2>

              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="text-sm text-gray-mid">{t("questions")}</div>
                  <div className="text-2xl font-bold text-primary-dark">{sampleQuestions.length}</div>
                </div>
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="text-sm text-gray-mid">{t("time_limit")}</div>
                  <div className="text-2xl font-bold text-primary-dark">{mod.assessment.timeLimit} {t("minutes")}</div>
                </div>
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="text-sm text-gray-mid">{t("pass_mark")}</div>
                  <div className="text-2xl font-bold text-green-600">{mod.assessment.passMark}%</div>
                </div>
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="text-sm text-gray-mid">{t("attempts_remaining")}</div>
                  <div className="text-2xl font-bold text-primary">{mod.assessment.attemptsPerDay - mod.assessment.attemptsUsed}</div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left text-sm text-yellow-800">
                <i className="fa-solid fa-triangle-exclamation mr-2" />
                You have <strong>{mod.assessment.attemptsPerDay - mod.assessment.attemptsUsed}</strong> attempts remaining today. The timer will start once you begin.
              </div>

              <button
                onClick={() => setPhase("quiz")}
                className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-primary-dark transition text-lg"
              >
                <i className="fa-solid fa-play mr-2" />{t("take_assessment")}
              </button>

              <Link href={`/modules/${id}`} className="block mt-4 text-primary text-sm font-medium hover:text-primary-dark">
                ← Back to Module
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (phase === "result") {
    return (
      <>
        <TopBar /><Navbar />
        <section className="min-h-screen bg-gray-light py-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? "bg-green-100" : "bg-red-100"}`}>
                <i className={`text-4xl ${passed ? "fa-solid fa-trophy text-green-600" : "fa-solid fa-rotate-left text-red-500"}`} />
              </div>

              <h1 className="text-3xl font-bold mb-2" style={{ color: passed ? "#16a34a" : "#dc2626" }}>
                {passed ? "Congratulations!" : "Try Again"}
              </h1>
              <p className="text-gray-mid mb-6">
                {passed
                  ? "You have successfully passed the assessment. Your certificate will be generated shortly."
                  : `You need ${mod.assessment.passMark}% to pass. Review the material and try again.`}
              </p>

              <div className="text-6xl font-extrabold mb-2" style={{ color: passed ? "#16a34a" : "#dc2626" }}>
                {pct}%
              </div>
              <p className="text-gray-mid text-sm mb-8">{score} / {sampleQuestions.length} correct answers</p>

              <div className="flex gap-3">
                {passed ? (
                  <>
                    <Link href={`/certificate/${id}`} className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition">
                      <i className="fa-solid fa-certificate mr-2" />{t("view_certificate")}
                    </Link>
                    <Link href="/modules" className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition">
                      {t("view_all_modules")}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={`/modules/${id}`} className="flex-1 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition">
                      <i className="fa-solid fa-book-open mr-2" />Review Material
                    </Link>
                    <button onClick={() => { setPhase("quiz"); setCurrent(0); setAnswers(sampleQuestions.map(() => null)); }} className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-white transition">
                      <i className="fa-solid fa-rotate-left mr-2" />Retry
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // Quiz phase
  const question = sampleQuestions[current];
  const qText = question.q[lang] || question.q.en;
  const opts = question.options[lang] || question.options.en;

  return (
    <>
      <TopBar /><Navbar />
      <section className="min-h-screen bg-gray-light py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Timer and progress bar */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-primary-dark">
                {t("questions")} {current + 1} / {sampleQuestions.length}
              </span>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${((current + 1) / sampleQuestions.length) * 100}%` }} />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <i className="fa-regular fa-clock text-primary" />
              <span className="font-mono font-semibold text-primary-dark">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-2 text-sm text-primary font-semibold">
              {t("questions")} {current + 1}
            </div>
            <h2 className="text-xl font-bold text-primary-dark mb-6">{qText}</h2>

            <div className="space-y-3 mb-8">
              {opts.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const newAnswers = [...answers];
                    newAnswers[current] = idx;
                    setAnswers(newAnswers);
                  }}
                  className={`w-full text-left p-4 rounded-xl border-2 transition flex items-center gap-3 ${
                    answers[current] === idx
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    answers[current] === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className={`text-sm ${answers[current] === idx ? "text-primary-dark font-semibold" : "text-gray-700"}`}>
                    {opt}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-30 transition"
              >
                <i className="fa-solid fa-chevron-left mr-2" />Previous
              </button>

              {/* Question dots */}
              <div className="flex gap-1.5">
                {sampleQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === current ? "bg-primary" : answers[idx] !== null ? "bg-green-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {current === sampleQuestions.length - 1 ? (
                <button
                  onClick={() => setPhase("result")}
                  className="px-6 py-2.5 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                >
                  Submit <i className="fa-solid fa-check ml-2" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrent(current + 1)}
                  className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition"
                >
                  Next <i className="fa-solid fa-chevron-right ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
