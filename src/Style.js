import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Nav = styled.nav`
    width:30%;
    height:8vh;
`

export const Navigation = styled.ul`
    list-style: none;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;

`