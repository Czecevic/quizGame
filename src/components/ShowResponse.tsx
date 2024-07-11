import { animated, SpringValue } from "@react-spring/web";
import goodCorgi from "../assets/corgi.png";
import sadCorgi from "../assets/sad-corgi.png";

interface ResProps {
  res: string | null;
  feedbackAnimation: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
}

export const ShowResponse: React.FunctionComponent<ResProps> = ({
  res,
  feedbackAnimation,
}) => {
  return (
    <animated.div
      style={feedbackAnimation}
      className=" absolute bg-zinc-800 p-8 rounded-md flex flex-col items-center justify-center h-screen"
    >
      <h1 className=" text-2xl font-bold text-blue-500">
        Bravo vous avez réussi le quiz
      </h1>
      <img
        src={res === "correct" ? goodCorgi : sadCorgi}
        alt="winImage"
        className=" w-2/4"
      ></img>
      {res === "correct" ? <p>Bonne réponse</p> : <p>Mauvaise reponse</p>}
    </animated.div>
  );
};
