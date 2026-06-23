import Link from "next/link";

const moduleLinks = [
  "Maritime Safety", "Navigation", "Aquaculture", "Fish Processing",
  "Licensing", "Conservation", "Export Standards",
];

const supportLinks = [
  "Documentation", "FAQ", "User Guides", "Contact Support", "Report an Issue", "Feedback",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1a3a] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          <div>
            <div className="mb-5">
              <img
                src="/logo-black.png"
                alt="Ministry of Fisheries"
                className="h-10 w-auto invert brightness-200"
              />
            </div>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              The official E-Learning Management System of the Department of Fisheries and Aquatic Resources, Sri Lanka.
            </p>
            <div className="space-y-2.5 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-envelope text-accent mt-0.5 text-xs shrink-0" />
                <span>info@fisheries.gov.lk</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-building text-accent mt-0.5 text-xs shrink-0" />
                <span>New Secretariat, Maligawatta, Colombo 10</span>
              </div>
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-phone text-accent mt-0.5 text-xs shrink-0" />
                <span>+94 112 446 183 / 4</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-white">Module Categories</h3>
            <ul className="space-y-2.5">
              {moduleLinks.map((link) => (
                <li key={link}>
                  <Link href="/modules" className="text-sm text-white/60 hover:text-accent transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />{link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-white">Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-accent transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="https://www.fisheries.gov.lk" className="hover:text-accent transition flex items-center gap-2" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />DFAR Official Website</a></li>
              <li><a href="https://www.gov.lk" className="hover:text-accent transition flex items-center gap-2" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />Government of Sri Lanka</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50 shrink-0" />Terms of Use</a></li>
            </ul>

            <h3 className="font-bold text-base mt-8 mb-4 text-white">Get Connected</h3>
            <div className="flex gap-3">
              {[
                { icon: "fa-brands fa-facebook-f", color: "hover:bg-blue-600" },
                { icon: "fa-brands fa-youtube", color: "hover:bg-red-600" },
                { icon: "fa-brands fa-twitter", color: "hover:bg-sky-500" },
                { icon: "fa-solid fa-globe", color: "hover:bg-green-600" },
              ].map((social) => (
                <a key={social.icon} href="#" className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 ${social.color} hover:text-white transition text-sm`}>
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-2">
          <p>2026 Department of Fisheries and Aquatic Resources. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://futuora.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:text-yellow-300 transition">
              Futuora Engineering
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
