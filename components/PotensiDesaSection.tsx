"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { potensiDesa, type PotensiDesaItem } from "@/data/potensi";

export default function PotensiDesaSection() {
  const [selectedItem, setSelectedItem] = useState<PotensiDesaItem | null>(null);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <section id="potensi" className="py-14">
      <div className="container-shell text-center">
        <h2 className="section-title">Potensi Desa</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[color:var(--foreground)]/75">
          Desa Sumberjo memiliki potensi yang bertumpu pada sektor pertanian,
          peternakan, usaha masyarakat, serta infrastruktur pendukung desa.
        </p>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {potensiDesa.map((item) => (
            <article key={item.title} className="h-full text-left">
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl text-left section-panel hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,76,43,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                aria-haspopup="dialog"
                aria-label={`Lihat detail ${item.title}`}
              >
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col bg-[color:var(--primary)] p-5 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/78">
                    {item.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold tracking-[0.01em] text-[color:var(--accent-soft)]">
                    Lihat detail →
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(7,33,19,0.78)] px-4 py-6 sm:px-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="potensi-desa-dialog-title"
            className="section-panel relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] text-left"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(7,33,19,0.76)] text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:bg-[color:var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Tutup modal"
            >
              <FaTimes />
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[260px] sm:min-h-[340px]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col bg-[color:var(--surface)] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)]/60">
                  Potensi Desa
                </p>
                <h3
                  id="potensi-desa-dialog-title"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[color:var(--primary)]"
                >
                  {selectedItem.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--foreground)]/78">
                  {selectedItem.details}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--primary)]/70">
                    Highlights
                  </h4>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-[color:var(--foreground)]/80">
                    {selectedItem.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-6 py-6 sm:px-8 sm:py-8">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-lg font-bold text-[color:var(--primary)]">
                  Galeri Foto
                </h4>
                {selectedItem.gallery.length > 0 ? (
                  <p className="text-sm text-[color:var(--foreground)]/60">
                    Dokumentasi visual {selectedItem.title.toLowerCase()}.
                  </p>
                ) : null}
              </div>

              {selectedItem.gallery.length > 0 ? (
                <div className="mx-auto mt-5 w-full max-w-5xl">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {selectedItem.gallery.map((image, index) => (
                    <figure
                      key={`${selectedItem.title}-${image.src}`}
                      className="relative h-[260px] overflow-hidden rounded-[1.1rem] md:h-[340px]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt || `${selectedItem.title} ${index + 1}`}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className={`h-full w-full rounded-[1.1rem] object-cover ${
                          index === 0 ? "object-center" : "object-[center_70%]"
                        }`}
                      />
                    </figure>
                  ))}
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-[1.2rem] border border-dashed border-[color:var(--border-soft)] bg-white px-5 py-6 text-sm leading-6 text-[color:var(--foreground)]/72">
                  {selectedItem.galleryNote}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
