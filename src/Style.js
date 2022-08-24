import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #1D1D1D;
    }
`

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to bottom right, rgba(73, 190, 255, 0.3) 30%, #fff 70%);
`

export const HeaderNavigation = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    align-items:center;
    justify-content: space-around;
`

export const Nav = styled.nav`
    width:30%;
    height:100%;
    margin-left: 40vw;
    font-family: 'Poppins', sans-serif;
`

export const Navigation = styled.ul`
    list-style: none;
    width:100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
`

export const ListItem = styled.li`
    width: 18%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
    position: relative;

    &:after{
        content: "";
        position: absolute;
        background-color: #83067F;
        height: 3px;
        width: 0%;
        left: 0;
        bottom: -3px;
        transition: 0.4s;
      }
    &:hover:after{
      width: 100%;
    }

    &:hover{
        font-weight: bold;
    }
`

export const Button = styled.button`
    width: 8%;
    height: 70%;
    background-color: transparent;
    border-radius: 20px;
    border: 1px solid #1D1D1D;
    cursor: pointer;
    margin: 0 0.5%;
    font-family: 'Poppins', sans-serif;
    transition: 0.2s;

    &:hover{
        font-weight: bold;
        width: 9%;
        height: 80%;
        margin: 0 0;
        border: 2px solid #1D1D1D;
    }
`

export const HeaderContent = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
`

export const TitleTextBox = styled.div`
    width: 40%;
    height: 100%;
    padding-bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    justify-content: space-evenly;
`

export const Title = styled.h1`
    width:80%;
    font-size: 6vh;
`

export const Text = styled.p`
    width: 80%;
    padding-right: 11%;
    font-size: 2.5vh;
`

export const ImagesBox = styled.div`
    width: 60%;
    height: 100%;
    position: relative;
`

export const HeaderImage1 = styled.img`
    width: 70%;
    position: absolute;
    left: 10%;
    top: 30%;
`

export const HeaderImage2 = styled.img`
    width: 25%;
    position: absolute;
    left: 66%;
    top: 8%;
`

export const HeaderImage3 = styled.img`
    width: 13%;
    position: absolute;
    right: 0;
    top: 80%;
`