import React from "react";

function Video() {
  return (
    <div className="mb-10 ">
      <figure className="video_container w-2/4 aspect-square mx-auto relative">
        <video
          src="./Videos/games.webm"
          autoPlay={true}
          playsInline={true}
          poster="https://assets.zorincdn.com/zorin.com/images/home/games-cover.jpg"
          muted=""
          loop={true}
          className="video absolute top-2/4 left-2/4 w-full"
        >
          <source
            data-src="./Video/games.webm"
            type="video/webm"
            src="./Video/games.webm"
          />
        </video>
      </figure>
    </div>
  );
}

export default Video;
