import styles from "../../styles/components/BoothCard.module.scss";

import Image from "next/image";
import lineup1 from "../../public/lineup1-1500.jpg";

function BoothCard(props) {
  return (
    <section className={styles.BoothContainer}>
      <div className={styles.BoothImageWrapper}>
        <Image
          src={lineup1}
          alt="Picture of pastries."
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.BoothImageOverlay}>
        <h1>
          <mark>Our Booths.</mark>
        </h1>
      </div>
    </section>
  );
}

export default BoothCard;
