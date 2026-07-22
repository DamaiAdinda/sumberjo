import { FaArrowRight, FaCheck } from "react-icons/fa";

const focusAreas = [
  "Pendidikan",
  "UMKM",
  "Teknologi",
  "Kesehatan",
  "Lingkungan",
  "Infrastruktur",
];

export default function KknAboutSection() {
  return (
    <section className="pb-10 pt-6">
      <div className="container-shell">
        <div className="section-panel overflow-hidden rounded-[1.8rem]">
          <div className="grid gap-8 bg-[linear-gradient(135deg,rgba(15,76,43,0.08),rgba(212,166,61,0.12))] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
                Pengabdian Mahasiswa
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)]">
                KKN UAJY PERIODE 89
              </h2>
              <p className="mt-3 text-lg font-semibold text-[color:var(--accent)]">
                Kelompok 6 Desa Sumberjo
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--foreground)]/78">
                Program Kuliah Kerja Nyata Universitas Atma Jaya Yogyakarta
                Periode 89 dilaksanakan di Desa Sumberjo dengan fokus pada
                pemberdayaan masyarakat melalui bidang pendidikan, UMKM,
                teknologi, kesehatan, lingkungan, dan infrastruktur. Melalui
                berbagai program kerja yang telah dirancang, mahasiswa berupaya
                memberikan kontribusi nyata yang dapat mendukung perkembangan
                desa secara berkelanjutan.
              </p>
              <a
                href="#kegiatan-kkn"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[color:var(--primary)] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_24px_rgba(15,76,43,0.18)]"
              >
                Lihat Kegiatan KKN
                <FaArrowRight className="text-xs" />
              </a>
            </div>

            <div className="grid content-start gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--border-soft)] bg-white/86 px-4 py-3 text-[color:var(--primary-strong)] shadow-[0_10px_24px_rgba(15,76,43,0.08)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--primary)]">
                    <FaCheck className="text-sm" />
                  </div>
                  <span className="text-base font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
