import React from 'react'

import * as S from '../../Style'

export default function Nav(){
  return(
    <S.Nav>
        <S.Navigation>
            <S.ListItem>Home</S.ListItem>
            <S.ListItem>Benefits</S.ListItem>
            <S.ListItem>Pricing</S.ListItem>
        </S.Navigation>
    </S.Nav>
  )
}