import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Connect_Slider() {
  return (
    <div className="Connect_swiper py-5">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        grabCursor={true}
        pagination={{ clickable: true }}
        loop={true}
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
        className="my-swiper mb-32"
      >
        <SwiperSlide className="swiper-slide-zorin">
          <div className="card">
            <h3 className="slide_text">
              Sync <span>notification</span> and <span>messages</span> between
              devices.
            </h3>
            <img
              src="https://assets.zorincdn.com/zorin.com/images/home/zorin-connect/sync.png"
              alt="silde photo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-zorin">
          <div className="card">
            <h3 className="slide_text">
              Send <span>files</span> and <span>photos</span> between your phone
              and computer.
            </h3>
            <img
              src="https://assets.zorincdn.com/zorin.com/images/home/zorin-connect/send.png"
              alt="slide image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-zorin">
          <div className="card">
            <h3 className="slide_text">
              Control your computer's <span>mouse</span> and{" "}
              <span>keyboard</span>.
            </h3>
            <img
              src="https://assets.zorincdn.com/zorin.com/images/home/zorin-connect/mouse-keyboard.png"
              alt="slide image"
              className="mouse_keyboard"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-zorin">
          <div className="card">
            <h3 className="slide_text">
              Use your phone as <span>slideshow remote</span> and{" "}
              <span>presentation pointer</span>
            </h3>
            <img
              src="https://assets.zorincdn.com/zorin.com/images/home/zorin-connect/remote.png"
              alt="slide image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-zorin">
          <div className="card">
            <h3 className="slide_text">
              Control <span>music</span> and <span>video</span> playback across
              yur devices
            </h3>
            <img
              src="https://assets.zorincdn.com/zorin.com/images/home/zorin-connect/media.png"
              alt="slide image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Connect_Slider;
