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
    background-image: linear-gradient(to bottom right, rgba(73, 190, 255, 0.3) 10%, #fff 90%);
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

export const Main = styled.main`
    height: 120vh;
    display: flex;
    margin-top: 13vh;
    font-family: 'Poppins', sans-serif;
`

export const NavBarraLateral = styled.nav`
    height: 100%;
    width: 20%;
`

export const BarraLateralList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    list-style: none;

    li{
        font-size: 3vh;
        height: 6%;
        display:flex;
        align-items: center;
        margin-left:15%;
        color: rgba(29, 29, 29, 0.8);
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            color: rgb(29, 29, 29);
            margin-left: 8%;
            border-left: 3px solid #83067F;
            border-radius: 1px;
            padding: 2%;
            font-weight: bold;
        }
    }
`

export const DivBox = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const GoogleBox = styled.div`
    width: 90%;
    height: 40%;
    display: flex;
    border-radius: 30px;
    background-image: linear-gradient(to bottom right, #EFF9FF 30%, #FCF5FF 55%);
    z-index: -1;
`

export const Box1 = styled.div`
    width:25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2%;

    img{
        width: 80%;
        margin-top: 1%;
    }

    h2{
        margin-top: 5%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        font-size: 3.5vh;
        color: #1D1D1D;

        span{
            font-size: 3vh;
            color: #83067F;
        }
    }
`

export const Color = styled.div`
    position: absolute;
    z-index: -1;
    top: 100%;
    left:23.5%;
    border-radius: 50%;
    height: 30%;
    width: 15%;
    background: radial-gradient(rgb(200, 82, 255, 0.28) 10%, rgb(73, 190, 255, 0.3), rgb(239, 249, 255, 0.05), transparent);
`

export const Box2 = styled.div`
    width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top:3%;
    font-size:3vh;
    text-align: center;

    img{
        width:100%;
    }
`

export const Box3 = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 2% 4%;

    h2{
        position: relative;
        font-size: 2.7vh;
        color:#83067F;
        font-weight:bold;
        letter-spacing: 1.5px;
    }

    h2::before {
        content: "";
        position: absolute;
        top: 100%;
        width: 200%;
        left: -100%;
        height: 2px;
        border-radius: 2px;
        background: linear-gradient(to right, #fff, #83067F);
      }
`

export const Circulo = styled.div`
    background-color: #1D1D1D;
    width: 33%;
    height: 20%;
    border-radius: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition: 0.4s;

    img{
        width:50%;
    }

    &:hover{
        width: 36%;
        height: 22%;
    }
`

export const ContainerAllBox = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 2%;
`

export const BoxContainer = styled.div`
    position: relative;
    //border: 0.5px solid rgb(73, 190, 255, 0.3);
    width: 30%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    margin: 1%;
    box-shadow: 5px 5px 20px rgb(73, 190, 255, 0.3);

    &:hover{
        background-image: linear-gradient(to right, #EFF9FF, #FCF5FF 70%);
        top: -1%;
        left: -1%;
    }
`

export const BoxPromo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2%;
    width: 100%;
    height: 18%;
`

export const Save = styled.span`
    color: #83067F;
    font-size: 2vh;
    font-weight: 900;
`

export const Price = styled.span`
    color: #1D1D1D;
    font-size: 3vh;
    font-weight: 900;
    border-radius: 50%;
   // background: radial-gradient(rgb(200, 82, 255, 0.28) 10%, rgb(73, 190, 255, 0.3), rgb(239, 249, 255, 0.05), transparent);
`

export const Free = styled.p`
    color: #83067F;
    font-size: 3vh;
    font-weight: 900;
    margin-right: 3%;
`

export const ImageEmp = styled.img`
    height: 30%;
    margin-top: 3%;
    margin-left: 5%;
    width: fit-content;
`

export const TextBox = styled.p`
    height: 25%;
    margin-left: 5%;
    width: 79%;
    font-size: 2vh; 
`

export const BottomBox = styled.div`
    background-color: #1D1D1D;
    height: 17%;
    width: 100%;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 5%;
`

export const Code = styled.p`
    color: #fff;
    width: 90%;
    display: flex;
    justify-content: center;
    font-weight: 900;
`