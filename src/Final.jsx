import React from "react";

const Final = ({ result, setIndex, setQuestions, setResult }) => {
  return (
    <>
      <h1 className="intro-title">Obrigado por jogar</h1>
      <p className="intro-text">Você acertou {result} de 10 perguntas</p>
      <p className="intro-text">Jogue novamente para responder a novas perguntas!</p>
      <button
        className="btn"
        onClick={() => {
          setIndex(0);
          setResult(0);
          setQuestions((prev) => prev.sort(() => Math.random() - 0.5));
        }}
      >
        Jogar Novamente
      </button>
      <div className="credits">
        <p>
          desenvolvido por carlos<span className="name">Eduardo</span>
        </p>
        <a
          href="https://github.com/carlosEduardDev/Quiz-JavaScript"
          target="_blank"
          rel="noreferrer"
          className="github"
        ></a>
      </div>
    </>
  );
};

export default Final;
