export type PotensiDesaItem = {
  title: string;
  description: string;
  details: string;
  image: string;
  highlights: string[];
  gallery: string[];
  galleryNote?: string;
};

export const potensiDesa: PotensiDesaItem[] = [
  {
    title: "Pertanian",
    description:
      "Lahan pertanian menjadi salah satu penopang utama ekonomi dan mata pencaharian masyarakat Desa Sumberjo.",
    details:
      "Sektor pertanian menjadi tumpuan utama kehidupan ekonomi masyarakat Desa Sumberjo. Lahan sawah, kebun, dan area tanam produktif dimanfaatkan warga untuk menopang kebutuhan rumah tangga sekaligus menjaga keberlanjutan produksi pangan desa.",
    image: "/images/Pertanian.jpeg",
    highlights: [
      "Lahan sawah dan kebun masih aktif dikelola warga.",
      "Menjadi sumber mata pencaharian utama bagi banyak keluarga.",
      "Mendukung ketahanan pangan dan aktivitas ekonomi desa.",
    ],
    gallery: [
      "/images/bagian-pertanian.jpeg",
      "/images/petani.jpeg",
    ],
  },
  {
    title: "Peternakan",
    description:
      "Usaha ternak sapi, kambing, dan hewan ternak lainnya menjadi sumber pendapatan tambahan bagi warga.",
    details:
      "Peternakan warga berkembang sebagai sumber pendapatan tambahan yang penting bagi masyarakat Desa Sumberjo. Pemeliharaan sapi, kambing, dan ternak lainnya membantu memperkuat ekonomi rumah tangga serta membuka peluang usaha berbasis hasil ternak.",
    image: "/images/peternakan.jpeg",
    highlights: [
      "Usaha ternak sapi dan kambing dijalankan oleh warga desa.",
      "Menjadi penopang pendapatan tambahan di luar sektor pertanian.",
      "Berpotensi dikembangkan sebagai usaha produktif berbasis rumah tangga.",
    ],
    gallery: [
      "/images/kandang.jpeg",
      "/images/kambing.jpeg",
      "/images/sapi.jpeg",
    ],
  },
  {
    title: "UMKM Desa",
    description:
      "Berbagai usaha rumahan dan perdagangan lokal turut menggerakkan perekonomian masyarakat desa.",
    details:
      "UMKM Desa mencakup berbagai usaha rumahan, perdagangan kecil, dan aktivitas ekonomi lokal yang membantu perputaran ekonomi masyarakat. Potensi ini terus tumbuh bersama keterlibatan warga, meski dokumentasi visual khusus UMKM masih akan dilengkapi.",
    image: "/images/placeholder.jpg",
    highlights: [
      "Usaha rumahan dan perdagangan lokal mendukung ekonomi warga.",
      "Menjadi ruang tumbuh bagi kemandirian usaha masyarakat desa.",
      "Dokumentasi khusus UMKM akan ditambahkan saat foto relevan tersedia.",
    ],
    gallery: [],
    galleryNote: "Dokumentasi UMKM akan ditambahkan setelah foto yang relevan tersedia.",
  },
  {
    title: "Infrastruktur Desa",
    description:
      "Jalan desa, balai desa, dan fasilitas umum mendukung pelayanan serta aktivitas masyarakat sehari-hari.",
    details:
      "Infrastruktur desa menjadi penunjang penting bagi pelayanan publik dan mobilitas masyarakat. Ketersediaan jalan desa, balai desa, serta fasilitas umum lainnya membantu aktivitas warga berjalan lebih tertata, mudah diakses, dan mendukung perkembangan desa secara berkelanjutan.",
    image: "/images/jalan.jpeg",
    highlights: [
      "Jalan desa mendukung mobilitas warga dan distribusi hasil usaha.",
      "Balai desa menjadi pusat layanan dan kegiatan masyarakat.",
      "Fasilitas umum membantu aktivitas harian berjalan lebih tertata.",
    ],
    gallery: [
      "/images/lapangan.jpeg",
      "/images/balai.jpeg",
      "/images/maps-sumberjo.jpg",
    ],
  },
];
