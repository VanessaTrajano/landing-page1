import React from 'react'
import BarraLateral from './mainComponents/BarraLateral'
import Box from './mainComponents/Box'
import RetanguloInicio from './mainComponents/RetanguloInicio'

import * as S from '../Style.js'

import Seta from '../images/setinha.png'
import Circleci from '../images/circleci.png'
import Hubspot from '../images/hubspot.png'
import Atlas from '../images/atlas.png'
import Stripe from '../images/stripe.png'
import Remotebay from '../images/remotebay.png'
import Brightdata from '../images/brightdata.png'

export default function Main() {
    return (
        <S.Main>
            <BarraLateral />
            <S.DivBox>
                <RetanguloInicio />
                <S.ContainerAllBox>
                    <Box promo={<p><span>SAVE</span><span> $ 30</span></p>} empresa={Circleci} text='Continuous Integration and Delivery' bottom={<img src={Seta} />} />
                    <Box promo={<p><span>SAVE</span><span> $ 90</span></p>} empresa={Hubspot} text='Inbound Marketing, Sales, and Service Software' bottom={<p>USE CODE</p>} />
                    <Box promo={<p><span>SAVE</span><span> $ 50</span></p>} empresa={Atlas} text='Start a Business with Our Startup Toolkit' bottom={<img src={Seta} />} />
                    <Box promo={<p><span>SAVE</span><span> $ 3000</span></p>} empresa={Stripe} text='Online payment processing for internet businesses' bottom={<img src={Seta} />} />
                    <Box promo={<p>FREE</p>} empresa={Remotebay} text='Remote internships and interns online' bottom={<img src={Seta} />} />
                    <Box promo={<p><span>SAVE</span><span> $ 30</span></p>} empresa={Brightdata} text='All-In-One Solutions to Unblock and Collect Any Web Data' bottom={<img src={Seta} />} />
                </S.ContainerAllBox>
            </S.DivBox>
        </S.Main>
    )
}