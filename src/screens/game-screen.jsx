import React from "react";
import Question from "./question";
import { data as easyQuestions } from "../data/easy-game";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/game-screen.css";
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(easyQuestions);
const questions = easyQuestions.slice(0, 3);
const GaneScreen = () => {
  const answers = new Map();
  return (
    <div className="wrapper-div">
      <Carousel
        swipeable
        showThumbs={false}
        renderArrowNext={(e,hasNext) => {
          return hasNext ? (
            <div className="arrow-button-right" onClick={() => e()}>
              <button>Next</button>
            </div>
          ) : (
            <div className="arrow-button-right">
              <button>Finish</button>
            </div>
          );
        }}
        renderArrowPrev={(e,hasPrev) => {
          return (
            hasPrev && <div className="arrow-button-left" onClick={() => e()}>
              <button>Prev</button>
            </div>
          );
        }}
      >
        {questions.map((question, index) => (
          <Question questionData={question} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default GaneScreen;
