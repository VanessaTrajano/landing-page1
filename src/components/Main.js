import React from 'react'
import BarraLateral from './mainComponents/BarraLateral'
import Box from './mainComponents/Box'
import RetanguloInicio from './mainComponents/RetanguloInicio'

export default function Main() {
    return (
        <main>
            <BarraLateral />
            <RetanguloInicio />
            <Box />
        </main>
    )
}