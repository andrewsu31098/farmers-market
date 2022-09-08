import landingStyles from "../../styles/components/LandingCard.module.scss";
import btnStyles from "../../styles/components/Button.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";
import farmercar2 from "../../public/farmercar2-2500.jpg";

function LandingCard(props) {
  function alertOnClick(e) {
    alert("Worked");
  }

  return (
    <section className={landingStyles.LandingCard}>
      <div className={landingStyles.LCImageWrapper}>
        <Image
          src={farmercar2}
          alt="Picture of bread."
          layout="fill"
          priority="true"
        />
      </div>

      <div className={landingStyles.LandingInnerBox}>
        <h1>Our Farmer's Market.</h1>
        <p>
          Discover what our region has to offer by trying our local specialties.
        </p>
        <p>Regional honeys, jams, cheeses and more.</p>
        <div className={landingStyles.LandingLinks}>
          <a href="#getStarted" className={btnStyles["btn-third"]}>
            Let's get started.
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingCard;
