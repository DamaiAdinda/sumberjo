import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getKknProgramBySlug, kknPrograms } from "@/data/kknPrograms";

export const revalidate = 0;

export function generateStaticParams() {
  return kknPrograms.map((program) => ({
    slug: program.slug,
  }));
}

export default async function KegiatanDetailPage(
  props: PageProps<"/kegiatan/[slug]">,
) {
  const { slug } = await props.params;
  const program = getKknProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden">
      <section className="bg-[linear-gradient(135deg,#0b3a21,#0f4c2b_55%,#165b34)] pb-10 pt-6 text-white">
        <div className="container-shell">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white hover:text-[color:var(--primary)]"
          >
            Kembali ke Beranda
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[color:var(--accent)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--primary-strong)]">
                {program.category}
              </span>
              <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] break-words sm:text-4xl lg:text-5xl">
                {program.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-white/82">
                Penanggung Jawab: {program.personInCharge}
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/78 sm:grid-cols-2 sm:text-base">
                <p>
                  <span className="font-semibold text-white">Tanggal:</span>
                  {" "}
                  {program.date}
                </p>
                <p>
                  <span className="font-semibold text-white">Lokasi:</span>
                  {" "}
                  {program.location}
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
                {program.description}
              </p>
            </div>

            <div className="section-panel overflow-hidden rounded-[1.7rem] border-white/10 bg-white/8 shadow-[0_22px_55px_rgba(0,0,0,0.18)]">
              <div className="relative aspect-[16/9] min-h-[240px]">
                <Image
                  src={program.coverImage}
                  alt={program.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell grid gap-6">
          <article className="section-panel rounded-[1.5rem] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-[color:var(--primary-strong)]">
              Tujuan Kegiatan
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--foreground)]/78">
              {program.objectives}
            </p>
          </article>

          <article className="section-panel rounded-[1.5rem] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-[color:var(--primary-strong)]">
              Pelaksanaan Kegiatan
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--foreground)]/78">
              {program.implementation}
            </p>
          </article>

          <article className="section-panel rounded-[1.5rem] p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-[color:var(--primary-strong)]">
              Dampak Kegiatan
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--foreground)]/78">
              {program.impact}
            </p>
          </article>
        </div>
      </section>

      <section className="pb-14">
        <div className="container-shell">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
                Dokumentasi
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)]">
                Galeri Kegiatan
              </h2>
            </div>
          </div>

          {program.documentationImages.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {program.documentationImages.map((image, index) => (
                <article
                  key={image}
                  className="section-panel overflow-hidden rounded-[1.35rem]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`${program.title} - dokumentasi ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="section-panel rounded-[1.5rem] p-8 text-center">
              <p className="text-lg font-semibold text-[color:var(--primary-strong)]">
                Dokumentasi kegiatan akan diperbarui setelah kegiatan berlangsung.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
