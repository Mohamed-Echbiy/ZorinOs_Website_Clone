import React from "react";
import DropDown from "../components/DownloadPage/DropDown";

function CompareEdition() {
  return (
    <>
      <div className="title_DropDown mb-10 font-bold text-center text-2xl md:text-5xl w-full">
        <h3 className="title">Compare Zorin OS editions.</h3>
      </div>
      <DropDown
        title={"LibreOffice suite"}
        desc={"compatible with Microsoft Office"}
        ispro={true}
        iscore={true}
        islite={true}
        bgColor={"blue-gray-bg"}
      />
      <DropDown
        title={"Advanced desktop"}
        desc={"based on GNOME"}
        ispro={true}
        iscore={true}
        islite={false}
        bgColor={"white-blue-bg"}
      />
      <DropDown
        title={"Lightweight desktop"}
        desc={"based on XFCE"}
        ispro={true}
        iscore={false}
        islite={true}
        bgColor={"blue-gray-bg"}
      />
      <DropDown
        title={"Zorin Connect"}
        desc={"link your phone and computer together"}
        ispro={true}
        iscore={true}
        islite={false}
        bgColor={"white-blue-bg"}
      />
      <DropDown
        title={"Standard desktop layouts"}
        desc={"in Zorin Appearance"}
        ispro={true}
        iscore={true}
        islite={true}
        bgColor={"blue-gray-bg"}
      />
      <DropDown
        title={"Premium desktop layouts"}
        desc={"macOS, Windows 11 & Classic, and Ubuntu"}
        ispro={true}
        iscore={false}
        islite={false}
        bgColor={"white-blue-bg"}
      />
      <DropDown
        title={"Professional-grade creative suite of apps"}
        ispro={true}
        iscore={false}
        islite={false}
        bgColor={"blue-gray-bg"}
      />
      <DropDown
        title={"Advanced productivity software"}
        ispro={true}
        iscore={false}
        islite={false}
        bgColor={"white-blue-bg"}
      />
      <DropDown
        title={"Additional artwork"}
        desc={"curated collection of abstract wallpapers"}
        ispro={true}
        iscore={false}
        islite={false}
        bgColor={"blue-gray-bg"}
      />
      <DropDown
        title={"Zorin Installation Support"}
        ispro={true}
        iscore={false}
        islite={false}
        bgColor={"white-blue-bg"}
      />
    </>
  );
}

export default CompareEdition;
