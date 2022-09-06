import Layout from "../components/Layout.js";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
