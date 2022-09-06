import styles from "../styles/components/FarmerCard.module.scss";

function FarmerCard(props) {
  return (
    <section className={styles.FarmerContainer}>
      <div className={styles.FarmerCard}>
        <h2> About our Farmers</h2>
        <div className={styles.FarmerBioWrapper}>
          <article className={styles.FarmerBio}>
            <div className={styles.FCBioTextWrapper}>
              <div className={styles.FCBioText}>
                <h5>John Doe. Father of 4, 40 Years A Farmer</h5>
                <h4>
                  Lorem ipsum is placeholder text commonly used in the graphic
                </h4>
                Chuck leberkas spare ribs pig, shoulder meatball beef ribs shank
                swine porchetta ball tip frankfurter pastrami. Chislic jowl
                chicken pig boudin tongue ham hock. Capicola short loin filet
                mignon ham hock swine sirloin. Jerky fatback biltong tri-tip
                doner ground round pork loin chicken landjaeger rump tail.
              </div>
            </div>

            <img src="/about2-1500.jpg" />
          </article>
        </div>

        <div className={styles.FarmerBioWrapper}>
          <article className={styles.FarmerBio2}>
            <img src="/about3-1500.jpg" />
            <div className={styles.FCBioTextWrapper}>
              <div className={styles.FCBioText}>
                <h5>Jane Fox. Farmland investment.</h5>
                <h4>
                  Lorem ipsum is placeholder text commonly used in the graphic
                </h4>
                Bacon ipsum dolor amet shoulder frankfurter ball tip meatball
                picanha sirloin, drumstick cow ham hock. Frankfurter pig bacon
                tenderloin, t-bone kevin turkey pork burgdoggen chislic chuck
                flank. Frankfurter pig bacon tenderloin, t-bone kevin turkey
                pork burgdoggen chislic chuck flank.
              </div>
            </div>
          </article>
        </div>

        <div className={styles.FarmerBioWrapper}>
          <article className={styles.FarmerBio}>
            <div className={styles.FCBioTextWrapper}>
              <div className={styles.FCBioText}>
                <h5>John Bloggs. Farmland Tycoon.</h5>
                <h4>
                  Lorem ipsum is placeholder text commonly used in the graphic
                </h4>
                Bacon ipsum dolor amet shoulder frankfurter ball tip meatball
                picanha sirloin, drumstick cow ham hock. Frankfurter pig bacon
                tenderloin, t-bone kevin turkey pork burgdoggen chislic chuck
                flank. Frankfurter pig bacon tenderloin, t-bone kevin turkey
                pork burgdoggen chislic chuck flank.
              </div>
            </div>
            <img src="/about4-1500.jpg" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default FarmerCard;
