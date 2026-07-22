const agendas = [
  {
    date: "10 Juli 2026",
    title: "Pelatihan Canva untuk Pemula",
  },
  {
    date: "12 Juli 2026",
    title: "Pelatihan Pupuk Kompos",
  },
  {
    date: "20 Juli 2026",
    title: "Peluncuran Website Desa",
  },
  {
    date: "08 Juli 2026",
    title: "Pendampingan Posyandu",
  },
  {
    date: "23 Juli 2026",
    title: "Dokumentasi Rasulan",
  },
];

export default function AgendaTimelineSection() {
  return (
    <section className="pb-8 pt-3">
      <div className="container-shell">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]/65">
            Kegiatan Terdekat
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-[color:var(--primary-strong)]">
            AGENDA KEGIATAN
          </h2>
        </div>

        <div className="section-panel rounded-[1.55rem] p-6 sm:p-8">
          <div className="relative pl-6 sm:pl-8">
            <div className="absolute bottom-0 left-[9px] top-0 w-[2px] bg-[linear-gradient(180deg,var(--accent),rgba(15,76,43,0.14))] sm:left-3" />
            <div className="grid gap-6">
              {agendas.map((agenda) => (
                <article key={agenda.title} className="relative">
                  <div className="absolute left-[-22px] top-2 h-5 w-5 rounded-full border-4 border-[color:var(--surface)] bg-[color:var(--accent)] shadow-[0_0_0_4px_rgba(15,76,43,0.08)] sm:left-[-26px]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]/62">
                    {agenda.date}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[color:var(--primary-strong)]">
                    {agenda.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
