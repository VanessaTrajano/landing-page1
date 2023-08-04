import React from 'react'

import * as S from '../../Style.js'

export default function Box({promo, empresa, text, bottom}){
  return(
    <S.BoxContainer>
      <S.BoxPromo>{promo}</S.BoxPromo>
      <S.ImageEmp src={empresa} alt='empresa' />
      <S.TextBox>{text}</S.TextBox>
      <S.BottomBox>{bottom}</S.BottomBox>
    </S.BoxContainer>
  )
}