import React, { Suspense, useEffect, useState } from "react";

const inputs = [
  {
    value: "fundamental-math",
    label: "Fundamental Math",
    placeholder:
      "Build your foundation skills in algebra, geometry and probability",
    icon: "/icons/learning-path/learning-path.png",
    popular: true,
  },
  {
    value: "mathematical-thinking",
    label: "Mathematical Thinking",
    placeholder:
      "Build your foundation skills in algebra, geometry and probability",
    icon: "/icons/learning-path/learning-path.png",
    popular: false,
  },
];

export default function LearningPath() {
  const [learningPath, setLearningPath] = useState();
  const [loading, setLoading] = useState(true);
  const handleClick = (value) => {
    setLearningPath(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-20 px-2 flex flex-col gap-4">
        <h3 className="mt-4 mb-4 text-2xl font-medium leading-none text-gray-900 dark:text-white text-center">
          Learning path based on your answers
        </h3>
        <p className="mb-8 text-xs font-medium leading-none text-gray-500 dark:text-white text-center">
          Choose one to get started. You can switch anytime.
        </p>
        <div className="md:flex space-y-4 md:space-y-0 md:gap-3 justify-center ">
          {inputs.map((item, i) => (
            <>
              {" "}
              <div
                className={`relative p-4 flex items-center gap-2 border-[1px] min-w-38 w-auto border-slate-300 pl-4 py-4 rounded-lg  hover:border-slate-400  ${
                  learningPath === item.value
                    ? "border-slate-600 shadow-md"
                    : null
                }`}
                onClick={(e) => handleClick(item.value)}
              >
                {" "}
                <div
                  className={`${
                    !item.popular && "hidden"
                  }  text-xs bg-yellow-300 rounded-xl px-4 py-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                >
                  MOST POPULAR
                </div>
                <div className="flex items-center max-w-52">
                  <p className="text-sm font-light">
                    <span className="font-semibold">{item.label}</span>&nbsp;
                    {item.placeholder}
                  </p>
                </div>
                <img src={item.icon} alt={item.value} className="h-28" />
              </div>
            </>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

function Loading() {
  return (
    <>
      <div className="h-screen flex flex-col gap-2 justify-center items-center px-10 md:px-44">
        <svg
          aria-hidden="true"
          class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <h1 className="text-sm md:text-xl font-medium">
          Finding learning path recomendations for you based on your selection
        </h1>
      </div>
    </>
  );
}
