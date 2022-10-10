import React from "react";

function Zorin_Info() {
  return (
    <div className="Zorin_Info flex flex-wrap justify-center my-16">
      <div className="info w-3/12 max-w-lg px-3 md:px-5 xl:px-10">
        <img
          className="mx-auto"
          src="./Images/forbes.png"
          alt="Forbes"
          height={74}
          width={144}
        />
        <p className=" text-center my-5">
          “[Zorin OS] is just so clean and polished. I don’t really anticipate a
          learning curve for new users.”
        </p>
      </div>
      <div className="info w-3/12 max-w-lg px-3 md:px-5 xl:px-10">
        <img
          className="mx-auto"
          src="./Images/zdnet.png"
          alt="ZDNET"
          height={74}
          width={144}
        />
        <p className=" text-center my-5">
          “Zorin OS puts on a masterclass for what a desktop operating system
          should be”
        </p>
      </div>
      <div className="info w-3/12 max-w-lg px-3 md:px-5 xl:px-10">
        <img
          className="mx-auto"
          src="./Images/techradar.png"
          alt="techradar"
          height={74}
          width={144}
        />
        <p className=" text-center my-5">
          “It has everything in terms of offering a friendly and usable
          experience to those coming from… Windows or macOS”
        </p>
      </div>
      <div className="info w-3/12 max-w-lg px-3 md:px-5 xl:px-10">
        <img
          className="mx-auto"
          src="./Images/pcworld.png"
          alt="pcworld"
          height={74}
          width={144}
        />
        <p className=" text-center my-5">
          “When speed is of the essence, Zorin OS really shines”
        </p>
      </div>
    </div>
  );
}

export default Zorin_Info;
