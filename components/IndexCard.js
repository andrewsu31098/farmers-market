//Sections have a wide range of variety
//Because of this, recommended practice is to inherit the abstract css
//And make your own section css.
import styles from "../styles/components/IndexCard.module.scss";

function IndexCard(props) {
  return (
    <section className={styles.IndexContainer} id="getStarted">
      <div className={styles.IndexCard}>
        <h2>Explore a wide range of activities.</h2>
        <p>
          {" "}
          Generations of farmers have celebrated their harvest with this weekly
          annual event.
        </p>
        <p>
          {" "}
          Specialty Lembas Bread booths, Bottomless Mead Drinking Competitions,
          and region specific berry harvests are all ready for this one weekly
          farmer's market festival.{" "}
        </p>
        <div className={styles.IndexGrid}>
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <img src="/about1-1500.jpg" />
            </div>
            <div className={styles.IndexOverlayWrapper}>
              <p>Explore Booths</p>
            </div>
          </div>{" "}
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <img src="/lineup1-1500.jpg" />
            </div>
            <div className={styles.IndexOverlayWrapper}>
              <p>About Us</p>
            </div>
          </div>{" "}
          <div className={styles.IndexGridItem}>
            <div className={styles.IndexImageWrapper}>
              <img src="/activities1-2000.jpg" />
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
