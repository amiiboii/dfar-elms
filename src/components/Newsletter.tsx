"use client";
import { useLang } from "@/lib/LangContext";

export default function Newsletter() {
  const { t } = useLang();
  return (
    <section className="py-14 bg-primary-dark">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {t("subscribe_title")}
        </h2>
        <p className="text-white/70 mb-8">
          {t("subscribe_desc")}
        </p>
        <form className="flex max-w-xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <input
            type="email"
            placeholder={t("enter_email")}
            className="flex-1 px-5 py-4 text-gray-800 placeholder-gray-400 bg-white outline-none text-sm"
          />
          <button className="bg-accent text-primary-dark font-bold px-8 py-4 hover:bg-yellow-400 transition text-sm">
            {t("subscribe")}
          </button>
        </form>
      </div>
    </section>
  );
}
