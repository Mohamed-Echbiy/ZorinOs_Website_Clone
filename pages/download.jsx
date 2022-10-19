import React from "react";
import DownloadCard from "../src/components/DownloadPage/download_Common/DownloadCard";
import DropDown from "../src/components/DownloadPage/DropDown";
import { useState, useEffect } from "react";
import Link from "next/link";
import CompareEdition from "../src/common/CompareEdition";

function download() {
  const [windows, setWindows] = useState(false);
  useEffect(() => {
    if (typeof window === typeof window) {
      setWindows(true);
    }
  }, []);
  return (
    <div className="Download_Page pt-32 px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40">
      <div className="ZorinOS_Pro">
        <DownloadCard
          sTitle={"Zorin OS 16.1"}
          bTitle={"Pro"}
          vid={"./Videos/pro.webm"}
          btnText={"Download - $39"}
          linkText={"Learn more about Zorin OS Pro"}
          cardBg="bg-white"
        >
          <div className="children text-gray-500">
            <img
              src="https://assets.zorincdn.com/zorin.com/images/download/desktop.png"
              alt="desktop Icon"
            />
            <p>
              <span className="font-bold">Premium desktop layouts</span> (macOS,
              Windows 11 & Classic, and Ububtu){" "}
              <span className="font-bold">+ Standard layouts</span>
            </p>
          </div>
          <div className="children text-gray-500">
            <img
              src="https://assets.zorincdn.com/zorin.com/images/download/creative.png"
              alt="creative Icon"
            />
            <p>Professional-grade creative suite of apps</p>
          </div>
          <div className="children text-gray-500">
            <img
              src="https://assets.zorincdn.com/zorin.com/images/download/productivity.png"
              alt="productivity Icon"
            />
            <p> Advanced productivity software</p>
          </div>
          <div className="children text-gray-500">
            <img
              src="https://assets.zorincdn.com/zorin.com/images/download/old.png"
              alt="old desktop Icon"
            />
            <p> Includes Pro Lite edition for old PCs</p>
          </div>
          <div className="children text-gray-500">
            <img
              src="https://assets.zorincdn.com/zorin.com/images/download/support.png"
              alt="support Icon"
            />
            <p>Support the development of Zorin OS</p>
          </div>
        </DownloadCard>
      </div>
      <div className="zorinOs_wrapper lg:flex justify-between">
        <div className="ZorinOs_Core lg:mr-10 lg:w-2/4">
          <DownloadCard
            sTitle={"ZorinOS 16.1"}
            bTitle={"Core"}
            img={
              "https://assets.zorincdn.com/zorin.com/images/download/core.webp"
            }
            btnText={"Download - Free"}
            cardBg={"soft-blue-bg"}
          >
            <div className="child text-gray-500 text-center mx-auto mb-10 text-xl">
              <p className="text-center">For basic use on modern computers.</p>
            </div>
          </DownloadCard>
        </div>
        <div className="ZorinOs_Lite lg:ml-10 lg:w-2/4">
          <DownloadCard
            sTitle={"ZorinOS 16.1"}
            bTitle={"Lite"}
            img={"./Images/desktop.png"}
            btnText={"Download - Free"}
            cardBg={"soft-blue-bg"}
          >
            <div className="child text-gray-500 text-center mx-auto mb-10 text-xl">
              <p className="text-center">
                For basic use on low-spec PCs up to 15 years old.
              </p>
            </div>
          </DownloadCard>
        </div>
      </div>
      {windows && (
        <div className="compDropDown flex flex-wrap items-center">
          <CompareEdition />
          <div className="w-full">
            <Link href="https://help.zorin.com/docs/getting-started/check-the-integrity-of-your-copy-of-zorin-os/#correct-sha256-checksums">
              <a
                className="view__system text-cyan-500 font-bold text-2xl text-center my-24 block"
                target="_blank"
              >
                View SHA256 checksums <span className="arrow">{">"}</span>
              </a>
            </Link>
            <p className="my-4 text-gray-500 text-xl text-center mb-24">
              Special thanks to our
              <a
                href="https://zorin.com/os/mirrors"
                target="_blank"
                className=" underline"
              >
                official download mirrors.
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default download;
