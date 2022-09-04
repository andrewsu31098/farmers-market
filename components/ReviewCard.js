//Sections have a wide range of variety
//Because of this, recommended practice is to inherit the abstract css
//And make your own section css.
import styles from "../styles/components/ReviewCard.module.scss";

function ReviewCard(props) {
  return (
    <section className={styles.ReviewContainer}>
      <div className={styles.ReviewCard}>
        <h2> A history of happy families.</h2>
        <div className={styles.ReviewGrid}>
          <div className={styles.RGCol1}>
            <div className={styles.Review}>
              {" "}
              <h3>Jane Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className={styles.Review}>
              <h3>Jonathon Borne</h3>{" "}
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className={styles.RGCol2}>
            <div className={styles.Review}>
              <h3>John Doe</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCard;
