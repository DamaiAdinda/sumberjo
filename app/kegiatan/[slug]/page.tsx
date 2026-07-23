import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { imageSize } from "next/dist/compiled/image-size";
import Footer from "@/components/Footer";
import { getKknProgramBySlug, kknPrograms } from "@/data/kknPrograms";

export const revalidate = 0;

export function generateStaticParams() {
  return kknPrograms.map((program) => ({
    slug: program.slug,
  }));
}

function getImageMetadata(imagePath: string) {
  const normalizedPath = decodeURIComponent(imagePath).replace(/^\/+/, "");
  const absolutePath = path.join(process.cwd(), "public", normalizedPath);

  if (!fs.existsSync(absolutePath)) {
    return {
      height: 1200,
      width: 960,
    };
  }

  const dimensions = imageSize(absolutePath);

  return {
    height: dimensions.height ?? 1200,
    width: dimensions.width ?? 960,
  };
}

export default async function KegiatanDetailPage(
  props: PageProps<"/kegiatan/[slug]">,
) {
  const { slug } = await props.params;
  const program = getKknProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const documentationGallery = program.documentationImages.map((image) => ({
    image,
    ...getImageMetadata(image),
  }));

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

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8">
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

            <div className="flex w-full items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-full aspect-[4/3] overflow-hidden rounded-[28px] border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:max-w-full lg:max-w-[620px] lg:aspect-[16/10]">
                <Image
                  src={program.coverImage}
                  alt={program.title}
                  fill
                  priority
                  className="object-cover object-[center_65%]"
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
        <div className="container-shell max-w-6xl">
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

          {documentationGallery.length > 0 ? (
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {documentationGallery.map(({ image, width, height }, index) => (
                <div
                  key={image}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-3xl shadow-[0_16px_40px_rgba(20,60,40,0.10)]"
                >
                  <Image
                    src={image}
                    alt={`${program.title} - dokumentasi ${index + 1}`}
                    width={width}
                    height={height}
                    className="h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
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
