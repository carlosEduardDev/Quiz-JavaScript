import React from 'react'

const Final = ({result, setIndex}) => {
  return <>
  <h1 className='intro-title'>Obrigado por jogar</h1>
   <p className='intro-text'>Você acertou {result} de 10 perguntas</p>
   <button className='btn' onClick={() => setIndex(0)}>Jogar Novamente</button>
  </>
}

export default Final
