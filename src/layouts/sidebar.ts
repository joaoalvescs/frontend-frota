import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh; /* Garante que ocupe toda a altura da tela */
`

export const SideBarContainer = styled.div`
  width: 8vw;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: fixed; /* Fixa a barra lateral no lado esquerdo */
  left: 0;
  top: 0;
  bottom: 0;
`

export const SideBarTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* Alinha o texto ao centro */
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Alinha o conteúdo ao centro */
  width: 90%;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 24px;
  gap: 15px; /* Espaço entre o ícone e o texto */

  &:hover {
    background-color: #34495e;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Espaçamento entre ícone e texto */
`
