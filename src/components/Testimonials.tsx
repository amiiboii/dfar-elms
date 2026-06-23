"use client";
import { useLang } from "@/lib/LangContext";

const testimonials = [
  {
    name: "Samantha Jayawardena",
    role: { en: "Fisheries Officer, Galle District", si: "ධීවර නිලධාරී, ගාල්ල දිස්ත්‍රික්කය", ta: "மீன்பிடி அதிகாரி, காலி மாவட்டம்" },
    text: { en: "The E-LMS has transformed how we conduct training across districts. Officers can now complete modules at their own pace without traveling to Colombo.", si: "E-LMS මගින් අපි දිස්ත්‍රික් පුරා පුහුණුව සිදු කරන ආකාරය වෙනස් කර ඇත. නිලධාරීන්ට දැන් කොළඹට නොගොස් තමන්ගේ වේගයෙන් මොඩියුල සම්පූර්ණ කළ හැකිය.", ta: "E-LMS மாவட்டங்கள் முழுவதும் பயிற்சி நடத்தும் விதத்தை மாற்றியுள்ளது. அதிகாரிகள் இப்போது கொழும்புக்கு பயணிக்காமல் தங்கள் சொந்த வேகத்தில் தொகுதிகளை முடிக்கலாம்." },
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Mahinda Rathnayake",
    role: { en: "Boat Owner, Negombo", si: "බෝට්ටු හිමිකරු, මීගමුව", ta: "படகு உரிமையாளர், நீர்கொழும்பு" },
    text: { en: "Getting my boat license was so much easier with the online modules. I could study in Sinhala and take the assessment when I was ready.", si: "මාර්ගගත මොඩියුල සමඟ මගේ බෝට්ටු බලපත්‍රය ලබා ගැනීම ඉතා පහසු විය. මට සිංහලෙන් අධ්‍යයනය කර සූදානම් වූ විට ඇගයීමට සහභාගී විය හැකි විය.", ta: "ஆன்லைன் தொகுதிகளுடன் எனது படகு உரிமம் பெறுவது மிகவும் எளிதாக இருந்தது. சிங்களத்தில் படித்து தயாராகும்போது மதிப்பீடு எடுக்க முடிந்தது." },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Thilini Perera",
    role: { en: "Training Coordinator, DFAR", si: "පුහුණු සම්බන්ධීකාරක, DFAR", ta: "பயிற்சி ஒருங்கிணைப்பாளர், DFAR" },
    text: { en: "Managing 150+ modules and tracking completion across 10,000 users is seamless. The analytics dashboard gives us real-time insights into training progress.", si: "මොඩියුල 150කට වඩා කළමනාකරණය කිරීම සහ පරිශීලකයන් 10,000 පුරා සම්පූර්ණ කිරීම ලුහුබැඳීම බාධාවකින් තොරය. විශ්ලේෂණ උපකරණ පුවරුව අපට පුහුණු ප්‍රගතිය පිළිබඳ තත්‍ය කාලීන තීක්ෂ්ණ බුද්ධිය ලබා දෙයි.", ta: "150+ தொகுதிகளை நிர்வகிப்பதும் 10,000 பயனர்களின் நிறைவைக் கண்காணிப்பதும் தடையின்றி நடக்கிறது. பகுப்பாய்வு டாஷ்போர்டு பயிற்சி முன்னேற்றத்தைப் பற்றிய நிகழ்நேர நுண்ணறிவுகளை எங்களுக்கு வழங்குகிறது." },
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

export default function Testimonials() {
  const { lang, t } = useLang();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            {t("what_users_say")}
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            {t("what_users_say_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-gray-light rounded-xl p-7 relative">
              <div className="text-primary/20 text-6xl absolute top-4 right-6 font-serif">&ldquo;</div>
              <p className="text-gray-mid text-sm leading-relaxed mb-6 relative z-10">{item.text[lang] || item.text.en}</p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-primary-dark text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-mid">{item.role[lang] || item.role.en}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3 text-accent text-sm">
                {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
