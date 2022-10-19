import React, { useEffect, useState } from "react";
import Button from "../src/common/Button";
import HeroSection from "../src/common/HeroSection";
import Apps_Swiper from "../src/components/ProPage/Apps_Swiper";
import ArtworkSwiper from "../src/components/ProPage/ArtworkSwiper";
import Desktops_layout from "../src/components/ProPage/Desktops_Layout";
import Old_Pc from "../src/common/Old_Pc";
import Card from "../src/common/Card";
import CompareEdition from "../src/common/CompareEdition";
import FAQ from "../src/common/FAQ";

function pro() {
  const [windows, setWindows] = useState(false);
  useEffect(() => {
    if (typeof window === typeof window) {
      setWindows(true);
    }
  }, []);
  return (
    <div className="pro_page_container text-center pro_bg">
      <div className="pro_hero_section px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40 pb-36 pt-44 bg-white">
        <HeroSection
          title="Zorin OS 16.1 Pro"
          xtitle={["Unleash your computer."]}
        />
        <video
          src="./Videos/pro.webm"
          loop
          muted
          autoPlay
          className="mx-auto"
        ></video>
        <p className="md:text-xl max-w-2xl mx-auto mt-2 mb-3">
          Zorin OS Pro brings together the best apps and most advanced features,
          so you can unleash the full potential of your computer to do your
          greatest work.
        </p>
        <Button text={"Download - $36"} />
      </div>
      <div className="pro_desktops py-10 px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
        <HeroSection
          title="Pick a desktop."
          xtitle={["Any desktop."]}
          content="The Zorin Appearance app has been extended to include all 8 desktop layouts in Zorin OS Pro. That way, you can use the desktop you're familiar with or simply customize your computer to how you like it."
        />
        <Desktops_layout />
      </div>
      <div className="pro_productivity rounded-3xl pb-10 mx-4 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40  pro_second-bg relative mb-24">
        <div className="pro_second-bg md:px-10 pt-10">
          <h4 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-16">
            Advanced productivity software.
          </h4>
          <div className="productivity_container aspect-video relative">
            <img
              src="./Images/barrier.png"
              alt="productivity image"
              className="absolute w-full"
            />
          </div>
          <div className="text">
            <HeroSection
              title="Share your mouse and keyboard"
              xtitle={["across computers."]}
              content="Use one mouse and keyboard to control all of your computers with the Barrier app. Simply move the cursor to the edge of the screen to switch between devices seamlessly. It even shares the clipboard, so you can copy text from one computer to paste into a document on another computer. All communication happens over an encrypted connection on your local network, so you can stay safe while typing passwords and working with sensitive data across computers."
            />
          </div>
          <div className="productivity_container aspect-square relative">
            <img
              src="./Images/xournal.png"
              alt="productivity image"
              className="absolute w-full top-2/4 -translate-y-2/4"
            />
          </div>
          <div className="text">
            <HeroSection
              title="Write, sketch, scribble,"
              xtitle={["and speak your notes."]}
              content="Take notes or annotate images & PDF documents effortlessly with the Xournal++ app. Pick up a pen to write naturally, draw diagrams with automatic shape recognition, or simply type with your keyboard. It can even record audio from the microphone while taking notes, so you can remember everything from your meetings or lectures."
            />
          </div>
        </div>
        <div className="cast_your_screen">
          <HeroSection
            title="Cast your desktop "
            xtitle={["to the big screen."]}
            content="The Network Displays app allows you to share your desktop with other displays seamlessly and wirelessly. It connects over your local network and works with Wi-Fi Display or Miracast-compatible devices, like most modern TVs or Wireless Display Adapters. It's perfect for playing back videos at home or showing your presentation at the office without needing to fiddle with cables."
          />
          <div className="cast_desktop-image aspect-video relative">
            <img
              src="./Images/network-displays.webp"
              alt="network displays image"
              className="absolute w-full"
            />
          </div>
          <span className="secondColor text-xs text-center">
            Film: Spring (Blender Animation Studio)
          </span>
          <p className="text-sm text-center">
            Created with Blender, GNU Image Manipulation Program, and Krita,
            which are included in Zorin OS Pro.
          </p>
        </div>
        <div className="pro_desktop_other_apps mt-24">
          <div className="other_apps_images mb-6">
            <img
              src="./Images/other-productivity-apps.png"
              alt="other app image"
              className="mx-auto object-cover"
            />
          </div>
          <h4 className="font-bold text-3xl mb-8">
            …and many other productivity apps.
          </h4>
          <div className="apps_train mt-4 xl:px-16">
            {windows && (
              <>
                <Apps_Swiper
                  slides={[
                    { appname: "3d cad", color: "text-violet-900" },
                    { appname: "mind maps", color: "text-blue-700" },
                    { appname: "e-book reader", color: "text-red-500" },
                    { appname: "break timer", color: "text-violet-900" },
                    { appname: "accounting software", color: "text-blue-700" },
                    { appname: "to do", color: "text-red-500" },
                  ]}
                />
                <Apps_Swiper
                  slides={[
                    { appname: "Screen recorder", color: "text-violet-900" },
                    { appname: "office suite", color: "text-blue-700" },
                    { appname: "2d cad", color: "text-red-500" },
                    { appname: "password manager", color: "text-violet-900" },
                    { appname: "ambient sounds", color: "text-blue-700" },
                    { appname: "virtual machine", color: "text-red-500" },
                  ]}
                  revers={true}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="pro_artwork mb-32">
        <HeroSection
          title="Stunning artwork"
          xtitle={["to inspire you."]}
          content="Zorin OS Pro includes a curated collection of beautiful abstract wallpapers in addition to the standard set. They help to form an environment that will spark your creativity."
        />
        {windows && (
          <ArtworkSwiper
            images={[
              "./Images/cubes.jpg",
              "./Images/liquid.jpg",
              "./Images/drops.jpg",
              "./Images/electric.jpg",
              "./Images/flow.jpg",
              "./Images/orbit.jpg",
              "./Images/glow.jpg",
              "./Images/white-waves.jpg",
              "./Images/shadows.jpg",
              "./Images/paint.jpg",
            ]}
          />
        )}
      </div>
      <div className="pro_lite mb-32">
        <Old_Pc
          title="Pro Lite edition"
          xtitle="for old PCs."
          content="Every purchase of Zorin OS Pro comes with a Lite edition. It runs fast on old computers but still includes Premium desktop layouts, the creative suite, and productivity apps like in the Pro edition."
        />
      </div>
      <div className="pro_support mb-32">
        <HeroSection
          title="Get help from us with"
          xtitle={["Zorin Installation Support."]}
          content="Have any questions or queries while setting up Zorin OS? Zorin OS Pro comes bundled with the Zorin Installation Support service which lets you get technical support for one computer, directly from our team."
        />
        <Card
          variant="bg-gradient-orange"
          classname={
            "text-start px-4 mx-4 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 md:flex items-center"
          }
        >
          <img
            src="https://assets.zorincdn.com/zorin.com/images/pro/support.svg"
            alt="heart icon"
            className=" w-32 mb-5 flex-shrink-0 md:mr-10"
          />
          <div className="card_text flex-shrink">
            <span className="block font-bold  text-gray-200 mb-10 text-lg md:text-2xl">
              Support the development of Zorin OS.
            </span>
            <p>
              As an independent company, we want to create great products that{" "}
              <span className="font-bold text-white">
                give back your privacy and freedom.
              </span>{" "}
              Every purchase of Zorin OS Pro helps to fund our operations, so we
              can
              <span className="font-bold text-white">
                improve Zorin OS further
              </span>{" "}
              for the benefit of all.
            </p>
          </div>
        </Card>
      </div>
      <div className="pro_compare_edition flex flex-wrap px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
        {windows && <CompareEdition />}
      </div>
      <div className="callToAction py-14 mx-4 md:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 my-32 rounded-3xl pro_second-bg">
        <HeroSection
          title="Take learning further."
          btnText={"Download Zorin OS Pro - $39"}
          color="color_395571 "
        />
      </div>
      <FAQ
        linkText={"More information about purchasing Zorin OS Pro"}
        styling="pb-32"
      />
    </div>
  );
}

export default pro;
