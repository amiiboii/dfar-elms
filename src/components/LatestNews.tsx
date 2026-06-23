const news = [
  {
    title: "New Maritime Safety Module Launched for Deep Sea Fishermen",
    date: "18 Jun, 2026",
    category: "Training",
    tag: "Safety",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
    desc: "DFAR launches comprehensive safety training covering emergency protocols and weather awareness for deep sea fishing operations.",
  },
  {
    title: "Digital Licensing System Now Integrated with E-LMS Platform",
    date: "12 Jun, 2026",
    category: "Technology",
    tag: "Licensing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    desc: "Boat owners can now complete required modules and apply for licenses directly through the integrated E-Learning platform.",
  },
  {
    title: "Trilingual Support Extended to All Assessment Modules",
    date: "05 Jun, 2026",
    category: "Update",
    tag: "Languages",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
    desc: "All MCQ assessments are now available in Sinhala, Tamil, and English, ensuring accessibility for all registered users.",
  },
];

export default function LatestNews() {
  return (
    <section className="py-16 bg-gray-light" id="news">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            Updates, announcements, and developments from the DFAR E-Learning platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {news.map((item) => (
            <div key={item.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="text-gray-mid"><i className="fa-regular fa-user mr-1" />Admin</span>
                  <span className="text-gray-mid"><i className="fa-regular fa-calendar mr-1" />{item.date}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded">{item.category}</span>
                  <span className="text-xs font-semibold bg-accent/20 text-primary-dark px-2.5 py-1 rounded">{item.tag}</span>
                </div>
                <h3 className="font-bold text-primary-dark text-base mb-2 leading-snug">
                  <a href="#" className="hover:text-primary transition">{item.title}</a>
                </h3>
                <p className="text-sm text-gray-mid mb-4 line-clamp-2">{item.desc}</p>
                <a href="#" className="text-primary text-sm font-semibold hover:text-primary-dark transition flex items-center gap-1">
                  Read More <i className="fa-solid fa-arrow-right text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
