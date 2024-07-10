import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import corgiHappy from "../assets/happy-corgi-with-militaire-hat.png";

export const Geographie = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(
    Math.floor(Math.random() * data.length)
  );
  const [point, setPoint] = useState<number>(0);
  const [showVictory, setShowVictory] = useState<boolean>(false);
  const currentQuestion = data[questionIndex];

  const getRandomQuestion = (res: string) => {
    if (res === data[questionIndex].goodResponse) {
      setPoint(point + 1);
    }
    setQuestionIndex(Math.floor(Math.random() * data.length));
  };

  useEffect(() => {
    if (point >= 10) {
      setShowVictory(true);
    }
  }, [point]);

  const victoryAnimation = useSpring({
    opacity: showVictory ? 1 : 0,
    transform: showVictory ? "scale(1)" : "scale(0.5)",
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center gap-20 justify-center">
      <p className=" absolute top-10 right-10">Score {point} / 10</p>
      <h1 className="text-4xl font-bold text-blue-500">Geographie</h1>
      <div className="flex flex-col items-center gap-5 justify-center">
        <h1 className="text-2xl font-bold text-blue-500">
          {currentQuestion.question}
        </h1>
        <div className="flex flex-wrap gap-7 justify-center">
          <button onClick={() => getRandomQuestion(currentQuestion.a)}>
            {currentQuestion.a}
          </button>
          <button onClick={() => getRandomQuestion(currentQuestion.b)}>
            {currentQuestion.b}
          </button>
          <button onClick={() => getRandomQuestion(currentQuestion.c)}>
            {currentQuestion.c}
          </button>
          <button onClick={() => getRandomQuestion(currentQuestion.d)}>
            {currentQuestion.d}
          </button>
        </div>
      </div>
      {showVictory && (
        <animated.div
          style={victoryAnimation}
          className=" absolute bg-zinc-800 p-8 rounded-md flex flex-col items-center"
        >
          <h1 className=" text-2xl font-bold text-blue-500">
            Bravo vous avez réussi le quiz
          </h1>
          <img src={corgiHappy} alt="winImage" className=" w-2/4"></img>
          <p>Vous pouvez retourner au début via ce bouton</p>
          <Link to="/" className=" text-blue-500 underline">
            Retourner au début
          </Link>
        </animated.div>
      )}
    </div>
  );
};
