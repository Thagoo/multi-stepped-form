export default function LevelStep({ level, setLevel }) {
  const inputs = [
    {
      value: "arithmetic",
      label: "Arithmetic",
      placeholder: "Introductory",
      icon: "/icons/mathLev/arithmetic.png",
    },
    {
      value: "basicAlgebra",
      label: "Basic Algebra",
      placeholder: "Foundational",
      icon: "/icons/mathLev/basic-algebra.png",
    },
    {
      value: "intermediateAlgebra",
      label: "Intermediate Algebra",
      placeholder: "Intermediate",
      icon: "/icons/mathLev/intermediate-algebra.png",
    },
    {
      value: "calculus",
      label: "Calculus",
      placeholder: "Advanced",
      icon: "/icons/mathLev/calculus.png",
    },
  ];

  const handleClick = (value) => {
    setLevel(value);
  };

  return (
    <div className="py-10 flex flex-col gap-4">
      <h3 className="mt-4 mb-4 text-2xl font-medium leading-none text-gray-900 dark:text-white text-center">
        What is your math comfort level?
      </h3>
      <p className="mb-8 text-xs font-medium leading-none text-gray-500 dark:text-white text-center">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </p>
      <div className="space-y-4 md:space-y-0 md:flex md:gap-3 ">
        {inputs.map((item, i) => (
          <div
            className={`p-4 flex flex-col items-center gap-6 border-[1px] min-w-56 border-slate-300 pl-4 py-4 rounded-lg  hover:border-slate-400  ${
              level == item.value ? "border-slate-600 shadow-md" : null
            }`}
            onClick={(e) => handleClick(item.value)}
          >
            <img src={item.icon} alt={item.value} className="h-14" />
            <div className="flex flex-col items-center">
              <span>{item.label}</span>
              <span className="text-gray-500">{item.placeholder}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
