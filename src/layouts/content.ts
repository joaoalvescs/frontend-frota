import styled from 'styled-components'

export const ContentIndex = styled.div`
  margin-left: 2.5vw;
  flex: 1;
  padding: 20px;
`
export const Table = styled.table`
  width: 80vw;
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
