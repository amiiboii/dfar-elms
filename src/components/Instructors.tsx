const instructors = [
  {
    name: "Dr. Kumara Perera",
    role: "Marine Biology Expert",
    students: "2.4k+",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    name: "Prof. Nimal Fernando",
    role: "Fisheries Management",
    students: "3.1k+",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Mrs. Chamari Silva",
    role: "Aquaculture Specialist",
    students: "1.8k+",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Mr. Ranjith Bandara",
    role: "Navigation & Safety Officer",
    students: "4.2k+",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Instructors() {
  return (
    <section className="py-16 bg-white" id="instructors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            Expert <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            Learn from experienced fisheries professionals, marine biologists, and subject matter experts from DFAR and partner institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {instructors.map((inst) => (
            <div key={inst.name} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary transition-colors duration-300">
                <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center gap-3 mb-3">
                {["facebook-f", "twitter", "linkedin-in", "envelope"].map((icon) => (
                  <a key={icon} href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-mid hover:bg-primary hover:text-white transition text-xs">
                    <i className={`fa-${icon === "envelope" ? "solid" : "brands"} fa-${icon}`} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-primary font-medium">{inst.role}</p>
              <h3 className="font-bold text-primary-dark text-lg">{inst.name}</h3>
              <p className="text-sm text-gray-mid mt-1">
                <i className="fa-solid fa-user-graduate mr-1" /> {inst.students} Students
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition">
            View All Instructors <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
