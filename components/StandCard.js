import styles from "../styles/components/StandCard.module.scss";

function StandCard(props) {
  return (
    <section className={styles.StandContainer}>
      <div className={styles.StandCard}>
        <div className={styles.StandGridWrapper}>
          <div className={styles.StandImageWrapper}>
            <img src={props.info.path} />
          </div>
          <div className={styles.StandPriceColumn}>
            <h3>{props.info.name}</h3>
            <p>{props.info.description}</p>
            <table>
              <tr>
                <th>Quantity</th> <th>Price</th>
              </tr>
              <tr>
                <td>1 item</td>
                <td>${props.info.prices[0]}</td>
              </tr>
              <tr>
                <td>1 bundle</td>
                <td>${props.info.prices[1]}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StandCard;
