import styles from "../styles/pages/index.module.scss";

import LandingCard from "../components/LandingCards/LandingCard";
import IndexCard from "../components/IndexCard";
import ReviewCard from "../components/ReviewCard";
import ActionCard from "../components/ActionCard";

function Index() {
  return (
    <>
      <LandingCard />
      <IndexCard />
      <ReviewCard />
      <ActionCard />
    </>
  );
}

export default Index;
