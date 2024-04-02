export default function OccupationStep({ occupation, setOccupation }) {
  const inputs = [
    {
      value: "student",
      label: "Student",
      placeholder: "or soon to be enrolled",
      icon: "/icons/occupation/student.png",
    },
    {
      value: "professional",
      label: "Professional",
      placeholder: "persuing a career",
      icon: "/icons/occupation/professional.png",
    },
    {
      value: "parent",
      label: "Parent",
      placeholder: "of school-age child",
      icon: "/icons/occupation/parent.png",
    },
    {
      value: "learner",
      label: "Lifelong learner",
      placeholder: "",
      icon: "/icons/occupation/learner.png",
    },
    {
      value: "teacher",
      label: "Teacher",
      placeholder: "",
      icon: "/icons/occupation/teacher.png",
    },
    {
      value: "other",
      label: "Other",
      placeholder: "",
      icon: "/icons/occupation/other.png",
    },
  ];

  const handleClick = (value) => {
    setOccupation(value);
  };

  return (
    <>
      <h3 className=" mb-4 text-2xl font-medium leading-none text-gray-900 dark:text-white text-center">
        Which describe you the best?
      </h3>
      <p className="mb-8 text-xs font-medium leading-none text-gray-500 dark:text-white text-center">
        This will help personalize your experience.
      </p>
      <div className="flex flex-col gap-3 w-80 md:w-[50%]">
        {inputs.map((item, i) => (
          <div
            key={i}
            className={`flex gap-3 border-[1px] border-slate-200 pl-4 py-4 rounded-lg  text-sm hover:border-slate-400 ${
              occupation == item.value ? "border-slate-500 shadow-md" : null
            }`}
            onClick={(e) => handleClick(item.value)}
          >
            <img src={item.icon} alt={item.value} className="h-6 " />
            <div>
              <span>{item.label}</span>&nbsp;
              <span className="text-slate-600">{item.placeholder}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
