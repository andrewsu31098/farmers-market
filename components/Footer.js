import {
  AiFillPhone,
  AiFillShop,
  AiFillMail,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

import styles from "../styles/layout/Footer.module.scss";

const weeklyHours = [
  "Monday: 8am-6pm",
  "Tuesday: 8am-6pm",
  "Wednesday: 8am-6pm",
  "Thursday: 8am-6pm",
  "Friday: 8am-6pm",
  "Saturday: Closed",
  "Sunday: Closed",
];

function Footer(props) {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.footer}>
        <img className={styles.footerIcon} src="/templateImage.png" />
        <div className={styles.footerLinks}>
          {" "}
          <div className={styles.footerTab}>
            <h2>Location</h2>
            <p>
              <AiFillShop />
              2345 Example Ave. City, CA 91000{" "}
            </p>
            <p>
              <AiFillPhone />
              (345) 789-0123
            </p>
            <p>
              <AiFillMail />
              johndoe@example.com
            </p>
          </div>
          <div className={styles.footerTab}>
            <h2>Hours</h2>
            {weeklyHours.map((day) => (
              <p>{day}</p>
            ))}
          </div>
          <div className={styles.footerTab}>
            <h2>Connect with us!</h2>
            <div className={styles.footerSocials}>
              <a>
                <AiFillFacebook />
              </a>
              <a>
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
