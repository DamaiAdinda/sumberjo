import Image from "next/image";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const mapsLink = "https://maps.app.goo.gl/3JUa1f4KT8xhfxZ2A";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="mt-8 overflow-hidden bg-[linear-gradient(135deg,#0a3a21,#0f4c2b_55%,#165b34)] text-white"
    >
      <div className="container-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Tentang Desa</h2>
          <p className="mt-4 text-base leading-8 text-white/78">
            Desa Sumberjo berkomitmen menjadi desa yang tangguh, ramah, dan
            adaptif dengan pelayanan publik yang terbuka serta pembangunan yang
            berpihak pada kesejahteraan warga.
          </p>
          <div className="mt-6 flex gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Kontak Desa</h2>
          <div className="mt-4 space-y-4 text-white/80">
            <p className="flex items-start gap-3 leading-7">
              <FaMapMarkerAlt className="mt-1 text-[color:var(--accent)]" />
              Jl. Raya Desa Sumberjo No. 123, Semin, Gunungkidul
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[color:var(--accent)]" />
              (021) 1234 5678
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[color:var(--accent)]" />
              info@sumberjo.desa.id
            </p>
          </div>
        </div>

        <div id="fasilitas">
          <h2 className="text-xl font-bold sm:text-2xl">Jam Pelayanan</h2>
          <div className="mt-4 space-y-3 text-white/80">
            <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
            <p>Sabtu: 08.00 - 12.00 WIB</p>
            <p>Minggu dan hari libur nasional: Tutup</p>
          </div>
          <div
            id="umkm"
            className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-soft)]">
              UMKM Unggulan
            </p>
            <p className="mt-3 text-lg font-bold">
              Kerajinan anyaman, olahan hasil tani, dan produk wisata lokal.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Lokasi Desa</h2>
          <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] p-3">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/8"
            >
              <div className="relative h-56">
                <Image
                  src="/images/maps-sumberjo.jpg"
                  alt="Peta lokasi Desa Sumberjo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,32,19,0.05),rgba(6,32,19,0.55))]" />
              </div>
            </a>
            <div className="p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-soft)]">
                Lokasi
              </p>
              <p className="mt-2 text-lg font-bold text-white">
                Desa Sumberjo
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[color:var(--primary-strong)] shadow-[0_10px_20px_rgba(212,166,61,0.2)]"
              >
                Buka di Google Maps
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Desa Sumberjo. Semua hak dilindungi.</p>
          <p>Dibuat untuk portal informasi desa yang hangat dan informatif.</p>
        </div>
      </div>
    </footer>
  );
}
