import HeroSection from "../src/common/HeroSection";
import Zorin_Info from "../src/components/HomePage/Zorin_Info";
import Less_More from "../src/components/HomePage/Less_More";
import Old_Pc from "../src/common/Old_Pc";
import Card_Section from "../src/components/HomePage/Card_Section";
import Video from "../src/components/HomePage/Video";
import Connect_Slider from "../src/components/HomePage/Connect_Slider";
import Card from "../src/common/Card";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewContainer from "../src/common/ReviewContainer";
import { Autoplay } from "swiper";
import "swiper/css";
import QA from "../src/components/HomePage/QA";
import Link from "next/link";
import Desclaimer from "../src/components/HomePage/Desclaimer";

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
                  loading="lazy"
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
          xtitle={["documents and files."]}
          content={
            "Your documents, music, photos, and videos just work. Zorin OS comes pre-installed with the LibreOffice suite, which lets you view, create, and edit Microsoft Office documents. If you install Zorin OS alongside Windows, you can access the files on your Windows drive partition from within Zorin OS."
          }
        />
        <div className="remote_image px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 my-32">
          <img
            src="./Images/compatibility.webp"
            alt="computer with remote working written on it"
          />
        </div>
      </div>
      <div className="opinion_section px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 my-32 ">
        <div className="opinion_section_container py-16 rounded-3xl">
          <HeroSection
            title="Make your computer better."
            color=""
            content="Join the millions who have downloaded Zorin OS. You can get started for free."
            btnText={"Download Zorin OS"}
          />
          {windows && (
            <div className="opinions_swiper px-2">
              <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                }}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "…I enjoy using Zorin OS. It works flawlessly and I recommend it to everyone that I can."
                    }
                    authorName={"Benoit V"}
                    authorImage={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoFzeMYR_9DA1mbMbnEbmW_zMFuhOw340Or2YlqKeb28mt6PHyufdP0qYbWA8wT8_3C0&usqp=CAU"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "ZorinOS Just switched and could not be happier so much faster than windows 10 and looks amazing too."
                    }
                    authorImage={
                      "https://assets.zorincdn.com/zorin.com/images/home/testimonials/kingek.jpg"
                    }
                    authorName={"Kingek"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "Changed my full time work OS to ZorinOS and fell in love with it 😊️ 😊️ 😍️ 😍️. To me it looks like the OS of the future."
                    }
                    authorImage={
                      "https://assets.zorincdn.com/zorin.com/images/home/testimonials/gauransh-kumar.jpg"
                    }
                    authorName={"Gauransh K."}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "I like Zorin so much I named a weapon in my latest sci-fi book after it. 😊️"
                    }
                    authorImage={
                      "https://assets.zorincdn.com/zorin.com/images/home/testimonials/karl-drinkwater.jpg"
                    }
                    authorName={"Kari Drrinkwater"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      " is an extremely beautiful and elegant Operating System. Totally digging it."
                    }
                    authorImage={
                      "https://assets.zorincdn.com/zorin.com/images/home/testimonials/rishi-giri.jpg"
                    }
                    authorName={"Rishi Giri"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "So I've installed ZorinOS today, and all I have to say is... wow. Everything feels so sleek."
                    }
                    authorName={"Kieran Messer"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewContainer
                    text={
                      "Zorin looks really amazing! I am enjoying every click."
                    }
                    authorName={"Jan S."}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <div className="asked_questions md:flex flex-wrap justify-between px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
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
              View technical details about Zorin OS{" "}
              <span className="arrow">{">"}</span>
            </a>
          </Link>
        </div>
      </div>
      <Desclaimer />
    </main>
  );
}
