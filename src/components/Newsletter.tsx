export default function Newsletter() {
  return (
    <section className="py-14 bg-primary-dark">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Subscribe to DFAR Updates
        </h2>
        <p className="text-white/70 mb-8">
          Get notified about new learning modules, upcoming events, and important announcements from the Department of Fisheries.
        </p>
        <form className="flex max-w-xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 text-gray-800 placeholder-gray-400 bg-white outline-none text-sm"
          />
          <button className="bg-accent text-primary-dark font-bold px-8 py-4 hover:bg-yellow-400 transition text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
