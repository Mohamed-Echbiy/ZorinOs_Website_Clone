import React from "react";

function Card({ children, variant = "bg-gradient-blue", classname }) {
  // the card accept three varient black , green and blue
  return (
    <div
      className={`card  p-10 ${variant} ${classname} font-semibold rounded-2xl text-gray-300 md:text-3xl md:leading-normal text-2xl flex-grow mb-10`}
    >
      {children}
    </div>
  );
}

export default Card;
