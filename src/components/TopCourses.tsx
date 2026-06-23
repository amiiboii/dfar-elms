import Link from "next/link";

const courses = [
  { id: "maritime-safety", title: "Maritime Safety & Sea Navigation", category: "Safety", tag: "Compulsory", duration: "04:30:00", enrolled: "2.1k", modules: 12, image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80", badge: "Popular" },
  { id: "sustainable-fishing", title: "Sustainable Fishing Practices", category: "Aquaculture", tag: "Recommended", duration: "03:15:00", enrolled: "1.8k", modules: 8, image: "https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=400&q=80", badge: "New" },
  { id: "boat-license", title: "Boat License Certification", category: "Licensing", tag: "Compulsory", duration: "06:45:00", enrolled: "4.6k", modules: 15, image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80", badge: "Essential" },
  { id: "fish-processing", title: "Fish Processing & Export Standards", category: "Processing", tag: "Advanced", duration: "05:20:00", enrolled: "980", modules: 10, image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80", badge: null },
  { id: "aquatic-conservation", title: "Aquatic Resource Conservation", category: "Conservation", tag: "Recommended", duration: "04:00:00", enrolled: "1.5k", modules: 9, image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&q=80", badge: null },
  { id: "weather-safety", title: "Weather & Ocean Safety Awareness", category: "Safety", tag: "Compulsory", duration: "02:45:00", enrolled: "3.2k", modules: 6, image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=400&q=80", badge: "Updated" },
];

export default function TopCourses() {
  return (
    <section className="py-16 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            Featured <span className="text-primary">Learning Modules</span>
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            Complete these modules to earn certifications and meet licensing requirements. Each module includes lectures, presentations, and MCQ assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((course) => (
            <div key={course.id} className="course-card bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300">
              <Link href={`/modules/${course.id}`} className="block relative h-48 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {course.badge && (
                    <span className="bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                    <i className="fa-regular fa-clock mr-1" />{course.duration}
                  </span>
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                    <i className="fa-solid fa-layer-group mr-1" />{course.modules} modules
                  </span>
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded">{course.category}</span>
                    <span className="text-xs font-semibold bg-navy/10 text-navy px-2.5 py-1 rounded">{course.tag}</span>
                  </div>
                  <span className="text-xs text-gray-mid flex items-center gap-1">
                    <i className="fa-solid fa-users" /> {course.enrolled}
                  </span>
                </div>

                <h3 className="font-bold text-primary-dark text-lg mb-2 leading-snug">
                  <Link href={`/modules/${course.id}`} className="hover:text-primary transition">{course.title}</Link>
                </h3>
                <p className="text-sm text-gray-mid mb-4">Complete all modules and pass the MCQ assessment with a minimum score to earn your certificate.</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-primary font-bold text-sm flex items-center gap-1">
                    <i className="fa-solid fa-certificate" /> Certificate
                  </span>
                  <Link href={`/modules/${course.id}`} className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded hover:bg-primary-dark transition">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/modules" className="inline-flex items-center gap-2 bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg hover:bg-navy transition">
            View All Modules <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
