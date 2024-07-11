import { animated, SpringValue } from "@react-spring/web";
import corgiHappy from "../assets/happy-corgi-with-militaire-hat.png";
import { Link } from "react-router-dom";

interface VictoryProps {
  victoryAnimation: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

export const ShowVictory: React.FunctionComponent<VictoryProps> = ({
  victoryAnimation,
}) => {
  return (
    <animated.div
      style={victoryAnimation}
      className="absolute bg-zinc-800 p-8 rounded-md flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold text-blue-500">
        Bravo vous avez réussi le quiz
      </h1>
      <img src={corgiHappy} alt="winImage" className="w-2/4" />
      <p>Vous pouvez retourner au début via ce bouton</p>
      <Link to="/" className="text-blue-500 underline">
        Retourner au début
      </Link>
    </animated.div>
  );
};
