export default function InterestStep({ interest, setInterest }) {
  const inputs = [
    {
      value: "learning",
      label: "Learning",
      placeholder: "specific skills to advance my career",
      icon: "/icons/interest/learning.svg",
    },
    {
      value: "exploring",
      label: "Exploring",
      placeholder: "new topics I'm interested in",
      icon: "/icons/interest/exploring.svg",
    },
    {
      value: "refreshing",
      label: "Refreshing",
      placeholder: "my math foundations",
      icon: "/icons/interest/refreshing.svg",
    },
    {
      value: "exercising",
      label: "Exercising",
      placeholder: "my brain to stay sharp",
      icon: "/icons/interest/exercising.svg",
    },
    {
      value: "other",
      label: "Something else",
      placeholder: "",
      icon: "/icons/interest/other.svg",
    },
  ];

  const handleClick = (value) => {
    setInterest(value);
  };

  return (
    <>
      <h3 className=" mb-4 text-2xl font-medium leading-none text-gray-900 dark:text-white text-center">
        Which describe you the best?
      </h3>
      <p className="mb-8 text-xs font-medium leading-none text-gray-500 dark:text-white text-center">
        This will help personalize your experience.
      </p>
      <div className="flex flex-col gap-3 md:w-[50%]">
        {inputs.map((item, i) => (
          <div
            className={`flex gap-3 border-[1px] border-slate-300 pl-4 py-4 rounded-lg  hover:border-slate-500  ${
              interest === item.value ? "border-slate-600 shadow-md" : null
            }`}
            onClick={(e) => handleClick(item.value)}
          >
            <img
              src={item.icon}
              alt={item.value}
              className="h-6 md:h-6 "
              loading="lazy"
            />
            <div className="flex items-center">
              <span className="text-sm md:text-md">
                {item.label} <span>{item.placeholder}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
