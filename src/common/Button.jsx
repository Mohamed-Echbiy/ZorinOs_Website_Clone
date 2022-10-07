import React from "react";

function Button({ text }) {
  return (
    <button className="btn px-4 py-2 bg-cyan-500 mt-2 md:ml-3 rounded-lg font-semibold text-white max-w-fit">
      {text}
    </button>
  );
}

export default Button;
