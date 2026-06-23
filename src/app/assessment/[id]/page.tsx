"use client";
import { use, useState, useEffect, useCallback } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

type Q = {
  q: Record<string, string>;
  options: Record<string, string[]>;
  correct: number;
};

const allQuestions: Q[] = [
  {
    q: { en: "What is the primary purpose of a life jacket?", si: "ජීවිත කබායක මූලික අරමුණ කුමක්ද?", ta: "உயிர்காப்பு ஜாக்கெட்டின் முதன்மை நோக்கம் என்ன?" },
    options: { en: ["To keep the wearer afloat in water", "To protect from sunburn", "To keep warm in cold weather", "To signal rescue teams"], si: ["ඇඳුම් ලාභියා ජලයේ පාවීමට", "හිරු රශ්මි ආරක්ෂාව", "සීතල කාලගුණයේ උණුසුම", "ගලවා ගැනීමේ කණ්ඩායම් වෙත සංඥා"], ta: ["அணிபவரை நீரில் மிதக்கவைக்க", "சூரிய ஒளி காயங்களிலிருந்து பாதுகாக்க", "குளிர் காலநிலையில் சூடாக வைக்க", "மீட்புக் குழுக்களுக்கு சமிக்ஞை செய்ய"] },
    correct: 0,
  },
  {
    q: { en: "What should you do when dark cumulonimbus clouds approach?", si: "අඳුරු කියුමුලෝනිම්බස් වලාකුළු ළඟා වන විට ඔබ කුමක් කළ යුතුද?", ta: "இருண்ட மேகங்கள் நெருங்கும்போது என்ன செய்ய வேண்டும்?" },
    options: { en: ["Return to shore immediately", "Continue fishing", "Anchor the boat and wait", "Speed up fishing operations"], si: ["වහාම වෙරළට ආපසු යන්න", "ධීවරය දිගටම කරන්න", "බෝට්ටුව නැංගුරම් දමා රැඳී සිටින්න", "ධීවර කටයුතු වේගවත් කරන්න"], ta: ["உடனடியாக கரைக்குத் திரும்புங்கள்", "மீன்பிடியைத் தொடருங்கள்", "படகை நங்கூரமிட்டு காத்திருங்கள்", "மீன்பிடியை விரைவுபடுத்துங்கள்"] },
    correct: 0,
  },
  {
    q: { en: "What VHF channel is designated for maritime distress calls?", si: "සමුද්‍ර අපදා ඇමතුම් සඳහා නම් කර ඇති VHF නාලිකාව කුමක්ද?", ta: "கடல் துயர அழைப்புகளுக்கான VHF சேனல் எது?" },
    options: { en: ["Channel 16", "Channel 1", "Channel 70", "Channel 9"], si: ["නාලිකාව 16", "නාලිකාව 1", "නාලිකාව 70", "නාලිකාව 9"], ta: ["சேனல் 16", "சேனல் 1", "சேனல் 70", "சேனல் 9"] },
    correct: 0,
  },
  {
    q: { en: "What is the minimum number of crew trained in first aid on a fishing vessel?", si: "ධීවර යාත්‍රාවක ප්‍රථමාධාර පුහුණු කාර්ය මණ්ඩලයේ අවම සංඛ්‍යාව කුමක්ද?", ta: "ஒரு மீன்பிடி கப்பலில் முதலுதவியில் பயிற்சி பெற்ற குறைந்தபட்ச எண்ணிக்கை என்ன?" },
    options: { en: ["At least one per vessel", "All crew members", "Only the captain", "No requirement exists"], si: ["යාත්‍රාවකට අවම වශයෙන් එක් අයෙක්", "සියලුම කාර්ය මණ්ඩල සාමාජිකයන්", "නායකයා පමණි", "අවශ්‍යතාවක් නැත"], ta: ["கப்பலுக்கு குறைந்தது ஒருவர்", "அனைத்து பணியாளர்களும்", "கப்பித்தான் மட்டுமே", "தேவை இல்லை"] },
    correct: 0,
  },
  {
    q: { en: "What is the recommended minimum distance from coral reefs while fishing?", si: "ධීවරයේදී කොරල්පරවලින් පවත්වා ගත යුතු අවම දුර කුමක්ද?", ta: "மீன்பிடிக்கும்போது பவளப்பாறைகளிலிருந்து குறைந்தபட்ச தூரம் என்ன?" },
    options: { en: ["200 meters", "50 meters", "500 meters", "1 kilometer"], si: ["මීටර 200", "මීටර 50", "මීටර 500", "කිලෝමීටර 1"], ta: ["200 மீட்டர்", "50 மீட்டர்", "500 மீட்டர்", "1 கிலோமீட்டர்"] },
    correct: 0,
  },
  {
    q: { en: "Which international signal flag indicates a vessel in distress?", si: "අපදාවට පත් යාත්‍රාවක් පෙන්නුම් කරන ජාත්‍යන්තර සංඥා ධජය කුමක්ද?", ta: "துன்பத்தில் உள்ள கப்பலைக் குறிக்கும் சர்வதேச சிக்னல் கொடி எது?" },
    options: { en: ["November Charlie (NC)", "Alpha Bravo (AB)", "Oscar Kilo (OK)", "Sierra Oscar (SO)"], si: ["November Charlie (NC)", "Alpha Bravo (AB)", "Oscar Kilo (OK)", "Sierra Oscar (SO)"], ta: ["November Charlie (NC)", "Alpha Bravo (AB)", "Oscar Kilo (OK)", "Sierra Oscar (SO)"] },
    correct: 0,
  },
  {
    q: { en: "What type of fire extinguisher is suitable for electrical fires on a boat?", si: "බෝට්ටුවක විදුලි ගිනිගැනීම් සඳහා සුදුසු ගිනි නිවනයේ වර්ගය කුමක්ද?", ta: "படகில் மின்சார தீக்கு ஏற்ற தீயணைப்பான் வகை எது?" },
    options: { en: ["CO2 extinguisher", "Water extinguisher", "Foam extinguisher", "Sand bucket"], si: ["CO2 නිවනය", "ජල නිවනය", "පෙන නිවනය", "වැලි බාල්දිය"], ta: ["CO2 தீயணைப்பான்", "நீர் தீயணைப்பான்", "நுரை தீயணைப்பான்", "மணல் வாளி"] },
    correct: 0,
  },
  {
    q: { en: "When is the southwest monsoon season in Sri Lanka?", si: "ශ්‍රී ලංකාවේ නිරිත දිග මෝසම් සෘතුව කවදාද?", ta: "இலங்கையின் தென்மேற்கு பருவமழை காலம் எப்போது?" },
    options: { en: ["May to September", "December to March", "January to April", "October to November"], si: ["මැයි සිට සැප්තැම්බර්", "දෙසැම්බර් සිට මාර්තු", "ජනවාරි සිට අප්‍රේල්", "ඔක්තෝබර් සිට නොවැම්බර්"], ta: ["மே முதல் செப்டம்பர்", "டிசம்பர் முதல் மார்ச்", "ஜனவரி முதல் ஏப்ரல்", "அக்டோபர் முதல் நவம்பர்"] },
    correct: 0,
  },
  {
    q: { en: "What is the Beaufort Scale used to measure?", si: "බියුෆෝට් පරිමාණය මැන බැලීමට භාවිතා කරන්නේ කුමක්ද?", ta: "பியூஃபோர்ட் அளவுகோல் எதை அளவிட பயன்படுகிறது?" },
    options: { en: ["Wind speed at sea", "Water temperature", "Tide height", "Fish population density"], si: ["මුහුදේ සුළං වේගය", "ජල උෂ්ණත්වය", "ගංවතුර උස", "මත්ස්‍ය ජනගහන ඝනත්වය"], ta: ["கடலில் காற்றின் வேகம்", "நீர் வெப்பநிலை", "அலை உயரம்", "மீன் மக்கள் தொகை அடர்த்தி"] },
    correct: 0,
  },
  {
    q: { en: "What does EPIRB stand for in maritime safety?", si: "සමුද්‍ර ආරක්ෂාවේ EPIRB යනුවෙන් අදහස් කරන්නේ කුමක්ද?", ta: "கடல் பாதுகாப்பில் EPIRB என்பதன் பொருள் என்ன?" },
    options: { en: ["Emergency Position Indicating Radio Beacon", "Electronic Personal Information Record Base", "Emergency Protocol for International Rescue Boats", "Enhanced Positioning via Integrated Radio Broadcasting"], si: ["හදිසි ස්ථාන දැනුම්දීමේ රේඩියෝ බීකන්", "ඉලෙක්ට්‍රොනික පුද්ගලික තොරතුරු වාර්තා පදනම", "ජාත්‍යන්තර ගලවා ගැනීමේ බෝට්ටු සඳහා හදිසි ප්‍රොටෝකෝලය", "ඒකාබද්ධ රේඩියෝ විකාශනය හරහා වැඩිදියුණු කළ ස්ථානගත කිරීම"], ta: ["அவசர நிலை குறிக்கும் ரேடியோ பீக்கான்", "மின்னணு தனிநபர் தகவல் பதிவு தளம்", "சர்வதேச மீட்பு படகுகளுக்கான அவசர நெறிமுறை", "ஒருங்கிணைந்த ரேடியோ ஒளிபரப்பு வழியாக மேம்படுத்தப்பட்ட நிலைப்படுத்தல்"] },
    correct: 0,
  },
  {
    q: { en: "What is the maximum allowable mesh size for gill nets in Sri Lankan waters?", si: "ශ්‍රී ලංකා ජලයන්හි දැල් දැල් සඳහා උපරිම අවසර ලත් දැල් ප්‍රමාණය කුමක්ද?", ta: "இலங்கை கடல் பகுதியில் செவுள் வலைகளுக்கான அதிகபட்ச வலை அளவு என்ன?" },
    options: { en: ["Depends on target species and zone", "10 cm for all waters", "No restrictions exist", "5 cm universal standard"], si: ["ඉලක්ක විශේෂය සහ කලාපය මත රඳා පවතී", "සියලුම ජලයන් සඳහා 10 cm", "සීමාවන් නොමැත", "5 cm විශ්ව ප්‍රමිතිය"], ta: ["இலக்கு இனங்கள் மற்றும் மண்டலத்தைப் பொறுத்தது", "அனைத்து நீர்நிலைகளுக்கும் 10 cm", "கட்டுப்பாடுகள் இல்லை", "5 cm உலகளாவிய தரநிலை"] },
    correct: 0,
  },
  {
    q: { en: "Which organization governs international fishing regulations?", si: "ජාත්‍යන්තර ධීවර රෙගුලාසි පාලනය කරන සංවිධානය කුමක්ද?", ta: "சர்வதேச மீன்பிடி விதிமுறைகளை நிர்வகிக்கும் அமைப்பு எது?" },
    options: { en: ["FAO (Food and Agriculture Organization)", "WHO (World Health Organization)", "WTO (World Trade Organization)", "IMO (International Maritime Organization)"], si: ["FAO (ආහාර හා කෘෂිකර්ම සංවිධානය)", "WHO (ලෝක සෞඛ්‍ය සංවිධානය)", "WTO (ලෝක වෙළඳ සංවිධානය)", "IMO (ජාත්‍යන්තර සමුද්‍ර සංවිධානය)"], ta: ["FAO (உணவு மற்றும் வேளாண்மை அமைப்பு)", "WHO (உலக சுகாதார அமைப்பு)", "WTO (உலக வர்த்தக அமைப்பு)", "IMO (சர்வதேச கடல் அமைப்பு)"] },
    correct: 0,
  },
  {
    q: { en: "What is the proper procedure when a person falls overboard?", si: "පුද්ගලයෙක් නැවෙන් වැටුණු විට නිසි ක්‍රියා පටිපාටිය කුමක්ද?", ta: "ஒரு நபர் கப்பலிலிருந்து விழும்போது சரியான நடைமுறை என்ன?" },
    options: { en: ["Shout 'Man overboard', throw flotation device, keep visual contact", "Jump in to rescue them immediately", "Continue sailing and radio for help", "Stop the engine and wait"], si: ["'මිනිසෙක් වැටුණා' කියා කෑගසන්න, පාවෙන උපකරණ විසි කරන්න, දෘශ්‍ය සම්බන්ධතාව පවත්වන්න", "වහාම ගලවා ගැනීමට පනින්න", "නැව් ධාවනය දිගටම කර උපකාර සඳහා රේඩියෝ කරන්න", "එන්ජිම නවත්වා රැඳී සිටින්න"], ta: ["'மனிதன் கப்பலிலிருந்து விழுந்தார்' என்று கத்துங்கள், மிதவை சாதனத்தை வீசுங்கள், பார்வை தொடர்பை பராமரியுங்கள்", "உடனடியாக மீட்க குதியுங்கள்", "கப்பற்பயணத்தைத் தொடர்ந்து ரேடியோ மூலம் உதவி கேளுங்கள்", "இயந்திரத்தை நிறுத்தி காத்திருங்கள்"] },
    correct: 0,
  },
  {
    q: { en: "What color flare should be used during daytime distress signaling?", si: "දිවා කාලයේ අපදා සංඥා සඳහා කුමන වර්ණ ආලෝකයක් භාවිතා කළ යුතුද?", ta: "பகல் நேர துயர சிக்னலின் போது எந்த நிற சுடர் பயன்படுத்த வேண்டும்?" },
    options: { en: ["Orange smoke flare", "Red flare", "White flare", "Green flare"], si: ["තැඹිලි දුම් ආලෝකය", "රතු ආලෝකය", "සුදු ආලෝකය", "කොළ ආලෝකය"], ta: ["ஆரஞ்சு புகை சுடர்", "சிவப்பு சுடர்", "வெள்ளை சுடர்", "பச்சை சுடர்"] },
    correct: 0,
  },
  {
    q: { en: "What is the primary function of DFAR in Sri Lanka?", si: "ශ්‍රී ලංකාවේ DFAR හි මූලික කාර්යය කුමක්ද?", ta: "இலங்கையில் DFAR இன் முதன்மை செயல்பாடு என்ன?" },
    options: { en: ["Management, regulation, and conservation of fisheries and aquatic resources", "Tourism development along coastal areas", "Maritime trade and shipping regulation", "Coastal construction and port development"], si: ["ධීවර හා ජලජ සම්පත් කළමනාකරණය, නියාමනය සහ සංරක්ෂණය", "වෙරළ ප්‍රදේශ ඔස්සේ සංචාරක සංවර්ධනය", "සමුද්‍ර වෙළඳාම සහ නාවික නියාමනය", "වෙරළ ඉදිකිරීම් සහ වරාය සංවර්ධනය"], ta: ["மீன்பிடி மற்றும் நீர்வாழ் வள மேலாண்மை, ஒழுங்குமுறை மற்றும் பாதுகாப்பு", "கடலோர பகுதிகளில் சுற்றுலா மேம்பாடு", "கடல் வர்த்தகம் மற்றும் கப்பல் ஒழுங்குமுறை", "கடலோர கட்டுமானம் மற்றும் துறைமுக மேம்பாடு"] },
    correct: 0,
  },
];

