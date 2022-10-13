import Footer from "../src/common/Footer";
import Header from "../src/common/Header";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zorin Os</title>
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
