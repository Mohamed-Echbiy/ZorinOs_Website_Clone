import HeroSection from "../src/common/HeroSection";
import Zorin_Info from "../src/components/HomePage/Zorin_Info";
import Less_More from "../src/components/HomePage/Less_More";
import Old_Pc from "../src/common/Old_Pc";
import Card_Section from "../src/components/HomePage/Card_Section";
import Video from "../src/components/HomePage/Video";
import Connect_Slider from "../src/components/HomePage/Connect_Slider";
import Card from "../src/common/Card";
import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";

export default function Home() {
  const [windows, setWindows] = useState(false);
  useEffect(() => {
    if (typeof window === typeof window) {
      setWindows(true);
    }
  }, []);
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
        <div className="App_bg flex justify-center items-center my-32">
          <HeroSection
            title={"A world of incredible"}
            xtitle={["Apps."]}
            content={
              "Zorin OS comes with all the essential apps you need out of the box, so you can get working right away. Discover thousands of powerful apps from the built-in Software store. You can even run many Windows apps in Zorin OS with App support"
            }
          />
        </div>
        <Video />
        <div className="Game__section text-center mb-32 px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
          <h3 className="Game__section_title secondColor space_grotesk font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-5">
            Ready. Set. <span className="color_395571">Game!</span>
          </h3>
          <p className="Game__section_text md:text-xl max-w-2xl mx-auto mb-10">
            Play an enormous library of your favorite games, whether they're AAA
            titles or indie games. Install native Linux and Windows games from
            Steam, Lutris, and other sources. Zorin OS comes loaded with NVIDIA
            & AMD Radeon graphics drivers and game optimizations, so you can get
            the best performance easily.
          </p>
          <div className="Game__section_gameToplay p-10 pb-0 max-w-4xl mx-auto bg-gray-200 rounded-2xl">
            <h5 className="games secondColor space_grotesk font-extrabold text-lg md:text-2xl xl:text-3xl mb-10">
              Play <span className="color_395571">thousands of games</span>{" "}
              from...
            </h5>
            <div className="platforms__list flex flex-wrap justify-center items-center">
              <div className="platform mr-10 mb-10">
                <img
                  className="mb-5 w-16 mx-auto"
                  src="./Images/steam.png"
                  alt="steam"
                />
                <p className="font-bold">Steam</p>
              </div>
              <div className="platform mr-10 mb-10">
                <img
                  className="mb-5 w-16 mx-auto"
                  src="./Images/lutris.png"
                  alt="lutris"
                />
                <p className="font-bold">Lutris</p>
              </div>
              <div className="platform mr-10 mb-10">
                <img
                  className="mb-5 w-16 mx-auto"
                  src="./Images/epic-games.png"
                  alt="Epic games"
                />
                <p className="font-bold">Epic Games</p>
              </div>
              <div className="platform mr-10 mb-10">
                <img
                  className="mb-5 w-16 mx-auto"
                  src="./Images/itchio.png"
                  alt="itchio"
                />
                <p className="font-bold">itch.io</p>
              </div>
              <div className="platform mb-10">
                <img
                  className="mb-5 w-16 mx-auto"
                  src="./Images/gog.png"
                  alt="GOG"
                />
                <p className="font-bold">GOG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSection
        title={"Your phone and computer work as one with "}
        xtitle={["Zorin Connect."]}
        content={
          "Zorin Connect is integrated into the Zorin OS desktop to merge the experience between your computer and Android device. It works over an encrypted connection on your local network, so your data stays private and doesn't reach the cloud."
        }
      />
      {windows && <Connect_Slider />}
      <div className="my-32 px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 flex flex-wrap justify-between">
        <Card
          variant={"bg-gradient-black"}
          classname="lg:w-2/5 lg:mr-10 xl:mr-20"
        >
          <span className="block font-bold text-gray-100 mb-10 text-lg md:text-2xl">
            Dual boot.
          </span>
          <p>
            You can install Zorin OS{" "}
            <span className="font-bold text-gray-100">alongside Windows</span>{" "}
            or
            <span className="font-bold text-gray-100">macOS</span>to keep your
            files and apps. You'll be able to choose which OS to use at each
            boot-up.
          </p>
        </Card>
        <Card
          variant={"bg-gradient-purple"}
          classname="lg:w-2/5 lg:mr-10 xl:mr-20"
        >
          <span className="block font-bold text-gray-100 mb-10 text-lg md:text-2xl">
            Accessibility.
          </span>
          <p>
            Zorin OS is translated into{" "}
            <span className="font-bold text-gray-100">over 100 languages.</span>{" "}
            It includes a screen reader, magnifier, click assist, and other
            <span className="font-bold text-gray-100">
              assistive technologies.
            </span>
          </p>
        </Card>
      </div>
      <div className="Remote_section my-32">
        <HeroSection
          title={"Compatible with your"}
          xtitle={["Compatible with your"]}
          content={
            "Your documents, music, photos, and videos just work. Zorin OS comes pre-installed with the LibreOffice suite, which lets you view, create, and edit Microsoft Office documents. If you install Zorin OS alongside Windows, you can access the files on your Windows drive partition from within Zorin OS."
          }
        />
        <div className="remote_image px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
          <img
            src="./Images/compatibility.webp"
            alt="computer with remote working written on it"
          />
        </div>
        <div className="opinion_section px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 my-16 py-16">
          <HeroSection
            title="Make your computer better."
            color="color_395571"
            content="Join the millions who have downloaded Zorin OS. You can get started for free."
            btnText={"Download Zorin OS"}
          />
          <Swiper></Swiper>
        </div>
      </div>
    </main>
  );
}
