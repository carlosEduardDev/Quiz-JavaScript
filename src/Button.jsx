import React from 'react'

const Button = ({response, questions, index, setResult, setResponse, setIndex, result}) => {

  function handleClick() {
    if (response === questions[index].response) {
      setResult(result + 1);
      setResponse(undefined);
      setIndex(index + 1);
    } else {
      setResponse(undefined);
      setIndex(index + 1);
    }
  }

  return <button onClick={handleClick}>Responder</button>
}

export default Button
