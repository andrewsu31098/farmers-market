import landingStyles from "../styles/components/LandingCard.module.scss";
import btnStyles from "../styles/components/Button.module.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function LandingCard(props) {
  function alertOnClick(e) {
    alert("Worked");
  }

  return (
    <section className={landingStyles.LandingCard}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
      >
        <div>
          <img src="avacadoMinified.jpg" />
        </div>
        <div>
          <img src="kiwiMinified.jpg" />
        </div>
        <div>
          <img src="orangeMinified.jpg" />
        </div>
      </Carousel>

      <div className={landingStyles.LandingInnerBox}>
        <h1>Welcome to [Website Name].</h1>
        <p>(Insert website welcome message.)</p>
        <div className={landingStyles.LandingLinks}>
          <a href="#getStarted" className={btnStyles["btn-primary"]}>
            Call to action one.
          </a>
          <a href="/newsletter" className={btnStyles["btn-secondary"]}>
            Call to action two.
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingCard;
