import styled from 'styled-components'

export const ContentIndex = styled.div`
  margin-left: 2.5vw;
  margin-top: -80px; /* Ajuste o valor para subir mais ou menos */
  flex: 1;
  padding: 20px;
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
  }

  th {
    background-color: #2c3e50;
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
  background-color: #2c3e50;
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

export const ControlsContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between; /* Alinha os itens nas extremidades */
  align-items: center; /* Alinha os itens verticalmente ao centro */
  margin-bottom: 20px; /* Espaço entre o botão e a tabela */
`

export const FilterSelect = styled.select`
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-left: 20px; /* Margem para separar o filtro do botão */
`
