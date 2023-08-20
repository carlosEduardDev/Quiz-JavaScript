import React from "react";
import Radio from "./Radio";

const App = () => {
  const [response, setResponse] = React.useState(undefined);
  const [questions, setQuestions] = React.useState(undefined);
  const [index, setIndex] = React.useState(0);
  const [result, setResult] = React.useState(0);

  async function handleFetch() {
    const r = await fetch("./questions.json");
    const j = await r.json();
    setQuestions(j.sort(() => Math.random() - 0.5));
  }

  React.useEffect(() => {
    handleFetch();
  }, []);

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

  return (
    <>
      <span>Quiz JavaScript</span>
      <p>{questions && questions[index].question}</p>
      {questions && (
        <Radio
          value={response}
          checked={response}
          responses={questions[index].options}
          setValue={setResponse}
        />
      )}
      <button onClick={handleClick}>Próximo</button>
    </>
  );
};

export default App;
