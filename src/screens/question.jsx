import React from "react";
import "../styles/question.css";
const Question = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  return (
    <div className="wrapper-div">
      {questionData && (
        <>
          <img src={questionData.imageUrl} className="question-image" alt="" />
          <div>
            <h3 className="question-text">{questionData.question}</h3>
            <div className="options-container">
              {questionData?.options?.map((option, index) => (
                <div
                  key={index}
                  className="options"
                  style={{
                    backgroundColor:
                      option.id === selectedAnswer ? "red" : "white",
                  }}
                  onClick={() => {
                    setSelectedAnswer(option.id);
                  }}
                >
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
