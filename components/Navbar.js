import Link from "next/link";
import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";
import { tabletQuery } from "../utilities/breakpoints.js";

import styles from "../styles/layout/Navbar.module.scss";

const navPages = [
  { name: "Home", path: "/", value: 0 },
  {
    name: "About",
    path: "/about",
    value: 1,
  },
  {
    name: "Menu/Services/Portfolio",
    path: "/services",
    value: 2,
  },
  {
    name: "Contact",
    path: "/contact",
    value: 3,
  },
  {
    name: "Order",
    path: "/order",
    value: 4,
  },
];

function Navbar(props) {
  var isTablet = useMediaQuery({
    query: tabletQuery,
  });

  // State variables for Navbar
  const [tabIndex, setTabIndex] = useState(0);
  const [drawerState, setDrawer] = useState(false);
  const [barClasses, setBarClasses] = useState("");

  // Updating lifecycle behavior
  function listenToPopstate() {
    navPages.forEach(({ path, value }) => {
      if (window.location.pathname === path) {
        setTabIndex(value);
      }
      console.log("I think this one is the current path");
      console.log(window.location.pathname);
    });
  }

  useEffect(() => {
    listenToPopstate();
  }, []);

  // Pieces of the NavBar
  const navPageComponents = navPages.map(({ name, path, value }) => (
    <div
      className={tabIndex === value ? styles.tabSelected : null}
      key={path + value + "navbar"}
    >
      <Link key={path + value} href={path}>
        <a onClick={(e) => onPageSelect(value)}>{name}</a>
      </Link>
    </div>
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
      {navPages.map(({ name, path, value }) => (
        <div
          className={tabIndex === value ? styles.burgerTabSelected : null}
          onClick={(e) => onPageSelect(value)}
          key={path + value + "dropdown"}
        >
          <Link href={path}>
            <a>{name}</a>
          </Link>{" "}
        </div>
      ))}
    </div>
  );

  const cloak = <div className={styles.cloak} onClick={onCloakClick}></div>;

  // Functions for buttons
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
  function onPageSelect(pageValue) {
    setTabIndex(pageValue);
    console.log(pageValue);
  }

  // Hydration Fix
  // Dynamic content requires itself to be rendered on page load.
  // useMediaQuery doesn't render on page load.
  // I have to use "useEffect" to force my content to render
  // only when the page has loaded once already.
  const [myTabletCheck, setMyTabletCheck] = useState(false);
  useEffect(() => {
    setMyTabletCheck(isTablet);
  }, [isTablet]);

  return (
    <div>
      <div className={styles.toolbar}></div>
      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <img src="/templateImage.png" className={styles.navbarLogo} />
          <div>
            {!myTabletCheck && navLinks} {myTabletCheck && navBurgerButton}
          </div>
          {/* {!isTablet ? navLinks : navBurgerButton} */}
        </nav>
      </div>
      {dropDownMenu}
      {drawerState ? cloak : null}
    </div>
  );
}

export default Navbar;
