import Image from "next/image";
import { FaCheckCircle, FaLeaf, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const highlights = [
  "Pelayanan publik yang ramah dan responsif",
  "Transparan dalam pembangunan desa",
  "Mendorong UMKM dan pertanian lokal",
  "Bersatu menjaga budaya dan lingkungan",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--primary-strong)] motion-safe:animate-[hero-fade-in_900ms_ease-out_both]">
      <Image
        src="/images/Hero.jpeg"
        alt="Panorama Desa Sumberjo"
        fill
        priority
        className="object-cover object-center"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/Hero.jpeg"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/0722.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-20">
        <Navbar />
        <div className="flex min-h-[640px] items-center px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-12 lg:min-h-[760px] lg:px-8 lg:py-14 xl:px-10 2xl:px-12">
          <div className="w-full max-w-[36rem] rounded-[2rem] border border-white/10 bg-[rgba(9,43,24,0.36)] p-6 text-white shadow-[0_24px_50px_rgba(12,38,24,0.08)] backdrop-blur-lg sm:p-8 lg:ml-6 lg:p-10 xl:ml-10">
            <div className="mb-6 inline-flex items-center gap-3 text-[color:var(--accent-soft)]">
              <FaLeaf className="text-xl sm:text-2xl" />
              <p className="text-sm font-medium tracking-wide">
                Selamat Datang di
              </p>
            </div>
            <h1 className="whitespace-nowrap text-[2.65rem] font-black uppercase leading-[0.94] tracking-[-0.055em] text-white motion-safe:opacity-0 motion-safe:animate-[hero-slide-up_800ms_ease-out_180ms_forwards] sm:text-[3.35rem] lg:text-[3.4rem]">
              Desa Sumberjo
            </h1>
            <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-white/88 motion-safe:opacity-0 motion-safe:animate-[hero-slide-up_800ms_ease-out_320ms_forwards] sm:text-[1.05rem] lg:text-[1.28rem] lg:leading-8">
              Desa yang maju, mandiri, dan sejahtera bersama.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[color:var(--accent-soft)]">
              <FaMapMarkerAlt />
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/78 sm:text-xs md:text-sm">
                Kapanewon Gedangsari, Gunungkidul
              </p>
            </div>
            <div className="mt-6 grid max-w-md gap-2.5 sm:mt-8 sm:gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-white/88"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-[color:var(--accent)]" />
                  <p className="text-sm leading-6 sm:text-base sm:leading-7">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 motion-safe:opacity-0 motion-safe:animate-[hero-slide-up_800ms_ease-out_460ms_forwards] sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#profil"
                className="rounded-xl bg-[color:var(--accent)] px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--primary-strong)] shadow-[0_12px_28px_rgba(212,166,61,0.28)] md:px-6 md:text-sm"
              >
                Jelajahi Desa
              </a>
              <a
                href="#kontak"
                className="rounded-xl border border-white/35 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-[color:var(--primary-strong)] md:px-6 md:text-sm"
              >
                Hubungi Kami 
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(248,245,239,0.9)_65%,var(--background))]" />
    </section>
  );
}
