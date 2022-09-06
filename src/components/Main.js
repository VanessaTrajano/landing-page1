import React from 'react'
import BarraLateral from './mainComponents/BarraLateral'
import Box from './mainComponents/Box'
import RetanguloInicio from './mainComponents/RetanguloInicio'

import * as S from '../Style.js'

export default function Main() {
    return (
        <S.Main>
            <BarraLateral />
            <S.DivBox>
                <RetanguloInicio />
                <Box />
            </S.DivBox>
        </S.Main>
    )
}