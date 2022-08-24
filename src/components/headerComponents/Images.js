import React from 'react'
import * as S from '../../Style.js'

import Pessoa from '../../images/pessoinha.png'
import Grafico1 from '../../images/grafico1.png'
import Grafico2 from '../../images/grafico2.png'

export default function Images(){
  return(
    <S.ImagesBox>
      <S.HeaderImage1 src={Pessoa} alt='pessoinha'/>
      <S.HeaderImage2 src={Grafico1} alt='grafico 1'/>
      <S.HeaderImage3 src={Grafico2} alt='grafico 2'/>
    </S.ImagesBox>
  )
}