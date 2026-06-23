const events = [
  {
    month: "Jul",
    year: "2026",
    title: "Fisheries Safety Training Workshop",
    time: "9:00 AM - 4:00 PM",
    location: "DFAR Head Office, Colombo 10",
    desc: "Comprehensive hands-on workshop covering maritime safety protocols, emergency procedures, and first aid for fishermen operating in deep sea areas.",
    available: 126,
  },
  {
    month: "Aug",
    year: "2026",
    title: "Sustainable Aquaculture Conference",
    time: "10:00 AM - 3:00 PM",
    location: "Negombo Fisheries Centre",
    desc: "Annual conference bringing together experts, officers, and stakeholders to discuss best practices in aquaculture and sustainable fishing methods.",
    available: 58,
  },
  {
    month: "Sep",
    year: "2026",
    title: "Boat Licensing Examination",
    time: "8:00 AM - 12:00 PM",
    location: "Multiple Districts",
    desc: "Nationwide licensing examination for boat operators. Candidates must complete all prerequisite learning modules before registering for this examination.",
    available: 256,
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-light" id="events">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            Training workshops, examinations, and conferences organized by DFAR across districts.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition">
              <div className="bg-primary text-white rounded-xl px-6 py-4 text-center min-w-[100px] shrink-0">
                <div className="text-2xl font-bold">{event.month}</div>
                <div className="text-sm text-white/75">{event.year}</div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary-dark mb-2">
                  <a href="#" className="hover:text-primary transition">{event.title}</a>
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-mid mb-3">
                  <span><i className="fa-regular fa-clock mr-1" />{event.time}</span>
                  <span><i className="fa-solid fa-location-dot mr-1" />{event.location}</span>
                </div>
                <p className="text-sm text-gray-mid">{event.desc}</p>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <a href="#" className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-primary-dark transition">
                  Book Now
                </a>
                <span className="text-xs text-primary font-medium">{event.available} seats available</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition">
            View All Events <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
