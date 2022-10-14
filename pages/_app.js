import Footer from "../src/common/Footer";
import Header from "../src/common/Header";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/download.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zorin Os</title>
        <meta
          name="description"
          content="Zorin Os is light weight fast and secure distro based on unbuntu"
        />
      </Head>
      <div className="relative overflow-hidden w-full mx-auto">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
