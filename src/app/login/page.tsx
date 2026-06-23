"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function LoginPage() {
  const { t } = useLang();
  return (
    <>
      <TopBar />
      <Navbar />
      <section className="min-h-[calc(100vh-200px)] bg-gray-light flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <img
                src="https://www.fisheries.gov.lk/web/templates/poora_temp/images/new/logo.png"
                alt="DFAR"
                className="h-16 mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-primary-dark">{t("welcome_back")}</h1>
              <p className="text-gray-mid text-sm mt-1">{t("login_desc")}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("email")}</label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    placeholder={t("email")}
                    defaultValue="officer@fisheries.gov.lk"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("password")}</label>
                <div className="relative">
                  <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="password"
                    placeholder={t("password")}
                    defaultValue="demo1234"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-mid">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
                  Remember me
                </label>
                <a href="#" className="text-primary hover:text-primary-dark font-medium">{t("forgot_password")}</a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition text-base"
              >
                {t("login")} <i className="fa-solid fa-arrow-right ml-2" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-mid">
              {t("no_account")}{" "}
              <Link href="/register" className="text-primary font-semibold hover:text-primary-dark">
                {t("sign_up")}
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-center text-gray-400">
                Demo credentials pre-filled. Click Login to enter the dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
