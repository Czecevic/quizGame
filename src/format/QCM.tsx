import { useState, useEffect } from "react";
import { ShowVictory } from "../components/ShowVictory";
import { ShowResponse } from "../components/ShowResponse";
import { useSpring } from "@react-spring/web";

interface QCMPropos {
  name: string;
  data: {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    goodResponse: string;
  }[];
}

export const QCM: React.FunctionComponent<QCMPropos> = ({ name, data }) => {
  // useState
  const [questionIndex, setQuestionIndex] = useState<number>(
    Math.floor(Math.random() * data.length)
  );
  const [point, setPoint] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set()
  );
  const [showVictory, setShowVictory] = useState<boolean>(false);
  const [showResponse, setShowResponse] = useState<
    "correct" | "incorrect" | null
  >(null);

  useEffect(() => {
    if (point >= 10) {
      setShowVictory(true);
    }
  }, [point]);

  const currentQuestion = data[questionIndex];

  const getRandomQuestion = (res: string) => {
    if (res === data[questionIndex].goodResponse) {
      setPoint(point + 1);
      setShowResponse("correct");
    } else {
      setShowResponse("incorrect");
    }
    setAnsweredQuestions((prev) => new Set(prev.add(questionIndex)));
    setTimeout(() => {
      setShowResponse(null);
      let newIndex;
      console.log(questionIndex);
      do {
        newIndex = Math.floor(Math.random() * data.length);
      } while (
        answeredQuestions.has(newIndex) &&
        answeredQuestions.size < data.length
      );
      setQuestionIndex(newIndex);
    }, 1000);
  };

  // all response
  const feedbackAnimation = useSpring({
    opacity: showResponse ? 1 : 0,
    transform: showResponse ? "scale(1)" : "scale(0.5)",
    config: { duration: 500 },
  });

  // win
  const victoryAnimation = useSpring({
    opacity: showVictory ? 1 : 0,
    transform: showVictory ? "scale(1)" : "scale(0.5)",
    config: { duration: 500 },
  });

  return (
    <div className="flex flex-col items-center gap-20 justify-center">
      <p className="absolute top-10 right-10 text-4xl z-10">
        Score {point} / 10
      </p>
      <h1 className="text-4xl font-bold text-blue-500">{name}</h1>
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
      {showResponse && (
        <ShowResponse
          res={showResponse}
          feedbackAnimation={feedbackAnimation}
        />
      )}
      {showVictory && <ShowVictory victoryAnimation={victoryAnimation} />}
    </div>
  );
};
