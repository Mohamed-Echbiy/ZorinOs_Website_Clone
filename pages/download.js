import React from "react";
import { useRouter } from "../node_modules/next/router";

function download() {
  const { route } = useRouter();
  console.log(route);
  return <div>download</div>;
}

export default download;
