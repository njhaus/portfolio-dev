import { textColorMap } from "../../../src/data/portfolioData";
interface iPill {
  text: keyof typeof textColorMap;
}

const Pill = ({ text }: iPill) => {
  return <div className={textColorMap[text]}>{text}</div>;
};

export default Pill;
