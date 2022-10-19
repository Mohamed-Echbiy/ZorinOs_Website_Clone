import React from "react";

function DesktopLayout({ text, imgSrc }) {
  return (
    <div className="pro_desktop_layout rounded-lg flex-grow md:flex-grow-0 overflow-hidden">
      <div className="desktop_layout_image">
        <img
          src={imgSrc}
          alt="desktop image"
          className="desktop_image hover:scale-105 ease-out"
        />
      </div>
      <div className="pro_desktop_layout_text mt-5">
        <h4 className="desktop_name font-bold mb-10">
          {text}
          <span className="secondColor">-like</span>
        </h4>
      </div>
    </div>
  );
}

export default DesktopLayout;
