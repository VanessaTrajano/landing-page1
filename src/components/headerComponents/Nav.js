import React from 'react'
import Sidebar from './Sidebar';

import * as S from '../../Style'

export default function Nav() {
  return (
    <S.Nav>
      <S.Hamburguer>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
          <h1>A</h1>
        </div>
      </S.Hamburguer>
      <S.Navigation>
        <S.ListItem>Home</S.ListItem>
        <S.ListItem>Benefits</S.ListItem>
        <S.ListItem>Pricing</S.ListItem>
      </S.Navigation>
    </S.Nav>
  )
}