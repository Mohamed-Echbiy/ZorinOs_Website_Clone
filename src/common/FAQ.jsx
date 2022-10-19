import React from "react";
import HeroSection from "./HeroSection";
import QA from "../components/HomePage/QA";
import Link from "next/link";

function FAQ({ linkText, styling }) {
  return (
    <>
      <div
        className={`asked_questions md:flex flex-wrap justify-between px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 ${styling}`}
      >
        <div className="title_qa w-full">
          <HeroSection
            title="Frequently asked questions."
            color=".color_395571"
          />
        </div>
        <QA
          question={"Can I try Zorin OS before installing it on my computer?"}
          answer={
            "Absolutely! You can run Zorin OS from a USB drive to test-drive it without touching your computer's hard drive. When you're ready to install it, simply double-click on the 'Install Zorin OS' icon on the desktop and follow the step-by-step instructions on the screen."
          }
        />
        <QA
          question={"Will [insert app] work in Zorin OS?"}
          answer={
            "You can install a huge library of apps from the built-in Software store, including many popular apps you know and love. Zorin OS is also natively compatible with Ubuntu & Linux apps (.deb or .AppImage executables), and you can run many Windows apps by simply double-clicking on their .exe or .msi file."
          }
        />
        <QA
          question={"How much does Zorin OS cost?"}
          answer={
            "You can download and use the Core or Lite editions of Zorin OS completely free. For more advanced features, additional apps, and support, you can purchase Zorin OS Pro from here."
          }
        />
        <QA
          question={"How long does it take to get Zorin OS?"}
          answer={
            "The time it takes to download Zorin OS and create a USB install drive will depend on your Internet connection and hardware. Zorin OS usually takes between 10 and 20 minutes to install on your computer, just enough time to have a coffee. You can find out how to install Zorin OS here."
          }
        />
        <QA
          question={"Will my computer work with Zorin OS?"}
          answer={
            "if your computer 15 years old or newer, chance are it should work with Zorin OS. Ypu can check if your computer meets the system requirements. if you're thinking of purchasing Zorin OS Pro and aren't sure if your computer is compatible, you can download Zorin OS Core or Lite for free to test-drive it by running it from a USB flash drive first."
          }
        />
        <QA
          question={"How long will Zorin OS get software updates for?"}
          answer={
            "Zorin OS 16 will receive software updates and security patches until at least April 2025. We normally release major versions every 2 years, so you'll have plenty of time to upgrade to future versions to extend support."
          }
        />
        <div className="w-full">
          <Link href="https://zorin.com/os/details/">
            <a
              className="view__system text-cyan-500 font-bold text-2xl text-center my-10 block"
              target="_blank"
            >
              {linkText} <span className="arrow">{">"}</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FAQ;
