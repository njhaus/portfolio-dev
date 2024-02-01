import { textColorMap } from "../data/portfolioData";
interface iPill {
  text: keyof typeof textColorMap;
}

const Pill = ({ text }: iPill) => {
  return <div className={`pill ${textColorMap[text]}`}>{text}</div>;
};

export default Pill;
