import React from "react";

function EducationBridg() {
  return (
    <div className="  min-h-screen  mt-32">
      <div className="education_image mb-10">
        <img src="./Images/kolibri.webp" alt="kolibri" />
      </div>
      <div className="text px-4">
        <h4 className="space_grotesk font-bold mr-1 text-4xl sm:text-5xl md:text-6xl secondColor text-center mb-10">
          Bridge the{" "}
          <span className="color_395571 space_grotesk font-bold text-3xl sm:text-5xl lg:text-6xl ">
            learning divide
          </span>
        </h4>
        <p className="  md:text-xl mb-10 text-center">
          The built-in Kolibri app allows schools to access an enormous library
          of top-class educational content, even without an Internet connection.
          Learning materials can be shared with other devices peer-to-peer over
          a local network or imported from external drives to update the
          knowledge base on remote offline computers.
        </p>
        <p className="md:text-xl mb-10 text-center">
          We believe this will make it viable to bring a world-class learning
          experience to students in disconnected and underprivileged places
          around the world. And because Zorin OS Education Lite works on
          low-spec computers as old as 15 years, recycled PCs can become
          powerful tools that help bridge the educational divide.
        </p>
      </div>
    </div>
  );
}

export default EducationBridg;
