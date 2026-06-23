"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { t } = useLang();

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("modules"), href: "/modules", dropdown: [t("maritime_safety"), t("navigation"), t("licensing"), t("aquaculture"), t("fish_processing")] },
    { label: t("assessments"), href: "/modules" },
    { label: t("instructors"), href: "/#instructors" },
    { label: t("events"), href: "/#events" },
    { label: t("news"), href: "/#news" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        <Link href="/" className="shrink-0">
          <img
            src="/logo-black.png"
            alt="Ministry of Fisheries, Aquatic and Ocean Resources"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        <div className="flex-1" />

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-2.5 py-2 text-[13px] font-medium text-primary-dark hover:text-primary transition flex items-center gap-1"
              >
                {item.label}
                {item.dropdown && <i className="fa-solid fa-chevron-down text-[9px]" />}
              </Link>
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] border border-gray-100 z-50">
                  {item.dropdown.map((sub) => (
                    <Link key={sub} href="/modules" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition">
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-4">
          <Link href="/register" className="hidden sm:inline-flex items-center px-4 py-1.5 border-2 border-primary text-primary text-sm font-semibold rounded hover:bg-primary hover:text-white transition">
            {t("register")}
          </Link>
          <Link href="/login" className="hidden sm:inline-flex items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition">
            {t("login")}
          </Link>
          <button
            className="lg:hidden text-primary-dark text-xl ml-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="block py-2 text-sm font-medium text-primary-dark hover:text-primary" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link href="/register" className="flex-1 text-center py-2 border-2 border-primary text-primary text-sm font-semibold rounded">{t("register")}</Link>
            <Link href="/login" className="flex-1 text-center py-2 bg-primary text-white text-sm font-semibold rounded">{t("login")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
