"use client";
import { useLang } from "@/lib/LangContext";

const news = [
  {
    title: { en: "New Maritime Safety Module Launched for Deep Sea Fishermen", si: "ගැඹුරු මුහුදු ධීවරයන් සඳහා නව සමුද්‍ර ආරක්ෂා මොඩියුලය දියත් කරන ලදී", ta: "ஆழ்கடல் மீனவர்களுக்கான புதிய கடல் பாதுகாப்பு தொகுதி அறிமுகம்" },
    date: "18 Jun, 2026",
    category: { en: "Training", si: "පුහුණුව", ta: "பயிற்சி" },
    tag: { en: "Safety", si: "ආරක්ෂාව", ta: "பாதுகாப்பு" },
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
    desc: { en: "DFAR launches comprehensive safety training covering emergency protocols and weather awareness for deep sea fishing operations.", si: "ගැඹුරු මුහුදු ධීවර කටයුතු සඳහා හදිසි ප්‍රොටෝකෝල සහ කාලගුණ දැනුවත්භාවය ආවරණය කරන සම්පූර්ණ ආරක්ෂා පුහුණුව DFAR දියත් කරයි.", ta: "ஆழ்கடல் மீன்பிடி நடவடிக்கைகளுக்கான அவசர நெறிமுறைகள் மற்றும் வானிலை விழிப்புணர்வை உள்ளடக்கிய விரிவான பாதுகாப்பு பயிற்சியை DFAR அறிமுகப்படுத்துகிறது." },
  },
  {
    title: { en: "Digital Licensing System Now Integrated with E-LMS Platform", si: "ඩිජිටල් බලපත්‍ර පද්ධතිය දැන් E-LMS වේදිකාව සමඟ ඒකාබද්ධ කර ඇත", ta: "டிஜிட்டல் உரிம அமைப்பு இப்போது E-LMS தளத்துடன் ஒருங்கிணைக்கப்பட்டுள்ளது" },
    date: "12 Jun, 2026",
    category: { en: "Technology", si: "තාක්ෂණය", ta: "தொழில்நுட்பம்" },
    tag: { en: "Licensing", si: "බලපත්‍ර", ta: "உரிமம்" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    desc: { en: "Boat owners can now complete required modules and apply for licenses directly through the integrated E-Learning platform.", si: "බෝට්ටු හිමිකරුවන්ට දැන් ඒකාබද්ධ E-Learning වේදිකාව හරහා අවශ්‍ය මොඩියුල සම්පූර්ණ කර බලපත්‍ර සඳහා සෘජුව ඉල්ලුම් කළ හැකිය.", ta: "படகு உரிமையாளர்கள் இப்போது ஒருங்கிணைக்கப்பட்ட E-Learning தளம் வழியாக தேவையான தொகுதிகளை முடித்து உரிமங்களுக்கு நேரடியாக விண்ணப்பிக்கலாம்." },
  },
  {
    title: { en: "Trilingual Support Extended to All Assessment Modules", si: "ත්‍රිභාෂා සහාය සියලු ඇගයීම් මොඩියුල වෙත දීර්ඝ කර ඇත", ta: "மும்மொழி ஆதரவு அனைத்து மதிப்பீட்டு தொகுதிகளுக்கும் நீட்டிக்கப்பட்டது" },
    date: "05 Jun, 2026",
    category: { en: "Update", si: "යාවත්කාලීනය", ta: "புதுப்பிப்பு" },
    tag: { en: "Languages", si: "භාෂා", ta: "மொழிகள்" },
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
    desc: { en: "All MCQ assessments are now available in Sinhala, Tamil, and English, ensuring accessibility for all registered users.", si: "සියලුම MCQ ඇගයීම් දැන් සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් ලබා ගත හැකි අතර, සියලුම ලියාපදිංචි පරිශීලකයන්ට ප්‍රවේශ්‍යතාව සහතික කරයි.", ta: "அனைத்து MCQ மதிப்பீடுகளும் இப்போது சிங்களம், தமிழ் மற்றும் ஆங்கிலத்தில் கிடைக்கின்றன, பதிவு செய்யப்பட்ட அனைத்து பயனர்களுக்கும் அணுகலை உறுதி செய்கிறது." },
  },
];

export default function LatestNews() {
  const { lang, t } = useLang();
  return (
    <section className="py-16 bg-gray-light" id="news">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            {t("latest_news")}
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            {t("latest_news_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {news.map((item) => (
            <div key={item.title.en} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title[lang] || item.title.en} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="text-gray-mid"><i className="fa-regular fa-calendar mr-1" />{item.date}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded">{item.category[lang] || item.category.en}</span>
                  <span className="text-xs font-semibold bg-accent/20 text-primary-dark px-2.5 py-1 rounded">{item.tag[lang] || item.tag.en}</span>
                </div>
                <h3 className="font-bold text-primary-dark text-base mb-2 leading-snug">
                  <a href="#" className="hover:text-primary transition">{item.title[lang] || item.title.en}</a>
                </h3>
                <p className="text-sm text-gray-mid mb-4 line-clamp-2">{item.desc[lang] || item.desc.en}</p>
                <a href="#" className="text-primary text-sm font-semibold hover:text-primary-dark transition flex items-center gap-1">
                  {t("read_more")} <i className="fa-solid fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
