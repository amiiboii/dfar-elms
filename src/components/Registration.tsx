"use client";

export default function Registration() {
  return (
    <section className="py-16 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">Register Today</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Fisheries Learning Journey — <span className="text-accent">Free!</span>
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Access over 150 learning modules in Sinhala, Tamil, and English. Earn recognized certificates to advance your career in the fisheries sector.
            </p>

            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                Self-paced learning — study from anywhere
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                Official DFAR certificates upon completion
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                Available in Sinhala, Tamil & English
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                Required for boat licensing & compliance
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <span className="inline-block bg-accent/20 text-primary-dark font-bold px-4 py-1 rounded-full text-sm mb-3">Free Registration</span>
              <h3 className="text-2xl font-bold text-primary-dark">Create Your Account</h3>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>Select User Type</option>
                <option>Fisherman</option>
                <option>Boat Owner</option>
                <option>Fisheries Officer</option>
                <option>External User</option>
              </select>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>Preferred Language</option>
                <option>සිංහල (Sinhala)</option>
                <option>தமிழ் (Tamil)</option>
                <option>English</option>
              </select>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition text-base">
                Register Now <i className="fa-solid fa-arrow-right ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
