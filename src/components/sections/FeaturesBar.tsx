const features = [
  {
    title: "Adaptation of Australia’s EYLF Curriculum",
    icon: (
      <svg
        className="h-[28px] w-[28px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 19C6 15.6863 8.68629 13 12 13C15.3137 13 18 15.6863 18 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 3H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Safe Environment & Trained Teachers",
    icon: (
      <svg
        className="h-[28px] w-[28px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L19 6V12C19 16.5 15.5 19.5 12 21C8.5 19.5 5 16.5 5 12V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12.5L11 14L14.5 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Integrated Preschool & Daycare",
    icon: (
      <svg
        className="h-[28px] w-[28px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10L12 4L20 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10V20H18V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 20V14H14V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Premium Experience - Smart Pricing",
    icon: (
      <svg
        className="h-[28px] w-[28px]"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L14.9 8.6L21 9.2L16.5 13.1L17.8 19L12 15.8L6.2 19L7.5 13.1L3 9.2L9.1 8.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const FeaturesBar = () => {
  return (
    <section className="w-full bg-[#F6EFE7]">
      <div className="mx-auto w-full max-w-[1440px] px-[48px] py-[20px]">
        <div className="grid gap-[24px] text-[#6F5F52] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-[12px]">
              <div className="text-[#6F5F52]">{feature.icon}</div>
              <p className="text-[14px] leading-[20px]">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
