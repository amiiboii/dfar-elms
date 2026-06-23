"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function RegisterPage() {
  const { t } = useLang();
  return (
    <>
      <TopBar />
      <Navbar />
      <section className="min-h-[calc(100vh-200px)] bg-gray-light py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <img
                src="https://www.fisheries.gov.lk/web/templates/poora_temp/images/new/logo.png"
                alt="DFAR"
                className="h-16 mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-primary-dark">{t("create_account")}</h1>
              <p className="text-gray-mid text-sm mt-1">{t("register_desc")}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("first_name")}</label>
                  <input type="text" placeholder={t("first_name")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("last_name")}</label>
                  <input type="text" placeholder={t("last_name")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("email")}</label>
                <input type="email" placeholder={t("email")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("phone")}</label>
                <input type="tel" placeholder={t("phone")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">NIC / ID Number</label>
                <input type="text" placeholder="Enter NIC number" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("select_user_type")}</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>{t("select_user_type")}</option>
                    <option>{t("fisherman")}</option>
                    <option>{t("boat_owner")}</option>
                    <option>{t("fisheries_officer")}</option>
                    <option>{t("external_user")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("preferred_language")}</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>{t("preferred_language")}</option>
                    <option>සිංහල (Sinhala)</option>
                    <option>தமிழ் (Tamil)</option>
                    <option>English</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">District</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  <option>Select District</option>
                  <option>Colombo</option>
                  <option>Galle</option>
                  <option>Matara</option>
                  <option>Negombo</option>
                  <option>Jaffna</option>
                  <option>Trincomalee</option>
                  <option>Batticaloa</option>
                  <option>Hambantota</option>
                  <option>Puttalam</option>
                  <option>Kalutara</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">{t("password")}</label>
                <input type="password" placeholder={t("password")} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-1.5">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="text-sm text-gray-mid">
                  I agree to the <a href="#" className="text-primary font-medium">Terms of Use</a> and <a href="#" className="text-primary font-medium">Privacy Policy</a> of DFAR E-LMS.
                </span>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition text-base">
                {t("register_now")} <i className="fa-solid fa-arrow-right ml-2" />
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-mid">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:text-primary-dark">{t("login")}</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
