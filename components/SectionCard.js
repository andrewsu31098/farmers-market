//Sections have a wide range of variety
//Because of this, recommended practice is to inherit the abstract css
//And make your own section css.
import styles from "../styles/components/SectionCard.module.scss";

function SectionCard(props) {
  return (
    <section className={styles.SectionContainer}>
      <div className={styles.SectionCard}>
        Bacon ipsum dolor amet shoulder frankfurter ball tip meatball picanha
        sirloin, drumstick cow ham hock. Frankfurter pig bacon tenderloin,
        t-bone kevin turkey pork burgdoggen chislic chuck flank. Pancetta
        chislic pork belly, landjaeger meatball drumstick filet mignon andouille
        short loin shoulder kielbasa chicken t-bone ham cupim. Strip steak
        sausage filet mignon, meatball beef ribs biltong buffalo. Tri-tip
        shankle sausage meatball landjaeger flank buffalo swine cupim. Chuck
        leberkas spare ribs pig, shoulder meatball beef ribs shank swine
        porchetta ball tip frankfurter pastrami. Chislic jowl chicken pig boudin
        tongue ham hock. Capicola short loin filet mignon ham hock swine
        sirloin. Jerky fatback biltong tri-tip doner ground round pork loin
        chicken landjaeger rump tail. Pastrami flank biltong capicola picanha
        short loin. Ham pancetta porchetta shank pastrami. Landjaeger sausage
        venison salami rump, frankfurter beef ribs beef strip steak brisket
        chislic. Kevin spare ribs ribeye, jowl doner pork frankfurter meatball
        burgdoggen boudin alcatra ball tip turducken tail corned beef.
      </div>
    </section>
  );
}

export default SectionCard;
