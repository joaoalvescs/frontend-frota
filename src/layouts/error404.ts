import styled from 'styled-components'

import { colors } from '../layouts/theme'

export const ErrorPage = styled.div`
  position: absolute; /* Fixa a posição em relação à tela */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajuste para centralização exata */
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: ${colors.blue};
`
