import React from 'react'
import BarraLateral from './mainComponents/BarraLateral'
import Box from './mainComponents/Box'
import RetanguloInicio from './mainComponents/RetanguloInicio'

import * as S from '../Style.js'

import Seta from '../images/setinha.png'
import Circleci from '../images/circleci.png'

export default function Main() {
    return (
        <S.Main>
            <BarraLateral />
            <S.DivBox>
                <RetanguloInicio />
                <Box promo={<p><span>SAVE</span><span> $ 30</span></p>} empresa={Circleci} text='Continuous Integration and Delivery' bottom={<img src={Seta}/>}/>
            </S.DivBox>
        </S.Main>
    )
}

// promo empresa text bottom