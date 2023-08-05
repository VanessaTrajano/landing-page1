import React from 'react'

import * as S from '../../Style.js'

import Seta from '../../images/setinha.png'
import TittleGoogle from '../../images/titulogoogle.png'
import ImageGoogle from '../../images/imagegoogle.png'

export default function RetanguloInicio(){
  return(
    <S.GoogleBox>
      <S.Box1>
        <S.Color></S.Color>
        <img src={TittleGoogle} alt='title google'/>
        <h2><span>SAVE</span> $ 100 000</h2>
      </S.Box1>
      <S.Box2>
        <img src={ImageGoogle} alt='imagem do google'/>
        <p>Google Cloud Platform - Tools & Modern Applications</p>
      </S.Box2>
      <S.Box3>
        <h2>NEW</h2>
        <S.Circulo>
          <img src={Seta} alt='seta'/>
        </S.Circulo>
      </S.Box3>
    </S.GoogleBox>
  )
}