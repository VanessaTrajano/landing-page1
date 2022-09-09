import React from 'react'

import * as S from '../../Style.js'

export default function Box({promo, empresa, text, bottom}){
  return(
    <div>
      <div>{promo}</div>
      <img src={empresa} />
      <p>{text}</p>
      <div>{bottom}</div>
    </div>
  )
}