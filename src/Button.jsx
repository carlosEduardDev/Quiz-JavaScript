import React from "react";

const Button = ({
  response,
  questions,
  index,
  setResult,
  setResponse,
  setIndex,
  result,
  element,
  disabled
}) => {
  function handleClick() {
    if (response === questions[index].response) {
      element.style.backgroundColor = "#0aa023";
      let interval = setInterval(() => {
        setResult(result + 1);
        setResponse(undefined);
        setIndex(index + 1);
        element.style.backgroundColor = "#272727";
        clearInterval(interval);
      }, 1200);
    } else {
      element.style.backgroundColor = "#d81212";

      const inputs = element.parentElement.querySelectorAll("input");
      const correct = Array.from(inputs).filter(
        (input) => input.value === questions[index].response
      );
      
      correct[0].parentElement.style.backgroundColor = "#0aa023";

      let interval = setInterval(() => {
        setResponse(undefined);
        setIndex(index + 1);
        element.style.backgroundColor = "#272727";
        clearInterval(interval);
      }, 1200);
    }
  }

  return (
    <button disabled={disabled} className="btn" onClick={handleClick}>
      Responder
    </button>
  );
};

export default Button;
