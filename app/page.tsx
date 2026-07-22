import AgendaTimelineSection from "@/components/AgendaTimelineSection";
import FeaturedProgramsSection from "@/components/FeaturedProgramsSection";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import HomeStatsSection from "@/components/HomeStatsSection";
import KknProgramsCarousel from "@/components/KknProgramsCarousel";
import KknAboutSection from "@/components/KknAboutSection";
import PotensiDesaSection from "@/components/PotensiDesaSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import { kknPrograms } from "@/data/kknPrograms";
import {
  FaBullhorn,
  FaBuilding,
  FaLeaf,
  FaNewspaper,
  FaPhoneAlt,
  FaRegImage,
  FaStore,
  FaUsers,
} from "react-icons/fa";

const fiturDesa = [
  {
    title: "Profil Desa",
    description: "Lihat profil desa",
    icon: FaUsers,
    href: "#profil",
  },
  {
    title: "Potensi Desa",
    description: "Lihat potensi unggulan",
    icon: FaLeaf,
    href: "#potensi",
  },
  {
    title: "UMKM Desa",
    description: "Jelajahi usaha lokal",
    icon: FaStore,
    href: "#umkm",
  },
  {
    title: "Galeri Kegiatan",
    description: "Lihat dokumentasi",
    icon: FaRegImage,
    href: "#galeri",
  },
  {
    title: "Fasilitas Umum",
    description: "Informasi layanan publik",
    icon: FaBuilding,
    href: "#fasilitas",
  },
  {
    title: "Hubungi Kami",
    description: "Kontak pemerintah desa",
    icon: FaPhoneAlt,
    href: "#kontak",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <section className="relative z-20 -mt-6 pb-8 sm:-mt-8 lg:-mt-10">
        <div className="container-shell">
          <div className="section-panel grid overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {fiturDesa.map(({ title, description, icon: Icon, href }) => (
              <a
                key={title}
                href={href}
                className="group flex h-full items-center gap-3 border-b border-[color:var(--border-soft)] px-4 py-5 hover:bg-[color:var(--surface-soft)] sm:px-5 sm:py-6 lg:border-r lg:flex-col lg:justify-center lg:text-center lg:border-b-0"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[1.8rem] text-[color:var(--primary)] sm:h-15 sm:w-15 sm:text-[2rem]">
                  <Icon />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base font-extrabold uppercase leading-tight tracking-tight text-[color:var(--primary)] sm:text-lg">
                    {title}
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[color:var(--foreground)]/72 sm:text-sm">
                    {description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <HomeStatsSection />
      <VisionMissionSection />
      <KknProgramsCarousel programs={kknPrograms} />
      <FeaturedProgramsSection />
      <AgendaTimelineSection />

      <section className="py-6">
        <div className="container-shell">
          <div className="section-panel flex flex-col overflow-hidden rounded-[1.3rem] lg:flex-row">
            <div className="relative flex items-center gap-4 bg-[linear-gradient(135deg,var(--primary),#1d6f40)] px-5 py-5 text-white sm:px-6 sm:py-6 lg:basis-[320px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-3xl">
                <FaBullhorn />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/75">
                  Info Desa
                </p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Warga Tangguh, Desa Maju
                </h2>
              </div>
              <div className="absolute right-[-22px] top-0 hidden h-full w-12 bg-[color:var(--surface)] [clip-path:polygon(0_0,100%_50%,0_100%)] lg:block" />
            </div>
            <div className="flex flex-1 items-center justify-between gap-4 px-5 py-5 text-base leading-8 text-[color:var(--foreground)]/78 sm:px-6 sm:py-6 sm:text-lg sm:leading-8">
              <p>
                Mari bersama membangun Desa Sumberjo yang lebih tertata,
                produktif, dan sejahtera melalui kolaborasi warga, UMKM, dan
                pemerintah desa.
              </p>
              <FaNewspaper className="hidden text-5xl text-[color:var(--accent)] lg:block" />
            </div>
          </div>
        </div>
      </section>

      <PotensiDesaSection />

      <Gallery />
      <KknAboutSection />
      <Footer />
    </main>
  );
}
