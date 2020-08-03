import React from 'react'
import { Header } from '@components/Header'
import { ContainerDiv } from './styles'
import { GlobalStyle } from '../../styles'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ContainerDiv>
      <Header />
      {children}
    </ContainerDiv>
  </>
) 