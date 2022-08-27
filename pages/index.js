import styles from "../styles/pages/index.module.scss";

import LandingCard from "../components/LandingCard";
import SectionCard from "../components/SectionCard";

function Index() {
  return (
    <>
      <LandingCard />
      <SectionCard />
      <SectionCard />
      <SectionCard id={"about"} />
    </>
  );
}

export default Index;
