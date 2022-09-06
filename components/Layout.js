// components/layout.js

import Navbar from "./Navbar.js";
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
