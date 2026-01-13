import heroBg from "../../assets/Hero Section.png";
import logo from "../../assets/kinderra-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1440px]">
        <img
          src={logo}
          alt="Kinderra Play"
          className="absolute left-[58px] top-[41px] h-[231px] w-[185px] object-contain"
        />

        <div className="absolute left-[377px] top-[90px] flex h-[61px] w-[686px] items-center justify-center rounded-[32px] bg-[#D98956] text-[#FFFFFF]">
          <div className="absolute left-[34px] top-[20px] h-[20px] w-[18px]">
            <svg
              className="h-[20px] w-[18px]"
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
          </div>
          <p className="text-[17px] leading-[21px]">
            JOIN OUR TRIAL CLASS &amp; STORY BOOK PLAYDATE{" "}
            <span className="font-semibold">ON JANUARY 17 &amp; 24!</span>
          </p>
        </div>

        <button
          type="button"
          aria-label="Previous announcement"
          className="absolute left-[350px] top-[116px] h-[12px] w-[12px] text-[#D98956] opacity-[0.75]"
        >
          <svg
            className="h-[12px] w-[12px]"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2L4 6L8 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next announcement"
          className="absolute left-[1084px] top-[116px] h-[12px] w-[12px] text-[#D98956] opacity-[0.75]"
        >
          <svg
            className="h-[12px] w-[12px]"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2L8 6L4 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          className="absolute left-[1124px] top-[98px] flex h-[45px] w-[181px] items-center justify-center gap-[10px] rounded-[22px] border-[3px] border-[#6F5F52] bg-transparent"
        >
          <span className="text-[24px] font-semibold uppercase text-[#6F5F52]">
            Register
          </span>
          <svg
            className="h-[14px] w-[14px]"
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

        <h1 className="absolute left-[403px] top-[254px] text-[64px] font-semibold leading-[72px] text-[#6F5F52]">
          Early Learning Center
        </h1>
        <h2 className="absolute left-[535px] top-[337px] text-[40px] font-medium leading-[48px] text-[#6F5F52]">
          Play – Learn – Grow
        </h2>

        <p className="absolute left-[720px] top-[445px] w-[805px] -translate-x-1/2 text-center text-[20px] leading-[30px] text-[#6F5F52]">
          <span className="font-semibold">
            Kinderra Play, a premium early learning center
          </span>{" "}
          supporting the development of{" "}
          <span className="font-semibold">confident</span>,{" "}
          <span className="font-semibold">independent</span>, and{" "}
          <span className="font-semibold">communicative</span> children through guided{" "}
          <span className="font-semibold">play, discovery, and joy.</span>
        </p>
        <p className="absolute left-[720px] top-[520px] w-[875px] -translate-x-1/2 text-center text-[20px] leading-[30px] text-[#6F5F52]">
          Inspired by the{" "}
          <span className="font-semibold">
            Australian Early Years Learning Framework
          </span>
          , Kinderra Play delivers a calm, intentional, and professionally designed
          and structured learning experience—where play is purposeful and every day
          builds clear progress.
        </p>

        <button
          type="button"
          className="absolute left-[406px] top-[688px] flex h-[82px] w-[294px] flex-col items-center justify-center rounded-[54px] bg-[#D98956] text-[20px] font-semibold leading-[26px] text-white shadow-[0px_0px_10px_2px_rgba(255,210,49,0.5)]"
        >
          <span>Register for a</span>
          <span>Trial Class</span>
        </button>
        <button
          type="button"
          className="absolute left-[744px] top-[688px] flex h-[82px] w-[294px] flex-col items-center justify-center rounded-[54px] border-[3px] border-[#D98956] bg-transparent text-[20px] font-medium leading-[26px] text-[#D98956] shadow-[0px_0px_8px_1px_rgba(217,137,86,0.2)]"
        >
          <span>Get Enrollment</span>
          <span>Information</span>
        </button>

        <div className="absolute left-[240px] top-[860px] text-[40px] font-medium leading-[40px] text-[#6F5F52]">
          1-5 y.o
          <div className="mt-[8px] text-[20px] font-normal leading-[24px]">
            Age
          </div>
        </div>
        <div className="absolute left-[494px] top-[879px] h-[53px] w-[3px] rounded-[31px] bg-[#6F5F52]" />
        <div className="absolute left-[560px] top-[860px] text-[40px] font-medium leading-[40px] text-[#6F5F52]">
          Bilingual
          <div className="mt-[8px] text-[20px] font-normal leading-[24px]">
            Language
          </div>
        </div>
        <div className="absolute left-[814px] top-[879px] h-[53px] w-[3px] rounded-[31px] bg-[#6F5F52]" />
        <div className="absolute left-[874px] top-[860px] w-[296px] text-[40px] font-medium leading-[40px] text-[#6F5F52]">
          Full &amp; Half Day Programs
          <div className="mt-[8px] text-[20px] font-normal leading-[24px]">
            Program
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
