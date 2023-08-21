import React from 'react'

const Initial = ({setInitial}) => {
  return <>
   <h1 className='intro-title'>Olá desenvolvedor</h1>
   <p className='intro-text'>Teste seus conhecimentos nesse quiz de JavaScript!</p>
   <button className='btn' onClick={() => setInitial(false)}>Iniciar</button>
  </>
}

export default Initial
