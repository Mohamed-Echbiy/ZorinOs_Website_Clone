import React from "react";
import Link from "../../node_modules/next/link";
import { Facebook, Twitter, Wifi } from "../Icons/Icons";
import Button from "./Button";
import List from "./List";

function Footer() {
  return (
    <div className="footer-container footerColorBg px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-52 py-8">
      <div className="logo-newletter py-5  lg:flex items-center">
        <div className="logo mb-10 mr-40 w-40">
          <Link href="/">
            <a>
              <img
                src="https://assets.zorincdn.com/zorin.com/images/home/zorin-os.svg"
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="newsLetter mb-10 flex items-center flex-wrap">
          <p className="newsletter__text">
            Get the latest news about Zorin and tips in your inbox.
          </p>
          <Button text={"Subscribe to our newsletter"} />
        </div>
      </div>
      <div className="more_info lg:flex flex-wrap">
        <div className="icons-madeIn mr-28">
          <p className="text-lg mb-10">Made with ☘️ in Ireland.</p>
          <div className="icons mb-10 flex items-center">
            <Facebook />
            <Twitter />
            <Wifi />
          </div>
        </div>
        <div className="footer__links lg:flex flex-wrap justify-between flex-grow">
          <List
            title={"Products"}
            items={["Zorin Os", "Zorin Grid", "Computers"]}
          />
          <List
            title={"Help"}
            items={[
              "How to install Zorin Os",
              "System Requirements",
              "Switch Your Organization",
              "Other Help Articles",
            ]}
          />
          <List
            title={"Company"}
            items={["About", "Blog", "Press Kit", "Donate"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
