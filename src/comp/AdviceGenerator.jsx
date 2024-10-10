export default function AdviceGenerator() {
  return (
    <div className="bg-darkBlue h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="bg-darkGrayishBlue relative p-10 flex flex-col justify-center items-center max-w-xl rounded-lg">
          <h1 className="text-white font-manrope  text-xs font-bold tracking-extrawide">
            ADVICE #117
          </h1>

          <p className="font-manrope-800 text-lightCyan text-center text-[28px] font-bold mt-2">
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action"
          </p>
          <div className="flex justify-center pb-10 items-center mt-10">
            <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
          <div className="bg-neonGreen absolute -bottom-7 mt-6  p-4 rounded-full">
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
