import React from "react";
import HeroSection from "../src/common/HeroSection";
import EducationSwiper from "../src/components/EducationPage/EducationSwiper";
import Old_Pc from "../src/common/Old_Pc";
import EducationBridg from "../src/components/EducationPage/EducationBridg";
import Link from "next/link";

function education() {
  return (
    <div className="education_page_container ">
      <div className="education_hero pt-40 pb-10 education_hero_bg mb-16">
        <HeroSection
          title="Zorin OS 16.1 Education"
          xtitle={["21st century learning."]}
          content="We believe computers have the power to make learning better and more impactful. That's why we created Zorin OS Education. It helps prepare students with the skills they need to understand the world of today and build their world of tomorrow."
          btnText={"Download - Free"}
        />
      </div>
      <div className="teach_section px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <HeroSection
          title="Teach coding and "
          xtitle={["Engineering."]}
          content="Zorin OS Education includes powerful and engaging tools that help you to teach STEM skills. Whether you want to develop students' creativity and problem-solving skills or help them build incredible software and hardware, you can prepare your students to succeed in the 21st century."
        />
        <EducationSwiper />
      </div>
      <div className="education_old_pc px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <Old_Pc
          title="Your old Pcs."
          xtitle="Made new again."
          content="The Zorin OS Education Lite edition is streamlined to work on computers as old as 15 years. That way, you can keep using your PCs for longer and spend your resources on the things that matter most."
          isView={"true"}
        />
      </div>
      <div className="education_bridge_learning px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
        <EducationBridg />
      </div>
      <div className="education_clasroom_control px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
        <figure className="education_classroom_image w-2/4 aspect-square mx-auto relative ">
          <img
            src="./Images/veyon.png"
            alt="veyon app image"
            className=" absolute top-2/4 left-2/4 w-full"
          />
        </figure>
        <HeroSection
          title="Keep the class on-task with "
          xtitle={["classroom control."]}
          content="Using the Veyon management console, teachers can see what every student is doing at a glance. Staff can even take control of students' computers when they need help, or broadcast their screen to their students; remotely and wirelessly over the local network."
          btnText="Install Veyon"
        />
      </div>
      <div className="education_zorin_grid mt-24 pb-24 mb-10">
        <p className="md:text-xl space_grotesk font-bold text-center mb-10 text-gray-500">
          ZORIN GRID - COMMING SOON
        </p>
        <HeroSection
          title="Manage all of your school's computers."
          xtitle={["As easily as one."]}
          content="Zorin Grid is a tool that makes it simple to set up, manage, and secure a fleet of Zorin OS-powered computers. Whether students and teachers are at school or learning from home, IT staff can deploy new apps, configure settings, and administrate computers without repetitive and costly maintenance."
        />
        <Link href="https://zorin.com/grid/">
          <a
            className="view__system text-cyan-500 font-bold mb-16 md:text-lg text-center w-fit mx-auto block"
            target="_blank"
          >
            learn more about Zorin Grid <span className="arrow">{">"}</span>
          </a>
        </Link>
        <div className="zorin_grid_img w-full h-80 md:h-96"></div>
      </div>
      <Link href="https://zorin.com/os/">
        <a
          className="view__system text-cyan-500 font-bold mb-32 md:text-lg text-center w-fit mx-auto block"
          target="_blank"
        >
          See more advantages of Zorin OS <span className="arrow">{">"}</span>
        </a>
      </Link>
      <div className="eduction_callToAction py-14 mx-4 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 mb-10 rounded-3xl">
        <HeroSection
          title="Take learning further."
          btnText={"Download Zorin OS Education - free"}
          color="color_395571 "
        />
      </div>
    </div>
  );
}

export default education;
