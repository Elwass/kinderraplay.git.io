import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[#FFFFFF]">
      <div className="relative mx-auto min-h-screen w-[1440px] overflow-hidden">
        <div className="min-h-screen w-full bg-[#EDE5DD]" />
        <div className="pointer-events-none absolute inset-0 bg-[rgba(255,255,255,0.60)]" />

        <div className="absolute inset-0 flex flex-col items-center px-[120px] pt-[32px] text-center text-text">
          <div className="flex w-full items-start justify-between">
            <div className="mt-[20px] h-[64px] w-[92px] rounded-[16px] bg-[#FFFFFF]" />

            <div className="relative flex items-center justify-center">
              <button
                type="button"
                aria-label="Previous announcement"
                className="absolute left-[-60px] flex h-[36px] w-[36px] items-center justify-center text-primary opacity-100 transition hover:opacity-[0.85]"
              >
                <svg
                  className="h-[28px] w-[28px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-[12px] rounded-[999px] bg-primary px-[18px] py-[10px] text-[#FFFFFF]">
                <svg
                  className="h-[16px] w-[16px]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C7.7 2.5 5.8 4.4 5.8 6.7V9.6C5.8 10 5.7 10.4 5.5 10.8L4.4 12.7C4.1 13.2 4.5 13.8 5.1 13.8H14.9C15.5 13.8 15.9 13.2 15.6 12.7L14.5 10.8C14.3 10.4 14.2 10 14.2 9.6V6.7C14.2 4.4 12.3 2.5 10 2.5Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.3 15.2C8.6 16.1 9.2 16.6 10 16.6C10.8 16.6 11.4 16.1 11.7 15.2"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[12px] leading-[16px] tracking-[0.8px]">
                  <span className="font-semibold uppercase">
                    JOIN OUR TRIAL CLASS
                  </span>
                  <span className="uppercase"> &amp; STORY BOOK PLAYDATE ON </span>
                  <span className="font-semibold uppercase">JANUARY 17 &amp; 24!</span>
                </span>
              </div>
              <button
                type="button"
                aria-label="Next announcement"
                className="absolute right-[-60px] flex h-[36px] w-[36px] items-center justify-center text-primary opacity-100 transition hover:opacity-[0.85]"
              >
                <svg
                  className="h-[28px] w-[28px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <button
              type="button"
              className="mt-[6px] inline-flex h-[42px] min-w-[176px] items-center justify-center gap-[12px] rounded-[999px] border-[2px] border-text bg-[#F6EFE7] px-[24px] text-[12px] font-semibold uppercase leading-[14px] text-text shadow-[0_4px_10px_rgba(111,95,82,0.12)]"
            >
              Register
              <svg
                className="h-[12px] w-[12px]"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6H10M6 2L10 6L6 10"
                  stroke="#6F5F52"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <h1 className="mt-[72px] text-[52px] font-bold leading-[60px]">
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

          <div className="mt-[32px] flex items-center justify-center gap-[20px]">
            <Button
              variant="primary"
              className="h-[56px] w-[188px] rounded-[999px] px-[20px] text-[14px] leading-[18px] shadow-[0_12px_24px_rgba(217,137,86,0.35)]"
            >
              <span className="text-center leading-[18px]">
                Register for a
                <br />
                Trial Class
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-[56px] w-[188px] rounded-[999px] px-[20px] text-[14px] leading-[18px] shadow-[0_10px_20px_rgba(217,137,86,0.15)]"
            >
              <span className="text-center leading-[18px]">
                Get Enrollment
                <br />
                Information
              </span>
            </Button>
          </div>

          <div className="mt-[68px] flex items-center justify-center gap-[48px] text-left">
            <div className="flex flex-col items-start gap-[10px]">
              <span className="text-[18px] font-semibold leading-[22px]">1-5 y.o</span>
              <span className="text-[12px] leading-[16px]">Age</span>
            </div>
            <div className="h-[44px] w-[2px] bg-[#CBBDB1]" />
            <div className="flex flex-col items-start gap-[10px]">
              <span className="text-[18px] font-semibold leading-[22px]">Bilingual</span>
              <span className="text-[12px] leading-[16px]">Language</span>
            </div>
            <div className="h-[44px] w-[2px] bg-[#CBBDB1]" />
            <div className="flex flex-col items-start gap-[10px]">
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
