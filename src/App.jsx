import React from "react";
import Radio from "./Radio";
import Question from "./Question";
import Button from "./Button";
import Initial from "./Initial";
import Final from "./Final";

const App = () => {
  const [initial, setInitial] = React.useState(true);
  const [response, setResponse] = React.useState(undefined);
  const [questions, setQuestions] = React.useState(undefined);
  const [index, setIndex] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [elementClicked, setElementClicked] = React.useState(undefined);

  async function handleFetch() {
    const r = await fetch("./questions.json");
    const j = await r.json();
    setQuestions(j.sort(() => Math.random() - 0.5));
  }

  React.useEffect(() => {
    handleFetch();
  }, []);

  React.useEffect(() => {
    if (response) setDisabled(false);
    else setDisabled(true);
  }, [response]);

  if (initial) return <Initial setInitial={setInitial} />;
  if (index === 10)
    return (
      <Final
        setQuestions={setQuestions}
        setResult={setResult}
        setIndex={setIndex}
        result={result}
      />
    );
  return (
    <>
      <span className="detail">Quiz JavaScript - {index + 1} de 10</span>
      {questions && (
        <>
          <Question question={questions[index].question} />
          <Radio
            value={response}
            checked={response}
            responses={questions[index].options}
            setValue={setResponse}
            setElement={setElementClicked}
          />
        </>
      )}
      <Button
        disabled={disabled}
        response={response}
        questions={questions}
        index={index}
        setResult={setResult}
        setResponse={setResponse}
        setIndex={setIndex}
        result={result}
        element={elementClicked}
      />
    </>
  );
};

export default App;
