import { MdDelete, MdEdit } from 'react-icons/md'
import {
  AddButton,
  ContentIndex,
  ControlsContainer,
  FilterSelect,
  Table,
  TableContainer,
} from '../../layouts/content'

export default function Content() {
  return (
    <>
      <ContentIndex>
        <TableContainer>
          <ControlsContainer>
            <AddButton>+ ADICIONAR</AddButton>
            <FilterSelect>
              <option value="" disabled selected>
                Filtrar
              </option>
              <option value="modelo">Modelo</option>
              <option value="ano">Ano</option>
              <option value="fabricante">Fabricante</option>
            </FilterSelect>
          </ControlsContainer>
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
