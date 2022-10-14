import Link from "next/link";
import React from "react";
import Button from "../../../common/Button";

function DownloadCard({
  children,
  sTitle,
  bTitle,
  img,
  btnText,
  cardBg,
  vid,
  linkText,
}) {
  console.log(children);
  return (
    <div
      className={`download_card ${cardBg} p-10 rounded-2xl ${
        children.length > 1 && "lg:flex"
      } flex-wrap justify-between items-center mb-16`}
    >
      <div className="download_card_title text-center mb-10 w-full">
        <h3 className="small_title text-3xl space_grotesk ">{sTitle}</h3>
        <h4 className="big_title text-6xl font-bold"> {bTitle} </h4>
      </div>
      <div
        className={`download_card_children ${
          children.length > 1 && "lg:w-2/5"
        } `}
      >
        {children}
      </div>
      <div
        className={`download_card_image-Video mb-20 ${
          children.length > 1 && "lg:w-2/4 mx-auto max-w-sm"
        }`}
      >
        {img && <img src={img} alt="desktop picture" className=" mx-auto" />}
        {vid && <video src={vid} loop autoPlay></video>}
      </div>
      <div className="download_button text-center w-full lg:mt-10">
        <Button text={btnText} />
      </div>
      {linkText && (
        <div className="w-full">
          <Link href="https://zorin.com/os/details/">
            <a
              className="view__system text-cyan-500 font-bold text-2xl text-center my-4 block"
              target="_blank"
            >
              {linkText} <span className="arrow">{">"}</span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DownloadCard;
