"use client";
import { use, useRef } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { modules } from "@/lib/moduleData";

export default function CertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang } = useLang();
  const mod = modules.find((m) => m.id === id);
  const certRef = useRef<HTMLDivElement>(null);

  if (!mod) {
    return (
      <>
        <TopBar /><Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-primary-dark">Module Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const title = lang === "si" ? mod.titleSi : lang === "ta" ? mod.titleTa : mod.title;
  const certId = `DFAR-CERT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow || !certRef.current) return;
    printWindow.document.write(`
      <html><head><title>Certificate - ${title}</title>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f5f5f5; }
        @media print { body { background: white; } .no-print { display: none !important; } }
      </style>
      </head><body>${certRef.current.outerHTML}</body></html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 500);
  };

  return (
    <>
      <TopBar /><Navbar />

      <section className="bg-gray-light min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Actions bar */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/dashboard" className="text-primary font-medium text-sm hover:text-primary-dark">
              <i className="fa-solid fa-arrow-left mr-2" />Back to Dashboard
            </Link>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition"
              >
                <i className="fa-solid fa-print mr-2" />Print Certificate
              </button>
              <button
                onClick={handlePrint}
                className="border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition"
              >
                <i className="fa-solid fa-download mr-2" />Download PDF
              </button>
            </div>
          </div>

          {/* Certificate */}
          <div ref={certRef} style={{ width: "800px", margin: "0 auto", fontFamily: "'Roboto', sans-serif" }}>
            <div style={{
              background: "white",
              border: "3px solid #0066CC",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}>
              <div style={{
                border: "2px solid #F2D40C",
                borderRadius: "8px",
                padding: "48px 40px",
                position: "relative",
                background: "linear-gradient(180deg, rgba(0,102,204,0.02) 0%, rgba(242,212,12,0.03) 100%)",
              }}>
                {/* Corner decorations */}
                <div style={{ position: "absolute", top: "12px", left: "12px", width: "40px", height: "40px", borderTop: "3px solid #0066CC", borderLeft: "3px solid #0066CC" }} />
                <div style={{ position: "absolute", top: "12px", right: "12px", width: "40px", height: "40px", borderTop: "3px solid #0066CC", borderRight: "3px solid #0066CC" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "12px", width: "40px", height: "40px", borderBottom: "3px solid #0066CC", borderLeft: "3px solid #0066CC" }} />
                <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "40px", height: "40px", borderBottom: "3px solid #0066CC", borderRight: "3px solid #0066CC" }} />

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <img
                    src="https://www.fisheries.gov.lk/web/templates/poora_temp/images/new/logo.png"
                    alt="DFAR"
                    style={{ height: "64px", margin: "0 auto 12px" }}
                  />
                  <div style={{ fontSize: "11px", color: "#666", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "4px" }}>
                    Government of the Democratic Socialist Republic of Sri Lanka
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#0D2247" }}>
                    Department of Fisheries and Aquatic Resources
                  </div>
                  <div style={{ fontSize: "12px", color: "#666", marginTop: "2px" }}>
                    ධීවර සහ ජලජ සම්පත් දෙපාර්තමේන්තුව | மீன்பிடி மற்றும் நீர்வாழ் வளத் திணைக்களம்
                  </div>
                </div>

                {/* Certificate title */}
                <div style={{ textAlign: "center", marginBottom: "28px" }}>
                  <div style={{ fontSize: "14px", color: "#0066CC", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "8px" }}>
                    E-Learning Management System
                  </div>
                  <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 900, color: "#0D2247", marginBottom: "4px" }}>
                    Certificate of Completion
                  </h1>
                  <div style={{ width: "120px", height: "3px", background: "linear-gradient(90deg, #F2D40C, #0066CC, #F2D40C)", margin: "0 auto" }} />
                </div>

                {/* Body */}
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>
                    This is to certify that
                  </p>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#0D2247", marginBottom: "8px" }}>
                    Samantha Jayawardena
                  </h2>
                  <div style={{ width: "280px", height: "1px", background: "#ccc", margin: "0 auto 16px" }} />
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px", lineHeight: 1.6 }}>
                    has successfully completed the learning module and passed<br />the assessment for
                  </p>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0066CC", marginBottom: "8px" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#666" }}>
                    Duration: {mod.duration} · {mod.moduleCount} Lessons · Assessment Score: 92%
                  </p>
                </div>

                {/* Signatures */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", padding: "0 32px" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", color: "#0D2247", marginBottom: "4px" }}>
                      N.D.P. Gunawardhana
                    </div>
                    <div style={{ width: "160px", height: "1px", background: "#333", margin: "0 auto 4px" }} />
                    <div style={{ fontSize: "11px", color: "#666" }}>Director (IT)</div>
                    <div style={{ fontSize: "10px", color: "#999" }}>Department of Fisheries</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "40px", color: "#F2D40C", marginBottom: "-8px" }}>🏅</div>
                    <div style={{ fontSize: "10px", color: "#0066CC", fontWeight: 700 }}>VERIFIED</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontStyle: "italic", color: "#0D2247", marginBottom: "4px" }}>
                      Director General
                    </div>
                    <div style={{ width: "160px", height: "1px", background: "#333", margin: "0 auto 4px" }} />
                    <div style={{ fontSize: "11px", color: "#666" }}>Director General</div>
                    <div style={{ fontSize: "10px", color: "#999" }}>DFAR</div>
                  </div>
                </div>

                {/* Footer */}
                <div style={{ textAlign: "center", borderTop: "1px solid #eee", paddingTop: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "center", gap: "32px", fontSize: "11px", color: "#999" }}>
                    <span>Certificate ID: <strong style={{ color: "#0D2247" }}>{certId}</strong></span>
                    <span>Issue Date: <strong style={{ color: "#0D2247" }}>{today}</strong></span>
                    <span>Verify at: <strong style={{ color: "#0066CC" }}>elms.fisheries.gov.lk/verify</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Share & Info */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm max-w-4xl mx-auto">
            <h3 className="font-bold text-primary-dark mb-3">Certificate Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-mid block">Certificate ID</span>
                <span className="font-semibold text-primary-dark font-mono">{certId}</span>
              </div>
              <div>
                <span className="text-gray-mid block">Module</span>
                <span className="font-semibold text-primary-dark">{title}</span>
              </div>
              <div>
                <span className="text-gray-mid block">Issue Date</span>
                <span className="font-semibold text-primary-dark">{today}</span>
              </div>
              <div>
                <span className="text-gray-mid block">Status</span>
                <span className="font-semibold text-green-600"><i className="fa-solid fa-circle-check mr-1" />Valid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
