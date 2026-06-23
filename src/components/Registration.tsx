"use client";
import { useLang } from "@/lib/LangContext";

export default function Registration() {
  const { t } = useLang();
  return (
    <section className="py-16 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">{t("register_today")}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("register_title")} <span className="text-accent">{t("free")}</span>
            </h2>
            <p className="text-white/75 mb-8 text-lg">{t("register_desc")}</p>

            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                {t("benefit_1")}
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                {t("benefit_2")}
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                {t("benefit_3")}
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent" />
                {t("benefit_4")}
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <span className="inline-block bg-accent/20 text-primary-dark font-bold px-4 py-1 rounded-full text-sm mb-3">{t("free_registration")}</span>
              <h3 className="text-2xl font-bold text-primary-dark">{t("create_account")}</h3>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder={t("first_name")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                <input type="text" placeholder={t("last_name")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>
              <input type="email" placeholder={t("email")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              <input type="tel" placeholder={t("phone")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>{t("select_user_type")}</option>
                <option>{t("fisherman")}</option>
                <option>{t("boat_owner")}</option>
                <option>{t("fisheries_officer")}</option>
                <option>{t("external_user")}</option>
              </select>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                <option>{t("preferred_language")}</option>
                <option>Sinhala</option>
                <option>Tamil</option>
                <option>English</option>
              </select>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition text-base">
                {t("register_now")} <i className="fa-solid fa-arrow-right ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
