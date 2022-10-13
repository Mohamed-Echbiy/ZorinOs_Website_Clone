import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Button from "./Button";
function HeroSection({
  title = "",
  xtitle = [""],
  content = "",
  btnText,
  color = "secondColor",
}) {
  // --------------
  //? title : stand for the title it has to be string
  //? xtitle : is the colored part of the title it has to be an array of strings or string
  //? content: is the the text content
  //? btnText : is the text in the button
  // ----------------
  return (
    <div className="text-center mb-16 px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
      <h2
        className={` mx-auto lg:max-w-5xl space_grotesk font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl mb-5 ${color}`}
      >
        {title}
      </h2>
      {xtitle.length > 1 ? (
        <Swiper
          direction={"vertical"}
          modules={[Autoplay]}
          autoplay={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className=" h-16 lg:h-24 overflow-hidden xl:mb-5"
        >
          {xtitle.map((e, index) => (
            <SwiperSlide key={index + 13231}>
              <h4 className="text-center text-3xl md:text-6xl sm:text-5xl xl:text-7xl font-bold h-full">
                {e}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h4 className="text-center text-3xl md:text-6xl sm:text-5xl xl:text-7xl font-bold mb-10  overflow-hidden ">
          {xtitle[0]}
        </h4>
      )}
      <p className="md:text-xl max-w-2xl mx-auto mb-6">{content}</p>
      {btnText && <Button text={btnText} />}
    </div>
  );
}

export default HeroSection;
