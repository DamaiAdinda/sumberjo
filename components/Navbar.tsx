"use client";

import { useState } from "react";
import { FaLeaf, FaMountainCity, FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";

const menu = [
  { label: "Beranda", href: "#" },
  { label: "Profil Desa", href: "#profil" },
  { label: "Potensi", href: "#potensi" },
  { label: "UMKM", href: "#umkm" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-5 md:pt-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4 lg:pr-0">
        <a href="#" className="flex min-w-0 items-center gap-3 text-white md:gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--accent)]/60 bg-white/8 text-[color:var(--accent)] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm md:h-14 md:w-14">
            <FaMountainCity className="text-xl md:text-2xl" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-extrabold uppercase tracking-tight sm:text-lg md:text-2xl">
              Desa Sumberjo
            </p>
            <p className="flex items-center gap-2 text-[11px] text-white/80 sm:text-xs md:text-sm">
              <FaLeaf className="shrink-0 text-[color:var(--accent)]" />
              Kalurahan Ngalang
            </p>
          </div>
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/92 text-[color:var(--primary)] shadow-[0_12px_30px_rgba(7,33,19,0.16)] lg:hidden"
        >
          {isOpen ? <FaXmark className="text-xl" /> : <HiBars3 className="text-xl" />}
        </button>

        <nav className="hidden rounded-[1.35rem] bg-white/96 p-2 shadow-[0_16px_40px_rgba(7,33,19,0.16)] backdrop-blur lg:ml-auto lg:block">
          <ul className="flex items-center gap-1.5">
            {menu.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`inline-flex rounded-[0.95rem] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,var(--primary),#1f6d3f)] text-white shadow-[0_8px_16px_rgba(15,76,43,0.2)]"
                      : "text-[color:var(--primary)] hover:bg-[color:var(--surface-soft)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="mt-4 rounded-[1.35rem] bg-white/96 p-3 shadow-[0_16px_40px_rgba(7,33,19,0.16)] backdrop-blur lg:hidden"
        >
          <ul className="grid gap-2">
            {menu.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex rounded-[1rem] px-4 py-3 text-sm font-bold uppercase tracking-[0.06em] ${
                    index === 0
                      ? "bg-[linear-gradient(135deg,var(--primary),#1f6d3f)] text-white shadow-[0_8px_16px_rgba(15,76,43,0.2)]"
                      : "bg-[color:var(--surface-soft)] text-[color:var(--primary)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
