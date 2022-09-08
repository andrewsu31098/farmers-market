import styles from "../styles/components/StandCard.module.scss";
import Image from "next/image";

function StandCard(props) {
  return (
    <section className={styles.StandContainer}>
      <div className={styles.StandCard}>
        <div className={styles.StandGridWrapper}>
          <div className={styles.StandImageWrapper}>
            <Image
              src={props.info.path}
              alt="Picture of Food."
              layout="intrinsic"
              width="500px"
              height="500px"
            />
          </div>
          <div className={styles.StandPriceColumn}>
            <h3>{props.info.name}</h3>
            <p>{props.info.description}</p>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th> <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 item</td>
                  <td>${props.info.prices[0]}</td>
                </tr>
                <tr>
                  <td>1 bundle</td>
                  <td>${props.info.prices[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandCard;
