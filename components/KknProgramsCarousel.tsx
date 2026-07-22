"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";
import type { KknProgram } from "@/data/kknPrograms";

type KknProgramsCarouselProps = {
  programs: KknProgram[];
};

export default function KknProgramsCarousel({
  programs,
}: KknProgramsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollCarousel(direction: "left" | "right") {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const firstCard = container.querySelector<HTMLElement>("[data-card]");
    const cardWidth = firstCard?.offsetWidth ?? 320;
    const gap = 24;
    const offset = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="profil"
      className="bg-[radial-gradient(circle_at_top,rgba(212,166,61,0.09),transparent_40%)] pb-8 pt-9"
    >
      <div className="container-shell">
        <div
          id="kegiatan-kkn"
          className="mb-8 flex scroll-mt-24 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <h2 className="section-title section-title-left">
            Galeri Kegiatan KKN
          </h2>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Geser ke kiri"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--primary)] bg-[color:var(--surface)] text-[color:var(--primary)] shadow-[0_10px_24px_rgba(15,76,43,0.12)] hover:bg-[color:var(--primary)] hover:text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Geser ke kanan"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-white shadow-[0_10px_24px_rgba(15,76,43,0.18)] hover:bg-[color:var(--primary-strong)]"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 sm:gap-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((program) => (
            <article
              key={program.slug}
              data-card
              className="section-panel flex h-[560px] w-[calc(100vw-2.75rem)] min-w-[280px] max-w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.2rem] sm:h-[560px] sm:w-[320px] lg:h-[580px] lg:w-[360px] lg:max-w-[380px]"
            >
              <div className="relative h-52 sm:h-56">
                {program.coverImage ? (
                  <Image
                    src={program.coverImage}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,var(--primary),#1f6d3f)] px-6 text-center text-white">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-white/75">
                        Dokumentasi KKN
                      </p>
                      <p className="mt-3 text-xl font-bold leading-tight">
                        {program.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="inline-flex w-fit rounded-md bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  {program.category}
                </span>
                <h3 className="line-clamp-2 mt-4 text-[1.25rem] font-bold leading-tight tracking-tight text-[color:var(--primary-strong)] sm:text-[1.45rem]">
                  {program.title}
                </h3>
                <p className="line-clamp-4 mt-3 text-sm leading-7 text-[color:var(--foreground)]/78 sm:text-base">
                  {program.description}
                </p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-4 text-sm text-[color:var(--foreground)]/70">
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-[color:var(--accent)]" />
                    {program.personInCharge}
                  </span>
                  </div>
                  <Link
                    href={`/kegiatan/${program.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-[color:var(--primary)] px-4 py-3 text-sm font-semibold text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white"
                  >
                    Lihat Detail
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
