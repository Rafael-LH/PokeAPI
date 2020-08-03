import React from 'react'
import Logo from '@images/logo.png'
import { DivContainer } from './styles'

export const Header = () => (
  <DivContainer>
    <figure>
      <img src={Logo} alt="Logo" />
    </figure>
  </DivContainer>
)