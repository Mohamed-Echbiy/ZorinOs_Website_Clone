import Footer from "../src/common/Footer";
import Header from "../src/common/Header";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zorin Os</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@300;400;700&display=swap"
          rel="stylesheet"
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
