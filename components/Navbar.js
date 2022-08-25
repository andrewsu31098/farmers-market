import Link from "next/link";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { tabletQuery } from "../utilities/breakpoints.js";

import styles from "../styles/layout/Navbar.module.scss";

const navPages = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/#About",
  },
  {
    name: "Menu/Services/Portfolio",
    path: "/#Services",
  },
  {
    name: "Contact",
    path: "/#Contact",
  },
  {
    name: "Order",
    path: "/#Call",
  },
];

function Navbar(props) {
  var isTablet = useMediaQuery({
    query: tabletQuery,
  });

  const [drawerState, setDrawer] = useState(false);
  const [barClasses, setBarClasses] = useState(styles.navBurgerBar);

  const navPageComponents = navPages.map(({ name, path }, index) => (
    <Link key={path + index} href={path}>
      <a>{name}</a>
    </Link>
  ));

  const navLinks = (
    <div className={styles.navLinks}>
      <div className={styles.navPages}>{navPageComponents}</div>
    </div>
  );

  const navBurgerButton = (
    <div className={styles.navBurgerButton} onClick={onDrawerClick}>
      <div className={`${styles.navBurgerBar} ${barClasses}`}></div>
    </div>
  );

  const dropDownMenu = (
    <div
      className={
        drawerState
          ? `${styles.dropDownMenu} ${styles.openMenu}`
          : styles.dropDownMenu
      }
    >
      {navPages.map(({ name, path }, index) => (
        <div>
          <Link key={path + index + "dropdown"} href={path}>
            <a>{name}</a>
          </Link>{" "}
        </div>
      ))}
    </div>
  );

  const cloak = <div className={styles.cloak} onClick={onCloakClick}></div>;

  function onDrawerClick(e) {
    if (barClasses === "") {
      setBarClasses(styles.openButton);
      setDrawer(true);
    } else {
      setBarClasses("");
      setDrawer(false);
    }
  }

  function onCloakClick(e) {
    setBarClasses("");
    setDrawer(false);
  }

  return (
    <>
      <div className={styles.toolbar}></div>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Missing-image-232x150.png"
            className={styles.navbarLogo}
          />
          <div>{!isTablet ? navLinks : navBurgerButton}</div>
        </nav>
      </div>
      {dropDownMenu}
      {drawerState ? cloak : null}
    </>
  );
}

export default Navbar;
