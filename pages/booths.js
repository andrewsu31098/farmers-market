import BoothCard from "../components/LandingCards/BoothCard";
import StandCard from "../components/StandCard";
import styles from "../styles/pages/booths.module.scss";

const BoothInformation = [
  {
    name: "Lorem ipsum ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    path: "/lineup3-2500.jpg",
    prices: [3, 15],
  },
  {
    name: "Dolor sit",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    path: "/lineup4-2500.jpg",
    prices: [2, 8],
  },
  {
    name: "Amet, Consectetur",
    description:
      " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    path: "/lineup5-2500.jpg",
    prices: [8, 15],
  },
];

function Booths(props) {
  return (
    <div>
      <BoothCard />
      <h2 className={styles.header}>Booth Offerings</h2>
      {BoothInformation.map((booth, index) => (
        <StandCard key={index} info={booth} />
      ))}
    </div>
  );
}

export default Booths;
