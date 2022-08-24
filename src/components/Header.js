import React from 'react'
import Images from './headerComponents/Images'
import Nav from './headerComponents/Nav'
import SignInButton from './headerComponents/SignInButton'
import TitleText from './headerComponents/TitleText'

import * as S from '../Style.js'

export default function Header() {
    return (
        <S.HeaderContainer>
            <S.HeaderNavigation>
                <Nav />
                <SignInButton />
            </S.HeaderNavigation>
            <S.HeaderContent>
                <TitleText />
                <Images />
            </S.HeaderContent>
        </S.HeaderContainer>
    )
}