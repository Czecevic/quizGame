import { animated, SpringValue } from "@react-spring/web";
import goodCorgi from "../assets/corgi.png";
import sadCorgi from "../assets/sad-corgi.png";

interface ResProps {
  res: string | null;
  feedbackAnimation: {
    opacity: SpringValue<number>;
    transform: SpringValue<string>;
  };
  goodResponse: string;
  goodResponseDesk?: string | undefined;
}

export const ShowResponse: React.FunctionComponent<ResProps> = ({
  res,
  feedbackAnimation,
  goodResponse,
  goodResponseDesk,
}) => {
  // console.log(goodResponseDesk);
  return (
    <animated.div
      style={feedbackAnimation}
      className=" absolute bg-zinc-800 p-8 rounded-md flex flex-col items-center justify-center h-screen"
    >
      <h1 className=" text-2xl font-bold text-blue-500">
        {res === "correct" ? "Bonne Réponse" : "Mauvaise Réponse"}
      </h1>
      <img
        src={res === "correct" ? goodCorgi : sadCorgi}
        alt="winImage"
        className=" w-2/4"
      ></img>
      {res === "correct" ? (
        <div className="flex flex-col items-center">
          <p>Bonne réponse</p>
          {goodResponseDesk?.includes("/") === true ? (
            <img src={goodResponseDesk} className="w-1/3"></img>
          ) : (
            <p>{goodResponseDesk}</p>
          )}
        </div>
      ) : (
        <p>Mauvaise reponse</p>
      )}
      {res === "incorrect" && (
        <p className=" text-xl">La bonne réponse était {goodResponse}</p>
      )}
    </animated.div>
  );
};
