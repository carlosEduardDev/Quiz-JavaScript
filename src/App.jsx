import React from "react";
import Radio from "./Radio";
import Question from "./Question";
import Button from "./Button";
import Initial from "./Initial";

const App = () => {
  const [initial, setInitial] = React.useState(true);
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

 if(initial) return <Initial setInitial={setInitial}/>
  return (
    <>
      <span>Quiz JavaScript</span>
      {questions && (
        <>
          <Question question={questions[index].question} />
          <Radio
            value={response}
            checked={response}
            responses={questions[index].options}
            setValue={setResponse}
          />
        </>
      )}
      <Button
        response={response}
        questions={questions}
        index={index}
        setResult={setResult}
        setResponse={setResponse}
        setIndex={setIndex}
        result={result}
      />
    </>
  );
};

export default App;
