import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Button from "./Button";
function HeroSection(props) {
  //   console.log(props);
  const { title, xtitle, content, btnText } = props;
  return (
    <div className="text-center mb-16">
      <h2 className=" secondColor space_grotesk font-bold text-3xl sm:text-5xl md:text-6xl mb-5">
        {title}
      </h2>
      <Swiper
        direction={"vertical"}
        modules={[Autoplay]}
        autoplay={true}
        spaceBetween={10}
        slidesPerView={1}
        className=" h-16 lg:h-24 overflow-hidden"
      >
        {xtitle.map((e, index) => (
          <SwiperSlide key={index + 13231}>
            <h4 className="text-center text-3xl md:text-6xl sm:text-5xl font-bold">
              {e}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="md:text-xl max-w-2xl mx-auto mb-6">{content}</p>
      {btnText && <Button text={btnText} />}
    </div>
  );
}

export default HeroSection;
