import { FaCheckCircle, FaCompass, FaFlag } from "react-icons/fa";

const missions = [
  "Meningkatkan kualitas pelayanan kepada masyarakat.",
  "Mendukung pengembangan UMKM dan ekonomi lokal.",
  "Mendorong partisipasi masyarakat dalam pembangunan desa.",
  "Menjaga kelestarian lingkungan dan budaya lokal.",
  "Memanfaatkan teknologi informasi untuk pelayanan publik.",
];

export default function VisionMissionSection() {
  return (
    <section className="pb-8 pt-3">
      <div className="container-shell">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
            Arah Pembangunan
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)] sm:text-3xl">
            VISI & MISI DESA
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="section-panel fade-up-soft rounded-[1.6rem] overflow-hidden">
            <div className="bg-[linear-gradient(135deg,var(--primary),#1c6a3d)] px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-2xl">
                  <FaCompass />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/72">
                    Visi
                  </p>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    Desa Sumberjo
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-7">
              <p className="text-base leading-8 text-[color:var(--foreground)]/80 sm:text-lg">
                &ldquo;Mewujudkan Desa Sumberjo yang maju, mandiri, sejahtera,
                dan berkelanjutan melalui pemberdayaan masyarakat serta
                pengembangan potensi lokal.&rdquo;
              </p>
            </div>
          </article>

          <article className="section-panel fade-up-soft rounded-[1.6rem] overflow-hidden">
            <div className="bg-[linear-gradient(135deg,#f2e6c8,#f9f2e5)] px-6 py-5 text-[color:var(--primary-strong)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-xl text-[color:var(--primary-strong)]">
                  <FaFlag />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
                    Misi
                  </p>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    Langkah Prioritas
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid gap-4 p-6 sm:p-7">
              {missions.map((mission) => (
                <div key={mission} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[color:var(--accent)]" />
                  <p className="text-base leading-7 text-[color:var(--foreground)]/78">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
