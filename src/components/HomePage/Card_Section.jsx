import React from "react";
import Card from "../../common/Card";

function Card_Section() {
  return (
    <div className="my-32 px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 flex flex-wrap justify-between">
      {/*
       choose between bg-gradient-black or bg-gradient-purple or bg-gradient-green 
      or bg-gradient-blue variant // default : bg-gradient-blue
      */}
      <Card
        variant={"bg-gradient-blue"}
        classname={"lg:w-2/5 lg:mr-10 xl:mr-20"}
      >
        <span className="block font-bold text-gray-100 mb-10 text-lg md:text-2xl">
          Reliable.
        </span>
        <p>
          With an Ubuntu and Linux foundation, Zorin OS is built on the same
          Open Source software that powers the{" "}
          <span className="font-bold text-gray-100">U.S.</span>{" "}
          <span className="font-bold text-gray-100">Department of Defense</span>{" "}
          and computers on the{" "}
          <span className="font-bold text-gray-100">
            International Space Station
          </span>
          .
        </p>
      </Card>
      <Card variant={"bg-gradient-green"} classname={"lg:w-2/5"}>
        <span className="block font-bold text-gray-100 mb-10 text-lg md:text-2xl">
          Secure
        </span>
        <p>
          Thanks to the advanced security features of Linux, Zorin OS is
          <span className="font-bold text-gray-100">
            {" "}
            resistant to PC viruses and malware.
          </span>{" "}
          Security patches and software updates arrive quickly and are available
          for years to come.
        </p>
      </Card>
      <Card variant={"bg-gradient-black"}>
        <div className="block lg:flex items-center">
          <img
            src="https://assets.zorincdn.com/zorin.com/images/home/privacy.png"
            alt="Lock picture"
            width={128}
            className="mr-10 mb-10"
          />
          <div className="card_text_content">
            <span className="block font-bold text-gray-100 mb-10 text-lg md:text-2xl">
              Privacy-respecting.
            </span>
            <p className=" text-gray-400 md:text-3xl md:leading-normal text-2xl">
              Privacy-respecting. We believe privacy is a fundamental human
              right. That's why Zorin OS{" "}
              <span className="font-bold text-gray-100">
                doesn't collect personal data,
              </span>{" "}
              so advertisers and governments can't spy on your activity. Zorin
              OS is{" "}
              <span className="font-bold text-gray-100">Open Source,</span> so
              anyone can audit its{" "}
              <span className="underline">source code</span> to verify its
              privacy.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Card_Section;
