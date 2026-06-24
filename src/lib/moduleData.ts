export type Module = {
  id: string;
  title: string;
  titleSi: string;
  titleTa: string;
  category: string;
  tag: string;
  duration: string;
  enrolled: string;
  moduleCount: number;
  image: string;
  badge: string | null;
  description: string;
  descSi: string;
  descTa: string;
  lessons: Lesson[];
  assessment: Assessment;
  instructor: string;
  progress: number;
};

export type Lesson = {
  id: string;
  title: string;
  titleSi: string;
  titleTa: string;
  type: "video" | "presentation" | "reading" | "quiz";
  duration: string;
  videoUrl?: string;
  completed: boolean;
};

export type Assessment = {
  questions: number;
  timeLimit: number;
  passMark: number;
  attemptsPerDay: number;
  attemptsUsed: number;
};

export const modules: Module[] = [
  {
    id: "maritime-safety",
    title: "Maritime Safety & Sea Navigation",
    titleSi: "සමුද්‍ර ආරක්ෂාව සහ මුහුදු නැවිගේෂන්",
    titleTa: "கடல் பாதுகாப்பு & கடல் வழிசெலுத்தல்",
    category: "Safety",
    tag: "Compulsory",
    duration: "04:30:00",
    enrolled: "2.1k",
    moduleCount: 12,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    badge: "Popular",
    description: "Comprehensive training on maritime safety protocols, emergency procedures, navigation techniques, and weather awareness for all sea-going fishermen.",
    descSi: "සියලුම මුහුදු ධීවරයන් සඳහා සමුද්‍ර ආරක්ෂා ප්‍රොටෝකෝල, හදිසි ක්‍රියා පටිපාටි, නැවිගේෂන් ශිල්පීය ක්‍රම සහ කාලගුණ දැනුවත්භාවය පිළිබඳ සම්පූර්ණ පුහුණුව.",
    descTa: "அனைத்து கடல் மீனவர்களுக்கும் கடல் பாதுகாப்பு நெறிமுறைகள், அவசர நடைமுறைகள், வழிசெலுத்தல் நுட்பங்கள் மற்றும் வானிலை விழிப்புணர்வு பற்றிய விரிவான பயிற்சி.",
    instructor: "Mr. Ranjith Bandara",
    progress: 65,
    lessons: [
      { id: "l1", title: "Introduction to Maritime Safety", titleSi: "සමුද්‍ර ආරක්ෂාව හැඳින්වීම", titleTa: "கடல் பாதுகாப்பு அறிமுகம்", type: "video", duration: "25:00", videoUrl: "https://www.youtube.com/embed/x1kzaDlXad8", completed: true },
      { id: "l2", title: "Safety Equipment & Life Jackets", titleSi: "ආරක්ෂක උපකරණ සහ ජීවිත කබා", titleTa: "பாதுகாப்பு உபகரணங்கள் & உயிர் காப்பு ஜாக்கெட்கள்", type: "video", duration: "30:00", videoUrl: "https://www.youtube.com/embed/3_FweaRGUYo", completed: true },
      { id: "l3", title: "Emergency Procedures at Sea", titleSi: "මුහුදේ හදිසි ක්‍රියා පටිපාටි", titleTa: "கடலில் அவசர நடைமுறைகள்", type: "video", duration: "35:00", videoUrl: "https://www.youtube.com/embed/IJNR2EpS0jw", completed: true },
      { id: "l4", title: "Weather Awareness for Fishermen", titleSi: "ධීවරයන් සඳහා කාලගුණ දැනුවත්භාවය", titleTa: "மீனவர்களுக்கான வானிலை விழிப்புணர்வு", type: "presentation", duration: "20:00", completed: true },
      { id: "l5", title: "Navigation Charts & Compass Reading", titleSi: "නැවිගේෂන් සිතියම් සහ මාලිමා කියවීම", titleTa: "வழிசெலுத்தல் வரைபடங்கள் & திசைகாட்டி வாசிப்பு", type: "reading", duration: "15:00", completed: true },
      { id: "l6", title: "Knowledge Check - Part 1", titleSi: "දැනුම පරීක්ෂාව - 1 කොටස", titleTa: "அறிவுச் சோதனை - பகுதி 1", type: "quiz", duration: "10:00", completed: true },
      { id: "l7", title: "Communication at Sea - VHF Radio", titleSi: "මුහුදේ සන්නිවේදනය - VHF රේඩියෝ", titleTa: "கடலில் தொடர்பு - VHF ரேடியோ", type: "video", duration: "28:00", videoUrl: "https://www.youtube.com/embed/ov1ajVgJgbk", completed: true },
      { id: "l8", title: "First Aid at Sea", titleSi: "මුහුදේ ප්‍රථමාධාර", titleTa: "கடலில் முதலுதவி", type: "video", duration: "32:00", videoUrl: "https://www.youtube.com/embed/EA2MVpcbfcQ", completed: false },
      { id: "l9", title: "Night Navigation Safety", titleSi: "රාත්‍රී නැවිගේෂන් ආරක්ෂාව", titleTa: "இரவு வழிசெலுத்தல் பாதுகாப்பு", type: "presentation", duration: "18:00", completed: false },
      { id: "l10", title: "Monsoon Season Precautions", titleSi: "මෝසම් සමය ආරක්ෂක පියවර", titleTa: "பருவமழை காலத் தடுப்பு நடவடிக்கைகள்", type: "reading", duration: "12:00", completed: false },
      { id: "l11", title: "Rescue Operations & Coordination", titleSi: "ගලවා ගැනීමේ මෙහෙයුම් සහ සම්බන්ධීකරණය", titleTa: "மீட்பு நடவடிக்கைகள் & ஒருங்கிணைப்பு", type: "video", duration: "30:00", videoUrl: "https://www.youtube.com/embed/wMGFEp2QERM", completed: false },
      { id: "l12", title: "Knowledge Check - Final", titleSi: "දැනුම පරීක්ෂාව - අවසාන", titleTa: "அறிவுச் சோதனை - இறுதி", type: "quiz", duration: "15:00", completed: false },
    ],
    assessment: { questions: 30, timeLimit: 45, passMark: 70, attemptsPerDay: 2, attemptsUsed: 0 },
  },
  {
    id: "sustainable-fishing",
    title: "Sustainable Fishing Practices",
    titleSi: "තිරසාර ධීවර පිළිවෙත්",
    titleTa: "நிலையான மீன்பிடி நடைமுறைகள்",
    category: "Aquaculture",
    tag: "Recommended",
    duration: "03:15:00",
    enrolled: "1.8k",
    moduleCount: 8,
    image: "https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=800&q=80",
    badge: "New",
    description: "Learn sustainable fishing techniques, conservation methods, and responsible practices to protect marine ecosystems and ensure long-term fisheries viability.",
    descSi: "සමුද්‍ර පරිසර පද්ධති ආරක්ෂා කිරීමට තිරසාර ධීවර ශිල්පීය ක්‍රම, සංරක්ෂණ ක්‍රම සහ වගකීම්සහගත පිළිවෙත් ඉගෙන ගන්න.",
    descTa: "கடல் சூழல் அமைப்புகளைப் பாதுகாக்க நிலையான மீன்பிடி நுட்பங்கள், பாதுகாப்பு முறைகள் மற்றும் பொறுப்பான நடைமுறைகளைக் கற்றுக்கொள்ளுங்கள்.",
    instructor: "Prof. Nimal Fernando",
    progress: 25,
    lessons: [
      { id: "l1", title: "Why Sustainable Fishing Matters", titleSi: "තිරසාර ධීවරය වැදගත් වන්නේ ඇයි?", titleTa: "நிலையான மீன்பிடி ஏன் முக்கியம்", type: "video", duration: "22:00", videoUrl: "https://www.youtube.com/embed/uE_Q2gaMxmI", completed: true },
      { id: "l2", title: "Fishing Gear & Methods", titleSi: "ධීවර උපකරණ සහ ක්‍රම", titleTa: "மீன்பிடி கருவிகள் & முறைகள்", type: "video", duration: "28:00", videoUrl: "https://www.youtube.com/embed/5zobQvhBAr4", completed: true },
      { id: "l3", title: "Marine Ecosystem Awareness", titleSi: "සමුද්‍ර පරිසර පද්ධති දැනුවත්භාවය", titleTa: "கடல் சூழல் அமைப்பு விழிப்புணர்வு", type: "presentation", duration: "25:00", completed: false },
      { id: "l4", title: "Catch Limits & Regulations", titleSi: "ධීවර සීමාවන් සහ රෙගුලාසි", titleTa: "பிடிப்பு வரம்புகள் & விதிமுறைகள்", type: "reading", duration: "18:00", completed: false },
      { id: "l5", title: "Bycatch Reduction Techniques", titleSi: "අතුරු ධීවර අවම කිරීමේ ක්‍රම", titleTa: "இணைப்பிடிப்பு குறைப்பு நுட்பங்கள்", type: "video", duration: "24:00", videoUrl: "https://www.youtube.com/embed/V0UtZkCqbF4", completed: false },
      { id: "l6", title: "Seasonal Fishing Calendar", titleSi: "සෘතුමය ධීවර දින දර්ශනය", titleTa: "பருவகால மீன்பிடி நாட்காட்டி", type: "presentation", duration: "15:00", completed: false },
      { id: "l7", title: "Community-Based Conservation", titleSi: "ප්‍රජා පාදක සංරක්ෂණය", titleTa: "சமூக அடிப்படையிலான பாதுகாப்பு", type: "reading", duration: "20:00", completed: false },
      { id: "l8", title: "Knowledge Check", titleSi: "දැනුම පරීක්ෂාව", titleTa: "அறிவுச் சோதனை", type: "quiz", duration: "10:00", completed: false },
    ],
    assessment: { questions: 20, timeLimit: 30, passMark: 65, attemptsPerDay: 2, attemptsUsed: 1 },
  },
  {
    id: "boat-license",
    title: "Boat License Certification",
    titleSi: "බෝට්ටු බලපත්‍ර සහතික කිරීම",
    titleTa: "படகு உரிமச் சான்றிதழ்",
    category: "Licensing",
    tag: "Compulsory",
    duration: "06:45:00",
    enrolled: "4.6k",
    moduleCount: 15,
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80",
    badge: "Essential",
    description: "Complete certification course required for obtaining and renewing boat operation licenses. Covers regulations, safety requirements, and practical knowledge.",
    descSi: "බෝට්ටු මෙහෙයුම් බලපත්‍ර ලබා ගැනීමට හා අලුත් කිරීමට අවශ්‍ය සම්පූර්ණ සහතික පාඨමාලාව.",
    descTa: "படகு இயக்க உரிமங்களைப் பெறுவதற்கும் புதுப்பிப்பதற்கும் தேவையான முழுமையான சான்றிதழ் பாடநெறி.",
    instructor: "Dr. Kumara Perera",
    progress: 0,
    lessons: [
      { id: "l1", title: "Licensing Requirements Overview", titleSi: "බලපත්‍ර අවශ්‍යතා දළ විසුරුම", titleTa: "உரிமத் தேவைகள் மேலோட்டம்", type: "video", duration: "20:00", videoUrl: "https://www.youtube.com/embed/bL3SfkMRMQI", completed: false },
      { id: "l2", title: "Types of Fishing Licenses", titleSi: "ධීවර බලපත්‍ර වර්ග", titleTa: "மீன்பிடி உரிம வகைகள்", type: "presentation", duration: "25:00", completed: false },
      { id: "l3", title: "Boat Registration Process", titleSi: "බෝට්ටු ලියාපදිංචි ක්‍රියාවලිය", titleTa: "படகு பதிவு செயல்முறை", type: "reading", duration: "15:00", completed: false },
    ],
    assessment: { questions: 40, timeLimit: 60, passMark: 75, attemptsPerDay: 2, attemptsUsed: 0 },
  },
  {
    id: "fish-processing",
    title: "Fish Processing & Export Standards",
    titleSi: "මත්ස්‍ය සැකසුම සහ අපනයන ප්‍රමිති",
    titleTa: "மீன் பதப்படுத்தல் & ஏற்றுமதி தரநிலைகள்",
    category: "Processing",
    tag: "Advanced",
    duration: "05:20:00",
    enrolled: "980",
    moduleCount: 10,
    image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=800&q=80",
    badge: null,
    description: "Advanced course on fish processing techniques, quality control, food safety standards, and export compliance for the Sri Lankan fisheries industry.",
    descSi: "ශ්‍රී ලංකා ධීවර කර්මාන්තය සඳහා මත්ස්‍ය සැකසුම් ශිල්පීය ක්‍රම, ගුණාත්මක පාලනය සහ ආහාර ආරක්ෂණ ප්‍රමිති පිළිබඳ උසස් පාඨමාලාව.",
    descTa: "இலங்கை மீன்பிடி தொழிலுக்கான மீன் பதப்படுத்தல் நுட்பங்கள், தரக் கட்டுப்பாடு மற்றும் உணவு பாதுகாப்பு தரநிலைகள் பற்றிய மேம்பட்ட பாடநெறி.",
    instructor: "Mrs. Chamari Silva",
    progress: 100,
    lessons: [
      { id: "l1", title: "Introduction to Fish Processing", titleSi: "මත්ස්‍ය සැකසුම හැඳින්වීම", titleTa: "மீன் பதப்படுத்தல் அறிமுகம்", type: "video", duration: "22:00", videoUrl: "https://www.youtube.com/embed/M9GSkHKVdWE", completed: true },
    ],
    assessment: { questions: 25, timeLimit: 40, passMark: 70, attemptsPerDay: 2, attemptsUsed: 2 },
  },
  {
    id: "aquatic-conservation",
    title: "Aquatic Resource Conservation",
    titleSi: "ජලජ සම්පත් සංරක්ෂණය",
    titleTa: "நீர்வாழ் வள பாதுகாப்பு",
    category: "Conservation",
    tag: "Recommended",
    duration: "04:00:00",
    enrolled: "1.5k",
    moduleCount: 9,
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
    badge: null,
    description: "Learn about Sri Lanka's aquatic ecosystems, conservation strategies, and the role of fisheries in sustainable resource management.",
    descSi: "ශ්‍රී ලංකාවේ ජලජ පරිසර පද්ධති, සංරක්ෂණ උපාය මාර්ග සහ තිරසාර සම්පත් කළමනාකරණයේ ධීවර භූමිකාව ගැන ඉගෙන ගන්න.",
    descTa: "இலங்கையின் நீர்வாழ் சூழல் அமைப்புகள், பாதுகாப்பு உத்திகள் மற்றும் நிலையான வள மேலாண்மையில் மீன்பிடியின் பங்கு பற்றி அறிக.",
    instructor: "Prof. Nimal Fernando",
    progress: 40,
    lessons: [
      { id: "l1", title: "Sri Lanka's Marine Biodiversity", titleSi: "ශ්‍රී ලංකාවේ සමුද්‍ර ජෛව විවිධත්වය", titleTa: "இலங்கையின் கடல் உயிர்ப்பன்மை", type: "video", duration: "30:00", videoUrl: "https://www.youtube.com/embed/GlLxMqVrEYs", completed: true },
      { id: "l2", title: "Coral Reef Protection", titleSi: "කොරල්පර ආරක්ෂණය", titleTa: "பவளப்பாறை பாதுகாப்பு", type: "video", duration: "25:00", videoUrl: "https://www.youtube.com/embed/aGGBGWqNSrk", completed: true },
      { id: "l3", title: "Mangrove Ecosystems", titleSi: "කඩොලාන පරිසර පද්ධති", titleTa: "சதுப்புநிலக் காடு சூழல் அமைப்புகள்", type: "presentation", duration: "20:00", completed: false },
    ],
    assessment: { questions: 20, timeLimit: 30, passMark: 65, attemptsPerDay: 2, attemptsUsed: 0 },
  },
  {
    id: "weather-safety",
    title: "Weather & Ocean Safety Awareness",
    titleSi: "කාලගුණ සහ සාගර ආරක්ෂා දැනුවත්භාවය",
    titleTa: "வானிலை & கடல் பாதுகாப்பு விழிப்புணர்வு",
    category: "Safety",
    tag: "Compulsory",
    duration: "02:45:00",
    enrolled: "3.2k",
    moduleCount: 6,
    image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=800&q=80",
    badge: "Updated",
    description: "Essential weather reading skills, monsoon awareness, and ocean current understanding for safe fishing operations.",
    descSi: "ආරක්ෂිත ධීවර කටයුතු සඳහා අත්‍යවශ්‍ය කාලගුණ කියවීමේ කුසලතා, මෝසම් දැනුවත්භාවය සහ සාගර ධාරා අවබෝධය.",
    descTa: "பாதுகாப்பான மீன்பிடி நடவடிக்கைகளுக்கான அத்தியாவசிய வானிலை வாசிப்பு திறன்கள் மற்றும் கடல் நீரோட்ட புரிதல்.",
    instructor: "Mr. Ranjith Bandara",
    progress: 80,
    lessons: [
      { id: "l1", title: "Understanding Weather Patterns", titleSi: "කාලගුණ රටා අවබෝධ කර ගැනීම", titleTa: "வானிலை அமைப்புகளைப் புரிந்துகொள்ளுதல்", type: "video", duration: "28:00", videoUrl: "https://www.youtube.com/embed/dwXhgjTaNis", completed: true },
      { id: "l2", title: "Monsoon Seasons in Sri Lanka", titleSi: "ශ්‍රී ලංකාවේ මෝසම් සෘතු", titleTa: "இலங்கையின் பருவமழை காலங்கள்", type: "presentation", duration: "20:00", completed: true },
    ],
    assessment: { questions: 15, timeLimit: 25, passMark: 70, attemptsPerDay: 2, attemptsUsed: 0 },
  },
];
