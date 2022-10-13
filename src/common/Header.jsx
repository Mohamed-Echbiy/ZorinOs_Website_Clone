import { useState } from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";
import { ArrowDown } from "../Icons/Icons";
import Button from "./Button";

function Header() {
  const [openMenu, setMenu] = useState(false);
  const { route } = useRouter();
  // using the route (ex: /download === <a>download</a>) from nextjs router to set the active link
  const links = (
    <>
      <p className="mr-4 mb-2 mt-2 xs:block md:mb-0">
        <Link href="/">
          <a className={`unactive_link ${route === "/" && "active_link"}`}>
            Overview
          </a>
        </Link>
      </p>
      <p className="mr-4 mb-2 mt-2 xs:block md:mb-0">
        <Link href="/education">
          <a
            className={`unactive_link ${
              route === "/education" && "active_link"
            }`}
          >
            For Schools
          </a>
        </Link>
      </p>
      <p className="mr-4 mb-2 mt-2 xs:block md:mb-0">
        <Link href="/pro">
          <a className={`unactive_link ${route === "/pro" && "active_link"}`}>
            Pro
          </a>
        </Link>
      </p>
      <Button text={"Download"} />
    </>
  );
  return (
    <div className="containerHeader mx-auto px-4 md:px-10 lg:px-20 xl:px-28  2xl:px-40 z-30 fixed top-0 left-0 w-full">
      <div className="Header_Container flex items-center justify-between mt-8 h-16 px-8 rounded-3xl drop-shadow-md">
        <div className="logo w-40">
          <Link href="/">
            <a>
              <img
                src="https://assets.zorincdn.com/zorin.com/images/home/zorin-os.svg"
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="links hidden flex-grow items-center md:flex justify-end">
          {links}
        </div>
        <div className="menu md:hidden" onClick={() => setMenu((pre) => !pre)}>
          <ArrowDown />
        </div>
      </div>
      <div
        className={`${
          openMenu ? "block sm:flex translate-y-0" : " flex -translate-y-64"
        } mt-2 py-2 px-4 rounded-3xl mx-auto w-full z-50 justify-center items-center Header_Container duration-500 ease-in-out`}
      >
        {links}
      </div>
    </div>
  );
}

export default Header;
