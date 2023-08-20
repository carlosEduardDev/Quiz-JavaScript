import React from "react";
import Radio from "./Radio";

const App = () => {
  const [response, setResponse] = React.useState(undefined);
  const [questions, setQuestions] = React.useState(undefined);
  const [index, setIndex] = React.useState(0);

  async function handleFetch() {
    const r = await fetch("./questions.json");
    const j = await r.json();
    setQuestions(j.sort(() => Math.random() - 0.5));
  }

  React.useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <span>Quiz JavaScript</span>
      {questions && (
        <Radio
          value={response}
          checked={response}
          responses={questions[index].options}
          setValue={setResponse}
        />
      )}
      {response}
    </>
  );
};

export default App;
