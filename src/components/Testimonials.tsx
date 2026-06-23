const testimonials = [
  {
    name: "Samantha Jayawardena",
    role: "Fisheries Officer, Galle District",
    text: "The E-LMS has transformed how we conduct training across districts. Officers can now complete modules at their own pace without traveling to Colombo.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Mahinda Rathnayake",
    role: "Boat Owner, Negombo",
    text: "Getting my boat license was so much easier with the online modules. I could study in Sinhala and take the assessment when I was ready.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Thilini Perera",
    role: "Training Coordinator, DFAR",
    text: "Managing 150+ modules and tracking completion across 10,000 users is seamless. The analytics dashboard gives us real-time insights into training progress.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-gray-mid max-w-2xl mx-auto">
            Feedback from fisheries officers, trainees, and boat operators across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-light rounded-xl p-7 relative">
              <div className="text-primary/20 text-6xl absolute top-4 right-6 font-serif">&ldquo;</div>
              <p className="text-gray-mid text-sm leading-relaxed mb-6 relative z-10">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-primary-dark text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-mid">{t.role}</p>
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
