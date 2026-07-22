import {
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";

const stats = [
  {
    icon: FaUsers,
    value: "1.250+",
    label: "Penduduk",
  },
  {
    icon: HiHomeModern,
    value: "350+",
    label: "Kepala Keluarga",
  },
  {
    icon: FaShoppingBag,
    value: "25+",
    label: "UMKM Aktif",
  },
  {
    icon: FaSeedling,
    value: "16",
    label: "Program KKN",
  },
  {
    icon: FaLeaf,
    value: "4",
    label: "Potensi Unggulan",
  },
  {
    icon: FaMapMarkerAlt,
    value: "1",
    label: "Wilayah Binaan",
  },
];

export default function HomeStatsSection() {
  return (
    <section className="pb-8 pt-2">
      <div className="container-shell">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
            Statistik Desa
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)]">
            Gambaran Singkat Desa Sumberjo
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <article
              key={label}
              className="section-panel fade-up-soft rounded-[1.35rem] p-5 text-center hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,76,43,0.14)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--primary-soft)] text-2xl text-[color:var(--primary)]">
                <Icon />
              </div>
              <p className="mt-4 text-2xl font-black tracking-tight text-[color:var(--primary-strong)] sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--foreground)]/68 sm:text-sm">
                {label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
