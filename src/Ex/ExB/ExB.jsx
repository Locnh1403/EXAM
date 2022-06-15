import React from "react";

const ExB = ({
  handleAnswer,
  showAnswers,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <>
      <div className="questionClass">
        <h2>{question}</h2>
      </div>
      <div className="button-overall">
        {answers.map((answer, index) => {
          const specialClassName = showAnswers
            ? answer === correct_answer
              ? "green-button"
              : "red-button"
            : "";
          return (
            <button className={`normal-button ${specialClassName}`} onClick = {() => handleAnswer(answer)}>
              {answer}
            </button>
          );
        })}
      </div>
      {showAnswers && (
        <button onClick={handleNextQuestion} className="next-question">
          Next Question
        </button>
      )}
    </>
  );
};

export default ExB;
