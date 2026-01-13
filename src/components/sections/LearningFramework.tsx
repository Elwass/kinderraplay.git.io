const pillars = [
  {
    title: "Sense & Sensory",
    description:
      "Aktivitas eksploratif dengan tekstur, aroma, dan warna untuk menstimulasi rasa ingin tahu.",
  },
  {
    title: "Move & Grow",
    description:
      "Gerak terarah untuk mengasah motorik kasar, koordinasi, dan ketahanan fisik anak.",
  },
  {
    title: "Think & Communicate",
    description:
      "Literasi awal, bercerita, dan bermain peran untuk membangun kemampuan bahasa.",
  },
  {
    title: "Care & Character",
    description:
      "Kebiasaan baik, empati, dan rasa tanggung jawab yang ditanamkan sejak dini.",
  },
];

const LearningFramework = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Learning Framework
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Kerangka belajar menyeluruh untuk tumbuh optimal.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text/70">
            Setiap aktivitas di Kinderra dirancang untuk menstimulasi empat pilar utama
            agar anak berkembang seimbang secara emosional, sosial, dan kognitif.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-[#F1E6DB] bg-[#FFF9F3] p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-lg font-semibold text-primary">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-text">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningFramework;
