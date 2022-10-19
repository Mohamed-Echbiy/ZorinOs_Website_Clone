import React from "react";

function OtherApps({ props }) {
  const { appname, color } = props;
  console.log(appname, color);

  return (
    <p
      className={`px-10 py-5 bg-white rounded-2xl opacity-50 font-bold uppercase w-fit ${color}`}
    >
      {appname}
    </p>
  );
}

export default OtherApps;
