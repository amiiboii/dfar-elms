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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://www.fisheries.gov.lk/web/templates/poora_temp/images/new/logo.png"
                alt="DFAR Logo"
                className="h-12 w-auto brightness-200"
              />
              <div>
                <div className="font-bold text-sm">Dept. of Fisheries</div>
                <div className="text-xs text-white/60">& Aquatic Resources</div>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              The official E-Learning Management System of the Department of Fisheries and Aquatic Resources, Sri Lanka. Empowering fisheries communities through digital education.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div><i className="fa-solid fa-envelope mr-2 text-accent" />info@fisheries.gov.lk</div>
              <div><i className="fa-solid fa-building mr-2 text-accent" />New Secretariat, Maligawatta, Colombo 10</div>
              <div><i className="fa-solid fa-phone mr-2 text-accent" />+94 112 446 183 / 4</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5">Module Categories</h3>
            <ul className="space-y-2.5">
              {moduleLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-accent transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5">Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-accent transition flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="https://www.fisheries.gov.lk" className="hover:text-accent transition flex items-center gap-2" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />DFAR Official Website</a></li>
              <li><a href="https://www.gov.lk" className="hover:text-accent transition flex items-center gap-2" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />Government of Sri Lanka</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><i className="fa-solid fa-chevron-right text-[8px] text-accent/50" />Terms of Use</a></li>
            </ul>

            <h3 className="font-bold text-base mt-8 mb-4">Get Connected</h3>
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© 2026 Department of Fisheries and Aquatic Resources. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Developed by <span className="text-accent font-semibold">Futura Engineering</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
