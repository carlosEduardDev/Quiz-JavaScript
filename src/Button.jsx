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
  disabled,
  setDisabled,
}) => {
  function handleClick() {
    if (response === questions[index].response) {
      element.style.backgroundColor = "#0aa023";
      setDisabled(true);

      const inputs = element.parentElement.querySelectorAll("input");
      inputs.forEach((input) => {
        input.setAttribute("disabled", "");
      });
      let interval = setInterval(() => {
        setResult(result + 1);
        setResponse(undefined);
        setIndex(index + 1);
        element.style.backgroundColor = "#272727";
        clearInterval(interval);
        const inputs = element.parentElement.querySelectorAll("input");
        inputs.forEach((input) => {
          input.removeAttribute("disabled", "");
        });
      }, 1200);
    } else {
      element.style.backgroundColor = "#d81212";
      setDisabled(true);
      const inputs = element.parentElement.querySelectorAll("input");
      const correct = Array.from(inputs).filter(
        (input) => input.value === questions[index].response
      );

      correct[0].parentElement.style.backgroundColor = "#0aa023";

      inputs.forEach((input) => {
        input.setAttribute("disabled", "");
      });
      let interval = setInterval(() => {
        inputs.forEach((input) => {
          input.removeAttribute("disabled", "");
        });
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
