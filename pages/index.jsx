import HeroSection from "../src/common/HeroSection";
import Zorin_Info from "../src/components/HomePage/Zorin_Info";
import Image from "next/image";
import Less_More from "../src/components/HomePage/Less_More";

export default function Home() {
  return (
    <main className="MainContainer">
      <div className="Hero__Section">
        <HeroSection
          title={"Make your computer"}
          xtitle={[
            "better.",
            "faster.",
            "easier.",
            "more powerful.",
            "more secure.",
            "more reliable.",
          ]}
          content={
            "Zorin OS is the alternative to Windows and macOS designed to make your computer faster, more powerful, secure, and privacy-respecting."
          }
          btnText={"Download Zorin Os"}
        />
        <div className="backgroundImage">
          <div className="bg-photo">
            <img src="./Images/hero.webp" alt="stock image" />
          </div>
        </div>
      </div>
      <Zorin_Info />
      <div className="Hero__Section__2">
        <HeroSection
          title={"A familiar desktop you"}
          xtitle={["already know how to use"]}
          content={
            "Zorin OS is designed to be easy, so you don't need to learn anything to get started. The Zorin Appearance app lets you change the desktop layout to feel like the environment you're familiar with, whether it's Windows, macOS, or Linux."
          }
        />
        <div className="bg-image mb-16"></div>
        <Less_More />
      </div>
    </main>
  );
}
