import React from 'react'
import Images from './headerComponents/Images'
import Nav from './headerComponents/Nav'
import SignInButton from './headerComponents/SignInButton'
import TitleText from './headerComponents/TitleText'

export default function Header() {
    return (
        <header>
            <Nav />
            <SignInButton />
            <TitleText />
            <Images />
        </header>
    )
}