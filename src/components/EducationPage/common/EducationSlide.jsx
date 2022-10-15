import React from "react";

function EducationSlide({ content, imgSrc, title }) {
  return (
    <div className="slide_container">
      <div className="slide_image mb-8">
        <img src={imgSrc} alt="imageSlider" className="rounded-3xl" />
      </div>
      <h3 className="slide_title mb-8 text-2xl font-bold text-center">
        {title}
      </h3>
      <p className="slide_content text-center md:text-xl mb-10">{content}</p>
    </div>
  );
}

export default EducationSlide;
