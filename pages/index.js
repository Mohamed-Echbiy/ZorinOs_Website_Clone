import Button from "../src/common/Button";
import Footer from "../src/common/Footer";
import Header from "../src/common/Header";
import HeroSection from "../src/common/HeroSection";

export default function Home() {
  return (
    <main className="MainContainer">
      <HeroSection
        title={"Make your computer"}
        xtitle={[
          "better.",
          "faster.",
          "easier.",
          "more powerful.",
          "more secure.",
          "more reliable.",
        ]}
        content={
          "Zorin OS is the alternative to Windows and macOS designed to make your computer faster, more powerful, secure, and privacy-respecting."
        }
        btnText={"Download Zorin Os"}
      />
      <div className="backgroundImage1"></div>
    </main>
  );
}
