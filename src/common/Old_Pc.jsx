import Link from "next/link";
import React from "react";

function Old_Pc(props) {
  const { title, xtitle, content, isView, isMore } = props;
  return (
    <div className=" OldPc flex flex-col my-32 justify-center lg:flex-row items-center mx-auto px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
      <div className="old_pc_image lg:w-2/4 mb-10">
        <img src="./Images/desktop.png" alt="old desktop" />
      </div>
      <div className="content lg:w-2/4 w-fit">
        <h4 className=" space_grotesk font-bold text-3xl sm:text-5xl md:text-6xl mb-10">
          <span className="secondColor">{title}</span>{" "}
          <span className="">{xtitle}</span>
        </h4>
        <p className=" md:text-xl max-w-md mb-5 ">{content}</p>
        {/* isView to determine if the link : view system should appear */}
        {isView && (
          <Link
            href="https://help.zorin.com/docs/getting-started/system-requirements/#zorin-os-lite-education-lite-and-pro-lite-editions"
            target="_blank"
          >
            <a className="view__system text-cyan-500 font-bold text-xl mb-5 block">
              View system requirements <span className="arrow">{">"}</span>
            </a>
          </Link>
        )}
        {/* isMore is to show the quote from City of Vicenza, Italy or not */}
        {isMore && (
          <div className="bg-gray-100 p-8 max-w-lg">
            <blockquote className="mb-5 md:text-xl">
              " Because of the lower hardware requirements [of Zorin OS] alone,
              we're expecting to extend the life of the city's PCs by 30-40% "
            </blockquote>
            <div>
              <div className="flex items-center justify-end">
                <p className="font-bold text-lg mr-4 ">
                  ― City of Vicenza, Italy
                </p>
                <img
                  src="./Images/vicenza.jpg"
                  alt="vicenza logo "
                  width={35}
                  height={48}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Old_Pc;
