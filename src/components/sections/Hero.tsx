import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-beige px-6 pb-16 pt-10 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Kinderra Play Preschool
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-text md:text-5xl">
            Tempat bermain yang menumbuhkan rasa ingin tahu dan karakter baik.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-text/80">
            Program holistik untuk anak usia dini dengan pendekatan bermain, eksplorasi,
            dan kebiasaan harian yang terstruktur agar anak tumbuh percaya diri, mandiri,
            dan ceria.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Daftar Kunjungan</Button>
            <Button variant="secondary">Lihat Program</Button>
          </div>
          <div className="grid gap-4 pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-text">12+</p>
              <p className="text-sm text-text/70">Aktivitas mingguan yang variatif</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-2xl font-semibold text-text">1:6</p>
              <p className="text-sm text-text/70">Rasio guru dan anak</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-blue/70" />
          <div className="absolute -left-6 bottom-4 h-24 w-24 rounded-full bg-primary/30" />
          <div className="relative rounded-[40px] bg-white p-6 shadow-[0_25px_60px_rgba(111,95,82,0.15)]">
            <div className="space-y-4 rounded-[32px] bg-[#FFF9F3] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Learning at Kinderra
                </span>
                <span className="text-xs text-text/70">Ages 2-6</span>
              </div>
              <h2 className="text-xl font-semibold text-text">
                Guided play, mindful moments, and joyful discovery.
              </h2>
              <div className="grid gap-3">
                {[
                  "Sensory & art exploration",
                  "Storytelling & literacy",
                  "Motor skills & outdoor play",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-text/80"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
