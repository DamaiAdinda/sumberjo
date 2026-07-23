"use client";

import { useState } from "react";
import Image from "next/image";

type KegiatanGalleryImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

export default function KegiatanGalleryImage({
  src,
  alt,
  width,
  height,
  className,
}: KegiatanGalleryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="rounded-3xl bg-[color:var(--surface-soft)] px-4 py-10 text-center text-sm text-[color:var(--foreground)]/70">
        Gambar gagal dimuat.
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={(event) => {
        console.error("Gagal memuat gambar:", event.currentTarget.currentSrc || src);
        setHasError(true);
      }}
    />
  );
}
