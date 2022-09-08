import styles from "../../styles/components/AboutCard.module.scss";

import Image from "next/image";
import about1 from "../../public/about1-banner-3000.jpg";

function AboutCard(props) {
  return (
    <section className={styles.AboutContainer}>
      <div className={styles.ABCImageWrapper}>
        <Image
          src={about1}
          alt="Picture of farmers."
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority="true"
        />
      </div>
      <div className={styles.ABCImageOverlay}>
        <h1>
          <mark>About Us.</mark>
        </h1>
      </div>
    </section>
  );
}

export default AboutCard;
