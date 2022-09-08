import { AiFillPhone, AiFillShop, AiFillMail } from "react-icons/ai";

import styles from "../styles/components/ContactCard.module.scss";
import buttonStyles from "../styles/components/Button.module.scss";

function ContactCard(props) {
  return (
    <section className={styles.ContactContainer}>
      <div className={styles.ContactCard}>
        <div className={styles.ContactGrid}>
          <aside className={styles.ContactInfo}>
            <h3>Contact Us</h3>
            <p>
              Interested in hosting your booth? Call to book a time with us!{" "}
            </p>

            <p className={styles.CIField}>
              <AiFillShop />
              2345 Example Ave. City, CA 91000{" "}
            </p>
            <p className={styles.CIField}>
              <AiFillPhone />
              (345) 789-0123
            </p>
            <p className={styles.CIField}>
              <AiFillMail />
              johndoe@example.com
            </p>
          </aside>
          <form className={styles.ContactForm}>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Message"
              className={`${styles.inputField} ${styles.inputMessage}`}
            />
            <input
              className={`${buttonStyles["btn-third"]} ${styles["inputSubmit"]}`}
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
