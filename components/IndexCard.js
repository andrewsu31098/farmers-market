import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/components/IndexCard.module.scss";

import about1 from "../public/about1-1500.jpg";
import activites1 from "../public/activities1-2000.jpg";
import lineup1 from "../public/lineup1-1500.jpg";

function IndexCard(props) {
  return (
    <section className={styles.IndexContainer} id="getStarted">
      <div className={styles.IndexCard}>
        <div className={styles.IndexFlexbox}>
          <div className={styles.RowOne}>
            <h2>Explore a wide range of activities.</h2>
            <p>
              {" "}
              Generations of farmers will celebrate their harvest with this
              annual two week festival.{" "}
            </p>{" "}
            <p>Come join in on the festivites!</p>
          </div>
          <div className={styles.RowTwo}>
            <div className={styles.RowColOne}>
              <h3>
                {" "}
                <IoLocationSharp /> Location
              </h3>
              <p>2345 Example Ave. City, CA 91000</p>
            </div>
            <div className={styles.RowColTwo}>
              <h3>
                {" "}
                <AiOutlineCalendar /> Date and Time
              </h3>{" "}
              <p> June 21 - July 5 </p>
              <p> Mon-Friday: 12pm - 7pm </p>
              <p> Sat-Sun: 11am - 8pm </p>
            </div>
          </div>
        </div>

        <div className={styles.IndexGrid}>
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <Link href="/booths">
                {/* <img src="/about1-1500.jpg" /> */}
                <Image src="/about1-1500.jpg" layout="fill" />
              </Link>
            </div>
            <div className={styles.IndexOverlayWrapper}>
              <p>Explore Booths</p>
            </div>
          </div>{" "}
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <Link href="/about">
                <Image src="/lineup1-1500.jpg" layout="fill" />
              </Link>
            </div>
            <div className={styles.IndexOverlayWrapper}>
              <p>About Us</p>
            </div>
          </div>{" "}
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <Image src="/activities1-2000.jpg" layout="fill" />
            </div>
            <div className={styles.IndexOverlayWrapper}>
              <p>Activities</p>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default IndexCard;
