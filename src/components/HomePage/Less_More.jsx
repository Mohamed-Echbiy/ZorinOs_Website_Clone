import React from "react";

function Less_More() {
  return (
    <div className="flex justify-center flex-wrap min-h-screen">
      <div className="text flex flex-col justify-center px-4">
        <h4 className="space_grotesk font-bold text-4xl sm:text-5xl md:text-6xl secondColor flex items-center mb-2">
          Less
          <span className=" loading_indicatore ml-2 sm:ml-4 inline-block rounded-full w-7 h-7 sm:w-10 sm:h-10"></span>
        </h4>
        <h4 className=" italic space_grotesk font-bold text-3xl sm:text-5xl lg:text-6xl mb-6">
          More Speed
        </h4>
        <p className=" max-w-md md:text-xl mb-6">
          Your computer should work as fast as you do. Zorin OS runs lightning
          quick and doesn't slow down over time. Apps open fast, so you can
          spend more time being productive.
        </p>
      </div>
      <div className="figure_image relative w-2/4 z-10">
        <img
          src="https://assets.zorincdn.com/zorin.com/images/home/speed.png"
          alt="modern laptop"
          className=" absolute top-0 left-0 object-cover "
        />
      </div>
    </div>
  );
}

export default Less_More;
