import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function ArtworkSwiper({ images }) {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={50}
        grabCursor={true}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="artwork_swiper mb-8"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i * 10098}>
            <div className="artwork_image ">
              <img
                src={img}
                alt="artwork image"
                className="mx-auto rounded-2xl drop-shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ArtworkSwiper;
