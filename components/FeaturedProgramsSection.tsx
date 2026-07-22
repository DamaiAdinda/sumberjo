import {
  FaGlobeAsia,
  FaLeaf,
  FaStore,
  FaTractor,
} from "react-icons/fa";

const programs = [
  {
    icon: FaTractor,
    title: "Pertanian Berkelanjutan",
    description:
      "Mendorong produktivitas pertanian melalui pengelolaan lahan yang efektif dan ramah lingkungan.",
  },
  {
    icon: FaStore,
    title: "Pengembangan UMKM",
    description:
      "Mendukung pelaku usaha lokal melalui pelatihan dan digitalisasi pemasaran.",
  },
  {
    icon: FaLeaf,
    title: "Pelestarian Lingkungan",
    description:
      "Menjaga kelestarian alam dan meningkatkan kesadaran masyarakat terhadap lingkungan.",
  },
  {
    icon: FaGlobeAsia,
    title: "Digitalisasi Desa",
    description:
      "Mengembangkan sistem informasi dan media digital untuk meningkatkan akses informasi masyarakat.",
  },
];

export default function FeaturedProgramsSection() {
  return (
    <section className="pb-7 pt-4">
      <div className="container-shell">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
            Pengembangan Desa
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)]">
            PROGRAM UNGGULAN DESA
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="section-panel fade-up-soft rounded-[1.4rem] p-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,76,43,0.14)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--primary),#1e6d40)] text-2xl text-white shadow-[0_12px_24px_rgba(15,76,43,0.18)]">
                <Icon />
              </div>
              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[color:var(--primary-strong)]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--foreground)]/76">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
