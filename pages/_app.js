import Layout from "../components/Layout.js";
import "../styles/global.scss";
import { ParallaxProvider } from "react-scroll-parallax";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ParallaxProvider scrollAxis="vertical">
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}
