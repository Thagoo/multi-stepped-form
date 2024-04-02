import React, { useState } from "react";
import OccupationStep from "./steps/OccupationStep";
import InterestStep from "./steps/InterestStep";

const DemoComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Input values
  const [occupation, setOccupation] = useState("");
  const [interest, setInterest] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep !== 5) {
      setCurrentStep(currentStep + 1);
    } else {
      const formData = new FormData();
      formData.append("occupation", occupation);
      formData.append("interest", interest);
      let data = Object.fromEntries(formData);
      console.log(data);
    }
  };

  return (
    <div className="h-screen py-6 px-24 flex flex-col ">
      <ol className="flex items-center w-full mb-4 sm:mb-5">
        {[1, 2, 3, 4, 5].map((step) => (
          <li
            key={step}
            className={`flex-1 flex items-center justify-center ${
              currentStep >= step
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-600"
            }`}
            style={{
              position: "relative",
            }}
          >
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 w-full h-1 ${
                currentStep >= step
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              style={{
                zIndex: -1,
                width: `100%`,
              }}
            />
          </li>
        ))}
      </ol>

      <form onSubmit={handleNext}>
        <div className="flex flex-col justify-center items-center">
          {currentStep === 1 && (
            <OccupationStep
              occupation={occupation}
              setOccupation={setOccupation}
            />
          )}

          {currentStep === 2 && (
            <InterestStep interest={interest} setInterest={setInterest} />
          )}

          <button
            type="submit"
            className="mt-4 text-white w-24 self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoComponent;