type Phase = "intro" | "quiz" | "review" | "result";

export default function AssessmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLang();
  const mod = modules.find((m) => m.id === id);
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(allQuestions.map(() => null));
  const [timeLeft, setTimeLeft] = useState(0);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());

  const totalTime = mod?.assessment.timeLimit ? mod.assessment.timeLimit * 60 : 2700;

  const startQuiz = useCallback(() => {
    setPhase("quiz");
    setTimeLeft(totalTime);
    setCurrent(0);
    setAnswers(allQuestions.map(() => null));
    setFlagged(new Set());
  }, [totalTime]);

  useEffect(() => {
    if (phase !== "quiz") return;
    if (timeLeft <= 0) { setPhase("result"); return; }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  if (!mod) {
    return (<><TopBar /><Navbar /><div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold text-primary-dark">Module Not Found</h1></div><Footer /></>);
  }

  const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
  const score = answers.filter((a, i) => a === allQuestions[i].correct).length;
  const pct = Math.round((score / allQuestions.length) * 100);
  const passed = pct >= mod.assessment.passMark;
  const answered = answers.filter((a) => a !== null).length;
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };
  const timeWarning = timeLeft < 300 && timeLeft > 0;

  const toggleFlag = (idx: number) => {
    const f = new Set(flagged);
    if (f.has(idx)) f.delete(idx); else f.add(idx);
    setFlagged(f);
  };

  // INTRO
  if (phase === "intro") {
    return (
      <><TopBar /><Navbar />
        <section className="min-h-screen bg-gray-light py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <Link href={`/modules/${id}`} className="text-primary text-sm font-medium hover:text-primary-dark mb-4 inline-block">
              <i className="fa-solid fa-arrow-left mr-2" />Back to Module
            </Link>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary-dark to-primary p-8 text-white text-center">
                <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-clipboard-check text-3xl" />
                </div>
                <h1 className="text-2xl font-bold mb-1">Module Assessment</h1>
                <p className="text-white/70">{title}</p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-light rounded-xl p-4 text-center">
                    <i className="fa-solid fa-list-ol text-primary text-xl mb-2" />
                    <div className="text-2xl font-bold text-primary-dark">{allQuestions.length}</div>
                    <div className="text-xs text-gray-mid">{t("questions")}</div>
                  </div>
                  <div className="bg-gray-light rounded-xl p-4 text-center">
                    <i className="fa-regular fa-clock text-primary text-xl mb-2" />
                    <div className="text-2xl font-bold text-primary-dark">{mod.assessment.timeLimit}</div>
                    <div className="text-xs text-gray-mid">{t("minutes")}</div>
                  </div>
                  <div className="bg-gray-light rounded-xl p-4 text-center">
                    <i className="fa-solid fa-bullseye text-green-600 text-xl mb-2" />
                    <div className="text-2xl font-bold text-green-600">{mod.assessment.passMark}%</div>
                    <div className="text-xs text-gray-mid">{t("pass_mark")}</div>
                  </div>
                  <div className="bg-gray-light rounded-xl p-4 text-center">
                    <i className="fa-solid fa-rotate text-primary text-xl mb-2" />
                    <div className="text-2xl font-bold text-primary">{mod.assessment.attemptsPerDay - mod.assessment.attemptsUsed}</div>
                    <div className="text-xs text-gray-mid">Attempts Left</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h3 className="font-bold text-primary-dark">Instructions</h3>
                  <ul className="space-y-2 text-sm text-gray-mid">
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />Each question has 4 options with only one correct answer</li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />You can navigate between questions freely using the question panel</li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />Flag questions to review later before submitting</li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />The timer starts when you begin - unanswered questions are marked wrong</li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />You need {mod.assessment.passMark}% or above to pass and earn your certificate</li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-primary mt-0.5 text-xs" />You have {mod.assessment.attemptsPerDay} attempts per day (2 remaining today)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-sm text-yellow-800">
                  <i className="fa-solid fa-triangle-exclamation mr-2" />
                  Once you start, the timer cannot be paused. Make sure you have a stable internet connection.
                </div>

                <button onClick={startQuiz} className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition text-lg">
                  <i className="fa-solid fa-play mr-2" />Start Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      <Footer /></>
    );
  }

  // RESULT
  if (phase === "result") {
    return (
      <><TopBar /><Navbar />
        <section className="min-h-screen bg-gray-light py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`p-8 text-center ${passed ? "bg-gradient-to-r from-green-600 to-emerald-500" : "bg-gradient-to-r from-red-500 to-orange-500"} text-white`}>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`text-4xl ${passed ? "fa-solid fa-trophy" : "fa-solid fa-rotate-left"}`} />
                </div>
                <h1 className="text-3xl font-extrabold mb-1">{passed ? "Congratulations!" : "Not Quite There"}</h1>
                <p className="text-white/80">{passed ? "You passed the assessment!" : `You need ${mod.assessment.passMark}% to pass. Review and try again.`}</p>
              </div>

              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-7xl font-extrabold mb-2" style={{ color: passed ? "#16a34a" : "#dc2626" }}>{pct}%</div>
                  <p className="text-gray-mid">{score} of {allQuestions.length} correct</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{score}</div>
                    <div className="text-xs text-gray-mid">Correct</div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-500">{allQuestions.length - score}</div>
                    <div className="text-xs text-gray-mid">Incorrect</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{formatTime(totalTime - timeLeft)}</div>
                    <div className="text-xs text-gray-mid">Time Taken</div>
                  </div>
                </div>

                {/* Answer review */}
                <h3 className="font-bold text-primary-dark mb-3">Answer Review</h3>
                <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2">
                  {allQuestions.map((q, i) => {
                    const isCorrect = answers[i] === q.correct;
                    const qText = q.q[lang] || q.q.en;
                    const opts = q.options[lang] || q.options.en;
                    return (
                      <div key={i} className={`rounded-lg p-4 border ${isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                        <div className="flex items-start gap-2 mb-2">
                          <i className={`mt-0.5 ${isCorrect ? "fa-solid fa-circle-check text-green-600" : "fa-solid fa-circle-xmark text-red-500"}`} />
                          <p className="text-sm font-medium text-primary-dark">Q{i + 1}. {qText}</p>
                        </div>
                        <div className="ml-6 text-xs space-y-1">
                          {answers[i] !== null && answers[i] !== q.correct && (
                            <p className="text-red-600">Your answer: {opts[answers[i]!]}</p>
                          )}
                          <p className="text-green-700 font-medium">Correct: {opts[q.correct]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {passed ? (
                    <>
                      <Link href={`/certificate/${id}`} className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl text-center hover:bg-green-700 transition">
                        <i className="fa-solid fa-certificate mr-2" />View Certificate
                      </Link>
                      <Link href="/dashboard" className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-xl text-center hover:bg-primary hover:text-white transition">
                        Go to Dashboard
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link href={`/modules/${id}`} className="flex-1 bg-primary text-white font-semibold py-3 rounded-xl text-center hover:bg-primary-dark transition">
                        <i className="fa-solid fa-book-open mr-2" />Review Material
                      </Link>
                      <button onClick={startQuiz} className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-white transition">
                        <i className="fa-solid fa-rotate-left mr-2" />Retry Assessment
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer /></>
    );
  }

  // REVIEW before submit
  if (phase === "review") {
    return (
      <><TopBar /><Navbar />
        <section className="min-h-screen bg-gray-light py-10 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <i className="fa-solid fa-clipboard-list text-4xl text-primary mb-3" />
                <h2 className="text-2xl font-bold text-primary-dark">Review Your Answers</h2>
                <p className="text-gray-mid text-sm mt-1">Time remaining: <span className={`font-bold ${timeWarning ? "text-red-500" : "text-primary"}`}>{formatTime(timeLeft)}</span></p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-green-600">{answered}</div>
                  <div className="text-xs text-gray-mid">Answered</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-red-500">{allQuestions.length - answered}</div>
                  <div className="text-xs text-gray-mid">Unanswered</div>
                </div>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 mb-6">
                {allQuestions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setPhase("quiz"); }}
                    className={`h-10 rounded-lg text-xs font-bold transition ${
                      answers[i] !== null
                        ? flagged.has(i) ? "bg-yellow-400 text-primary-dark" : "bg-green-500 text-white"
                        : "bg-red-100 text-red-600 border border-red-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-mid mb-6 justify-center">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-green-500 rounded" />Answered</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-red-100 border border-red-200 rounded" />Unanswered</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-yellow-400 rounded" />Flagged</span>
              </div>

              {answered < allQuestions.length && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4 text-sm text-yellow-800 text-center">
                  <i className="fa-solid fa-triangle-exclamation mr-1" />
                  You have {allQuestions.length - answered} unanswered questions. They will be marked as incorrect.
                </div>
              )}

              <div className="flex gap-3">
                <button onClick={() => setPhase("quiz")} className="flex-1 border-2 border-primary text-primary font-semibold py-3 rounded-xl hover:bg-primary/5 transition">
                  <i className="fa-solid fa-arrow-left mr-2" />Back to Questions
                </button>
                <button onClick={() => setPhase("result")} className="flex-1 bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition">
                  <i className="fa-solid fa-check mr-2" />Submit Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      <Footer /></>
    );
  }

  // QUIZ
  const question = allQuestions[current];
  const qText = question.q[lang] || question.q.en;
  const opts = question.options[lang] || question.options.en;

  return (
    <>
      <TopBar /><Navbar />
      <section className="min-h-screen bg-gray-light py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top bar */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h2 className="font-bold text-primary-dark text-sm hidden sm:block">{title}</h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                Q {current + 1} / {allQuestions.length}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 sm:w-48 bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary rounded-full h-2.5 transition-all" style={{ width: `${(answered / allQuestions.length) * 100}%` }} />
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold text-sm ${timeWarning ? "bg-red-100 text-red-600 animate-pulse" : "bg-gray-100 text-primary-dark"}`}>
                <i className="fa-regular fa-clock" />
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Question */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-primary font-semibold">Question {current + 1}</span>
                  <button
                    onClick={() => toggleFlag(current)}
                    className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition ${flagged.has(current) ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                  >
                    <i className={`fa-${flagged.has(current) ? "solid" : "regular"} fa-flag`} />
                    {flagged.has(current) ? "Flagged" : "Flag"}
                  </button>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-primary-dark mb-8">{qText}</h2>

                <div className="space-y-3 mb-8">
                  {opts.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => { const a = [...answers]; a[current] = idx; setAnswers(a); }}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition flex items-center gap-4 ${
                        answers[current] === idx
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition ${
                        answers[current] === idx ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className={`text-sm sm:text-base ${answers[current] === idx ? "text-primary-dark font-semibold" : "text-gray-700"}`}>
                        {opt}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setCurrent(Math.max(0, current - 1))}
                    disabled={current === 0}
                    className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-30 transition"
                  >
                    <i className="fa-solid fa-chevron-left mr-2" />Previous
                  </button>

                  {current === allQuestions.length - 1 ? (
                    <button
                      onClick={() => setPhase("review")}
                      className="px-8 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
                    >
                      Review & Submit <i className="fa-solid fa-check ml-2" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrent(current + 1)}
                      className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition"
                    >
                      Next <i className="fa-solid fa-chevron-right ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Question navigation panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-20">
                <h3 className="font-bold text-primary-dark text-sm mb-3">Question Navigator</h3>
                <div className="grid grid-cols-5 gap-2 mb-4">
                  {allQuestions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-9 rounded-lg text-xs font-bold transition ${
                        i === current
                          ? "bg-primary text-white ring-2 ring-primary/30"
                          : answers[i] !== null
                            ? flagged.has(i) ? "bg-yellow-400 text-primary-dark" : "bg-green-500 text-white"
                            : flagged.has(i) ? "bg-yellow-100 text-yellow-700 border border-yellow-300" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <div className="space-y-2 text-xs text-gray-mid border-t pt-3">
                  <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded shrink-0" />Answered ({answered})</div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-100 border rounded shrink-0" />Not answered ({allQuestions.length - answered})</div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded shrink-0" />Flagged ({flagged.size})</div>
                  <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary rounded shrink-0" />Current</div>
                </div>

                <button
                  onClick={() => setPhase("review")}
                  className="w-full mt-4 bg-green-600 text-white font-semibold py-2.5 rounded-xl hover:bg-green-700 transition text-sm"
                >
                  Review & Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
