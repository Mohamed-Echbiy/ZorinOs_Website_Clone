import HeroSection from "../src/common/HeroSection";
import Zorin_Info from "../src/components/HomePage/Zorin_Info";
import Less_More from "../src/components/HomePage/Less_More";
import Old_Pc from "../src/common/Old_Pc";
import Card_Section from "../src/components/HomePage/Card_Section";

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
        <Old_Pc
          title={"Revive your"}
          xtitle={"old PC"}
          content={
            "We've streamlined the Zorin OS Lite edition to work on computers as old as 15 years. With it, you can keep using your PC for longer to save money on upgrades and reduce e-waste to help the environment."
          }
          isView={true}
          isMore={true}
        />
        <Card_Section />
        <div className="App_bg min-h-screen flex justify-center items-center my-32">
          <HeroSection
            title={"A world of incredible"}
            xtitle={["Apps."]}
            content={
              "Zorin OS comes with all the essential apps you need out of the box, so you can get working right away. Discover thousands of powerful apps from the built-in Software store. You can even run many Windows apps in Zorin OS with App support"
            }
          />
        </div>
      </div>
    </main>
  );
}
