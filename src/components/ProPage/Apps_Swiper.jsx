import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import OtherApps from "./common/OtherApps";

function Apps_Swiper({ slides, revers = false }) {
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        autoplay={{
          delay: 10,
          disableOnInteraction: false,
          reverseDirection: revers,
        }}
        loop={true}
        speed={3000}
        centeredSlidesBounds={true}
        className="app-swiper mt-8"
      >
        {slides.map((s, index) => (
          <SwiperSlide key={index + 400000} className="app_swiper_slider">
            <OtherApps props={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Apps_Swiper;
