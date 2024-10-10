import { getAdvice } from "../api/service";
import { useEffect, useState } from "react";

export default function AdviceGenerator() {
  const [advice, setAdvice] = useState(null); // Set initial state to null

  const handleClick = async () => {
    const data = await getAdvice();
    setAdvice(data);
  };

  useEffect(() => {
    const getInit = async () => {
      const first = await getAdvice();
      setAdvice(first);
    };

    getInit();
  }, []);

  return (
    <div className="bg-darkBlue h-screen w-screen">
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="bg-darkGrayishBlue relative p-6 sm:p-10 flex flex-col justify-center items-center w-full max-w-md sm:max-w-xl rounded-lg">
        {advice && advice.slip ? (
          <>
            <h1 className="text-neonGreen font-manrope text-xs sm:text-sm font-bold tracking-wider sm:tracking-extrawide">
              ADVICE #{advice.slip.id}
            </h1>
  
            <p className="font-manrope-800 text-lightCyan text-center text-lg sm:text-[28px] font-bold mt-2">
              {advice.slip.advice}
            </p>
          </>
        ) : (
          <h1 className="text-white font-manrope text-xs sm:text-sm font-bold tracking-wider sm:tracking-extrawide">
            Loading advice...
          </h1>
        )}
  
        <div className="flex justify-center pb-6 sm:pb-10 items-center mt-6 sm:mt-10">
          <svg width="200" height="8" sm:width="444" sm:height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 4h196v1H0zM248 4h196v1H248z" />
              <g transform="translate(212)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
  
        <div
          onClick={handleClick}
          className="bg-neonGreen absolute -bottom-7 mt-6 p-3 sm:p-4 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(34,255,0,0.7)]"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  );
}
