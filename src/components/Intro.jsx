import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <div className="bg-cover bg-center"></div>
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-white">
        Stay Fit!
      </h1>
      <p className="text-base md:text-xl mb-3 font-lg text-white">
        Hold yourself accountable with this application to log your workout
      </p>
    </div>
  );
}

export default Intro;
