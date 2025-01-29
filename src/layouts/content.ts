import styled from 'styled-components'

import { colors } from '../layouts/theme'

export const ContentIndex = styled.div`
  margin-left: 2.5vw;
  margin-top: -80px; /* Ajuste o valor para subir mais ou menos */
  flex: 1;
  padding: 20px;
`
export const Message = styled.div`
  h2 {
    color: ${colors.blue};
    font-size: 30px;
  }

  p {
    color: ${colors.blue};
    font-size: 20px;
  }
`

export const Table = styled.table`
  width: 90vw;
  border-collapse: collapse;
  margin-top: 20px;
  margin-left: 0px; /* Ajuste para aproximar a tabela da borda esquerda */

  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
    // cursor: pointer;
  }

  th {
    background-color: ${colors.blue};
    color: #ecf0f1;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  /* Definição de largura para as colunas */
  th:nth-child(1),
  td:nth-child(1) {
    width: 35%; /* Modelo */
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 35%; /* Fabricante */
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 15%; /* Ano */
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 15%; /* Preço */
  }
`

export const TableContainer = styled.div`
  width: 85vw; /* Mesma largura da tabela */
  margin: 0 auto; /* Centraliza a tabela */
  position: relative; /* Para posicionamento absoluto do botão */
`

export const AddButton = styled.button`
  background-color: ${colors.blue};
  color: #ecf0f1;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #34495e;
  }
`

export const SearchInput = styled.input`
  font-size: 14px;
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px; /* Margem para separar do botão */
  width: 25vw; /* Largura para o campo de pesquisa */
`

export const OkButton = styled.button`
  background-color: ${colors.blue};
  color: #ecf0f1;
  border: none;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 16px;

  &:hover {
    background-color: #34495e;
  }
`

export const ControlsContainer = styled.div`
  width: 45vw;
  display: flex-start;
  justify-content: flex-start; /* Alinha os itens no início */
  align-items: center; /* Alinha verticalmente */
  width: 45%; /* Opcional: controla o tamanho */
`

export const FilterSelect = styled.select`
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 20px; /* Margem para separar o filtro do botão */
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  width: 90%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    color: #000000;
  }
`

export const Select = styled.select`
  width: 94%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Option = styled.option`
  font-size: 16px;
  color: #333;
`

export const ModalActions = styled.div`
  display: block;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

export const CancelButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
  }
`

export const SaveButton = styled.button`
  background-color: ${colors.blue};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    background-color: #34495e;
  }
`

export const TitleModal = styled.h3`
  font-size: 24px;
  color: ${colors.blue};
`
