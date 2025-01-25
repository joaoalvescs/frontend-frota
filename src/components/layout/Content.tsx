import { MdDelete, MdEdit } from 'react-icons/md'
import styled from 'styled-components'
import { ContentIndex, Table } from '../../layouts/content'

// Contêiner para alinhar o botão com a tabela
const TableContainer = styled.div`
  width: 70vw; /* Mesma largura da tabela */
  margin: 0 auto; /* Centraliza a tabela */
  position: relative; /* Para posicionamento absoluto do botão */
`

// Estilização do botão
const AddButton = styled.button`
  position: absolute;
  top: -60px; /* Acima da tabela */
  left: 0; /* Alinhado à direita */
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

export default function Content() {
  return (
    <>
      <ContentIndex>
        <TableContainer>
          <AddButton>+ ADICIONAR</AddButton>
          <Table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Fabricante</th>
                <th>Ano</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corolla</td>
                <td>Toyota</td>
                <td>2022</td>
                <td>R$ 150.000</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdEdit />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <td>Civic</td>
                <td>Honda</td>
                <td>2021</td>
                <td>R$ 140.000</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdEdit />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <td>Golf</td>
                <td>Volkswagen</td>
                <td>2020</td>
                <td>R$ 130.000</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdEdit />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <td>Ka</td>
                <td>Ford</td>
                <td>2019</td>
                <td>R$ 50.000</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdEdit />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdDelete />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </ContentIndex>
    </>
  )
}
