// components/layout.js

import Navbar from "./navbar";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
