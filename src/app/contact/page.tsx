"use client";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="bg-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t("contact")}</h1>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Link href="/" className="hover:text-accent transition">{t("home")}</Link>
            <i className="fa-solid fa-chevron-right text-[10px]" />
            <span className="text-accent">{t("contact")}</span>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-light min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info cards */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-building text-primary text-xl" />
                </div>
                <h3 className="font-bold text-primary-dark mb-2">Head Office</h3>
                <p className="text-sm text-gray-mid leading-relaxed">
                  Department of Fisheries and Aquatic Resources<br />
                  New Secretariat, Maligawatta<br />
                  Colombo 10, Sri Lanka
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-phone text-primary text-xl" />
                </div>
                <h3 className="font-bold text-primary-dark mb-2">Phone</h3>
                <p className="text-sm text-gray-mid">+94 112 446 183 / 4</p>
                <p className="text-sm text-gray-mid">+94 112 541 184 (Fax)</p>
                <p className="text-sm text-gray-mid mt-2">IT Division: +94 114 340 723</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-envelope text-primary text-xl" />
                </div>
                <h3 className="font-bold text-primary-dark mb-2">Email</h3>
                <p className="text-sm text-gray-mid">General: info@fisheries.gov.lk</p>
                <p className="text-sm text-gray-mid">IT Division: Director_IT@fisheriesdept.gov.lk</p>
                <p className="text-sm text-gray-mid">E-LMS Support: elms@fisheries.gov.lk</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-clock text-primary text-xl" />
                </div>
                <h3 className="font-bold text-primary-dark mb-2">Office Hours</h3>
                <p className="text-sm text-gray-mid">Monday - Friday: 8:30 AM - 4:15 PM</p>
                <p className="text-sm text-gray-mid">Saturday, Sunday: Closed</p>
                <p className="text-sm text-gray-mid mt-2 text-primary font-medium">E-LMS Platform: Available 24/7</p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <i className="fa-solid fa-check text-4xl text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">Message Sent!</h3>
                    <p className="text-gray-mid mb-6">We will get back to you within 2 business days.</p>
                    <button onClick={() => setSent(false)} className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-dark transition">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-primary-dark mb-1">Send us a Message</h2>
                    <p className="text-sm text-gray-mid mb-6">Have a question about the E-LMS platform? Fill out the form below.</p>

                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-primary-dark mb-1.5">Full Name</label>
                          <input type="text" required placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary-dark mb-1.5">Email</label>
                          <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-primary-dark mb-1.5">Phone</label>
                          <input type="tel" placeholder="+94 XX XXX XXXX" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary-dark mb-1.5">Subject</label>
                          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                            <option>General Inquiry</option>
                            <option>Technical Support</option>
                            <option>Module Content</option>
                            <option>Certificate Issue</option>
                            <option>Account Problem</option>
                            <option>Feedback</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-primary-dark mb-1.5">Message</label>
                        <textarea required rows={5} placeholder="Describe your inquiry..." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" />
                      </div>

                      <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition">
                        <i className="fa-solid fa-paper-plane mr-2" />Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d79.8676711!3d6.9316722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25905938985e1%3A0x654a32ece167d7ba!2z4Law4LeT4LeA4La7IOC3hOC3jyDgtongtr3gtrAg4LeD4La44LeK4La04Lat4LeKIOC3g-C2guC3gOC2u-C3iuC2sOC2sSDgtoXgtrjgt4_gtq3gt4rigI3gtrrgt4_gtrHgt4Hgtro!5e0!3m2!1sen!2slk!4v1234567890!5m2!1sen!2slk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DFAR Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
