import Image from "next/image";
import { galeriDesa } from "@/data/galeri";

export default function Gallery() {
  return (
    <section id="galeri" className="pb-16 pt-6">
      <div className="container-shell">
        <div className="section-panel overflow-hidden rounded-[2.2rem] px-6 py-10 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">
                Galeri Desa
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[color:var(--primary-strong)]">
                Dokumentasi Kehidupan Masyarakat Desa Sumberjo
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[color:var(--foreground)]/74">
              Kumpulan momen keseharian warga yang menampilkan kebersamaan,
              aktivitas sosial, dan suasana hidup masyarakat Desa Sumberjo.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {galeriDesa.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.8rem] bg-[color:var(--surface-soft)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-[color:var(--primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]/72">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
