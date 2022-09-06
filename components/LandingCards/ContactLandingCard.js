import styles from "../../styles/components/ContactLandingCard.module.scss";

import Image from "next/image";
import lineup1 from "../../public/lineup4-2500.jpg";

function ContactLandingCard(props) {
  return (
    <section className={styles.CLContainer}>
      <div className={styles.CLImageWrapper}>
        <Image
          src={lineup1}
          alt="Picture of pastry breads."
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className={styles.CLImageOverlay}>
        <h1>
          <mark>Contact Us</mark>
        </h1>
      </div>
    </section>
  );
}

export default ContactLandingCard;
