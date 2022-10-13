import React from "react";

function ReviewContainer({ text, authorImage, authorName }) {
  return (
    <div className="opinion_wrapper p-10 bg-white rounded-2xl drop-shadow-md">
      <div className="opinion">
        <p className="text-gray-400 font-bold text-base md:text-lg xl:text-xl mb-5">
          " {text}"
        </p>
      </div>
      <div className="opinion_author flex justify-end items-center">
        <p className="author_name  text-gray-400 text-xl mr-5">
          __{authorName}
        </p>
        {authorImage && (
          <img
            src={authorImage}
            alt={authorName}
            className="author_image rounded-full w-12 h-12"
          />
        )}
      </div>
    </div>
  );
}

export default ReviewContainer;
