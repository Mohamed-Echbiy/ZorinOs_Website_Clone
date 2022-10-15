import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EducationSlide from "./common/EducationSlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function EducationSwiper() {
  return (
    <div className="swiper_parent max-w-2xl mx-auto">
      <Swiper
        spaceBetween={70}
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        navigation
        grabCursor={true}
        autoplay={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            spaceBetween: 10,
          },
          1028: {
            spaceBetween: 70,
          },
        }}
        className="education_swiper mb-16 px-10"
      >
        <SwiperSlide>
          <EducationSlide
            imgSrc={
              "https://assets.zorincdn.com/zorin.com/images/education/apps/16/scratch.jpg"
            }
            title="Scratch"
            content={
              "A programming environment that lets you create interactive stories, games, and animations. Scratch makes it easy and fun to learn programming, whether you're 8 or 80."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationSlide
            imgSrc="https://assets.zorincdn.com/zorin.com/images/education/apps/16/builder.jpg"
            title="Builder"
            content="A powerful programming environment (IDE) with all the features you need to create compelling desktop apps and world-class software."
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationSlide
            title="Fritzing"
            imgSrc="https://assets.zorincdn.com/zorin.com/images/education/apps/16/fritzing.jpg"
            content="Fritzing makes electronics accessible as a creative material for anyone. Quickly build electronics projects on your computer so you can prototype and experiment quicker."
          />
        </SwiperSlide>
        <SwiperSlide>
          <EducationSlide
            imgSrc="https://assets.zorincdn.com/zorin.com/images/education/apps/16/librecad.jpg"
            title="LiberCAD"
            content="A professional app for 2D computer aided design (CAD). Perfect for creating technical drawings of electronics schematics and mechanical parts."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default EducationSwiper;
