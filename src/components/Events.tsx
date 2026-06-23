"use client";
import { useLang } from "@/lib/LangContext";

const events = [
  {
    month: { en: "Jul", si: "ජූලි", ta: "ஜூலை" },
    year: "2026",
    title: { en: "Fisheries Safety Training Workshop", si: "ධීවර ආරක්ෂා පුහුණු වැඩමුළුව", ta: "மீன்பிடி பாதுகாப்பு பயிற்சி பட்டறை" },
    time: "9:00 AM - 4:00 PM",
    location: { en: "DFAR Head Office, Colombo 10", si: "DFAR ප්‍රධාන කාර්යාලය, කොළඹ 10", ta: "DFAR தலைமை அலுவலகம், கொழும்பு 10" },
    desc: { en: "Comprehensive hands-on workshop covering maritime safety protocols, emergency procedures, and first aid for fishermen.", si: "ධීවරයන් සඳහා සමුද්‍ර ආරක්ෂා ප්‍රොටෝකෝල, හදිසි ක්‍රියා පටිපාටි සහ ප්‍රථමාධාර ආවරණය කරන සම්පූර්ණ වැඩමුළුව.", ta: "மீனவர்களுக்கான கடல் பாதுகாப்பு நெறிமுறைகள், அவசர நடைமுறைகள் மற்றும் முதலுதவி பற்றிய விரிவான பட்டறை." },
    available: 126,
  },
  {
    month: { en: "Aug", si: "අගෝ", ta: "ஆக" },
    year: "2026",
    title: { en: "Sustainable Aquaculture Conference", si: "තිරසාර ජලජ ගොවිතැන සමුළුව", ta: "நிலையான நீர்வாழ் வளர்ப்பு மாநாடு" },
    time: "10:00 AM - 3:00 PM",
    location: { en: "Negombo Fisheries Centre", si: "මීගමුව ධීවර මධ්‍යස්ථානය", ta: "நீர்கொழும்பு மீன்பிடி மையம்" },
    desc: { en: "Annual conference bringing together experts, officers, and stakeholders to discuss sustainable fishing methods.", si: "තිරසාර ධීවර ක්‍රම සාකච්ඡා කිරීමට විශේෂඥයින්, නිලධාරීන් සහ පාර්ශවකරුවන් එක්රැස් කරන වාර්ෂික සමුළුව.", ta: "நிலையான மீன்பிடி முறைகளைப் பற்றி விவாதிக்க நிபுணர்களையும் அதிகாரிகளையும் ஒன்றிணைக்கும் வருடாந்திர மாநாடு." },
    available: 58,
  },
  {
    month: { en: "Sep", si: "සැප්", ta: "செப்" },
    year: "2026",
    title: { en: "Boat Licensing Examination", si: "බෝට්ටු බලපත්‍ර පරීක්ෂණය", ta: "படகு உரிமத் தேர்வு" },
    time: "8:00 AM - 12:00 PM",
    location: { en: "Multiple Districts", si: "බහු දිස්ත්‍රික්ක", ta: "பல மாவட்டங்கள்" },
    desc: { en: "Nationwide licensing examination for boat operators. Candidates must complete all prerequisite learning modules.", si: "බෝට්ටු ක්‍රියාකරුවන් සඳහා දිවයින පුරා බලපත්‍ර පරීක්ෂණය. අපේක්ෂකයින් සියලු පූර්ව අවශ්‍ය මොඩියුල සම්පූර්ණ කළ යුතුය.", ta: "படகு இயக்குநர்களுக்கான நாடு தழுவிய உரிமத் தேர்வு. விண்ணப்பதாரர்கள் அனைத்து முன்நிபந்தனை தொகுதிகளையும் முடிக்க வேண்டும்." },
    available: 256,
  },
];

export default function Events() {
  const { lang, t } = useLang();

  return (
    <section className="py-16 bg-gray-light" id="events">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            {t("upcoming_events")}
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            {t("upcoming_events_desc")}
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.title.en} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition">
              <div className="bg-primary text-white rounded-xl px-6 py-4 text-center min-w-[100px] shrink-0">
                <div className="text-2xl font-bold">{event.month[lang] || event.month.en}</div>
                <div className="text-sm text-white/75">{event.year}</div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  <a href="#" className="hover:text-primary transition">{event.title[lang] || event.title.en}</a>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-mid mb-3">
                  <span><i className="fa-regular fa-clock mr-1" />{event.time}</span>
                  <span><i className="fa-solid fa-location-dot mr-1" />{event.location[lang] || event.location.en}</span>
                </div>
                <p className="text-sm text-gray-mid">{event.desc[lang] || event.desc.en}</p>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <a href="#" className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-primary-dark transition">
                  {t("book_now")}
                </a>
                <span className="text-xs text-primary font-medium">{event.available} {t("seats_available")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition">
            {t("view_all_events")} <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
