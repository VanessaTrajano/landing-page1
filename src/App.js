import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

import * as S from './Style.js'

export default function App() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  )
}