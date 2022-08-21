import React from "react";
import { data as easyQuestions } from "../data/easy-game";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/game-screen.css";
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(easyQuestions);  // for shuffle array to get random questions
const questions = easyQuestions.slice(0, 3);  // to get only 3 questions
const GaneScreen = () => {
  const [ans, setAns] = React.useState(new Map());    // store the users answer
  const [solution, setASolution] = React.useState(new Map());  // store the original solutions
  const [gameover, setGameOver] = React.useState(false);   // check that user finised game or not so that we can show him/her game over screen 
  const [marks, setMarks] = React.useState(0);  // marks of users

  React.useEffect(() => {
    // fill ans and solution map 
    const ansMap = new Map();
    const solutionMap = new Map();
    easyQuestions.forEach((q) => {
      ansMap.set(q.id, -1);
      solutionMap.set(q.id, q.answer);
    });
    setAns(ansMap);
    setASolution(solutionMap);
  }, []);

  const setAnsForQuestionById = (questionId, ansId) => {
    ans.set(questionId, ansId);
    setAns(new Map(ans));
  };

  const getMarks = () => {
    let marks = 0;
    ans.forEach((ansId, qId) => {
      if (solution.get(qId) == ansId) {
        marks++;
      }
    });
    setMarks((marks / 3) * 100);
  };

  return (
    <div className="wrapper-div">
      {!gameover ? (
        <Carousel
          swipeable
          showThumbs={false}
          renderArrowNext={(e, hasNext) => {
            return hasNext ? (
              <div className="arrow-button-right" onClick={() => e()}>
                <button>Next</button>
              </div>
            ) : (
              <div
                className="arrow-button-right"
                onClick={() => {
                  getMarks();
                  setGameOver(true);
                }}
              >
                <button>Finish</button>
              </div>
            );
          }}
          renderArrowPrev={(e, hasPrev) => {
            return (
              hasPrev && (
                <div className="arrow-button-left" onClick={() => e()}>
                  <button>Prev</button>
                </div>
              )
            );
          }}
        >
          {questions.map((q, index) => (
            <div className="wrapper-div" key={index}>
              {q && (
                <div className="scrollable-div">
                  <img src={q.imageUrl} className="question-image" alt="" />
                  <div className="question-container">
                    <h3 className="question-text">{q.question}</h3>
                    <div className="options-container">
                      {q?.options?.map((option, index) => (
                        <div
                          key={index}
                          className="options"
                          style={{
                            backgroundColor:
                              option.id === ans.get(q.id)
                                ? "cadetblue"
                                : "#888AC3",
                          }}
                          onClick={() => {
                            setAnsForQuestionById(q.id, option.id);
                          }}
                        >
                          <p>{option.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="game-over-screen">
          <h2 className="gradient-color">Your Score</h2>
          <h2 className="gradient-color">{marks.toFixed(2)}%</h2>
        </div>
      )}
    </div>
  );
};

export default GaneScreen;
