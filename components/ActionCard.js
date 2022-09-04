import { AiFillPhone } from "react-icons/ai";

import styles from "../styles/components/ActionCard.module.scss";
import buttonStyles from "../styles/components/Button.module.scss";

function ActionCard(props) {
  return (
    <section className={styles.ActionContainer}>
      <div className={styles.ActionCard}>
        <div className={styles["AC-BG-Parallax"]}></div>
        <div className={styles["AC-BG-Plain"]}></div>
        <div className={styles.ACCallWrapper}>
          <div className={styles.ACCall}>
            <h3>Join us for a free tour today.</h3>
            <h4>
              See every popular booth, attraction, and participate in your
              favorite event!
            </h4>
            <p>
              Capicola short loin filet mignon ham hock swine sirloin. Jerky
              fatback biltong tri-tip doner ground round pork loin chicken
              landjaeger rump tail. Pastrami flank biltong capicola picanha
              short loin. Ham pancetta porchetta shank pastrami.
            </p>
            <div>
              <span className={buttonStyles["btn-third"]}>
                <AiFillPhone /> Call to book now.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionCard;
