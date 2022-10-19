import React from "react";
import DesktopLayout from "./common/DesktopLayout";

function Desktops_layout() {
  return (
    <>
      <div className="pro_premium_desktop_layouts_wrapper bg-white p-10 pb-0 rounded-3xl flex justify-between flex-wrap">
        <h3 className="w-full text-2xl font-bold space_grotesk mb-5">
          Premium desktop layouts{" "}
          <span className="secondColor">only in Zorin OS Pro</span>
        </h3>
        <DesktopLayout text={"macOS"} imgSrc="./Images/macos.jpg" />
        <DesktopLayout text={"Windows"} imgSrc="./Images/windows-11.jpg" />
        <DesktopLayout
          text={"Window Classic"}
          imgSrc="./Images/windows-classic.jpg"
        />
        <DesktopLayout text={"Ubuntu"} imgSrc="./Images/ubuntu.jpg" />
      </div>
      <p className="plusIcon secondColor text-4xl w-full text-center my-6">+</p>
      <div className="pro_stander_desktop_layouts_wrapper bg-white p-10 pb-0 rounded-3xl flex justify-between flex-wrap">
        <h3 className="w-full text-2xl font-bold space_grotesk mb-5">
          Standard desktop layouts
        </h3>
        <DesktopLayout text={"Windows"} imgSrc="./Images/windows-icons.jpg" />
        <DesktopLayout
          text={"Windows List"}
          imgSrc="./Images/windows-list.jpg"
        />
        <DesktopLayout text={"Touch"} imgSrc="./Images/touch.jpg" />
        <DesktopLayout text={"GNOME Shell"} imgSrc="./Images/gnome-shell.jpg" />
      </div>
    </>
  );
}

export default Desktops_layout;
