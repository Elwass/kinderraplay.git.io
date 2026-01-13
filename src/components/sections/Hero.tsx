import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="relative mx-auto w-[1440px] overflow-hidden">
        <div className="h-[900px] w-full bg-[#EDE5DD]" />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.60)]" />

        <div className="absolute inset-0 flex flex-col items-center px-[120px] pt-[36px] text-center text-text">
          <div className="flex w-full items-start justify-between">
            <div className="mt-[18px] h-[64px] w-[92px] rounded-[16px] bg-[#FFFFFF]" />

            <div className="flex items-center gap-[12px] rounded-[999px] bg-primary px-[18px] py-[10px] text-[#FFFFFF]">
              <span className="text-[16px] leading-[20px]">🔔</span>
              <span className="text-[12px] font-semibold uppercase leading-[16px] tracking-[0.8px]">
                JOIN OUR TRIAL CLASS &amp; STORY BOOK PLAYDATE ON JANUARY 17 &amp; 24!
              </span>
              <span className="text-[16px] leading-[20px]">‹</span>
              <span className="text-[16px] leading-[20px]">›</span>
              <Button
                variant="outline"
                className="ml-[8px] h-[28px] rounded-[999px] bg-[#FFFFFF] px-[14px] text-[10px] font-semibold uppercase leading-[12px]"
              >
                Register
              </Button>
            </div>

            <div className="h-[64px] w-[92px]" />
          </div>

          <h1 className="mt-[72px] text-[48px] font-semibold leading-[56px]">
            Early Learning Center
          </h1>
          <h2 className="mt-[8px] text-[24px] font-medium leading-[32px]">
            Play - Learn - Grow
          </h2>

          <p className="mt-[20px] max-w-[760px] text-[14px] leading-[22px]">
            Kinderra Play, a premium early learning center supporting the development
            of confident, independent, and communicative children through guided play,
            discovery, and joy.
          </p>
          <p className="mt-[12px] max-w-[760px] text-[14px] leading-[22px]">
            Inspired by the Australian Early Years Learning Framework, Kinderra Play
            delivers a calm, intentional, and professionally designed and structured
            learning experience—where play is purposeful and every day builds clear
            progress.
          </p>

          <div className="mt-[28px] flex items-center justify-center gap-[16px]">
            <Button
              variant="primary"
              className="h-[48px] rounded-[999px] px-[24px] text-[14px] leading-[18px]"
            >
              Register for a Trial Class
            </Button>
            <Button
              variant="outline"
              className="h-[48px] rounded-[999px] px-[24px] text-[14px] leading-[18px]"
            >
              Get Enrollment Information
            </Button>
          </div>

          <div className="mt-[64px] flex items-center justify-center gap-[32px] text-left">
            <div className="flex flex-col items-start gap-[6px]">
              <span className="text-[18px] font-semibold leading-[22px]">1-5 y.o</span>
              <span className="text-[12px] leading-[16px]">Age</span>
            </div>
            <div className="h-[36px] w-[1px] bg-[#D9CFC6]" />
            <div className="flex flex-col items-start gap-[6px]">
              <span className="text-[18px] font-semibold leading-[22px]">Bilingual</span>
              <span className="text-[12px] leading-[16px]">Language</span>
            </div>
            <div className="h-[36px] w-[1px] bg-[#D9CFC6]" />
            <div className="flex flex-col items-start gap-[6px]">
              <span className="text-[18px] font-semibold leading-[22px]">
                Full &amp; Half Day Programs
              </span>
              <span className="text-[12px] leading-[16px]">Program</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
