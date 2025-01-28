import React from 'react'
import { MdEdit } from 'react-icons/md'

import { Table } from '../../layouts/content'
import { TableCarroProps } from '../../types/carro'

import Apagar from '../veiculo/Apagar'

const TableCarro: React.FC<TableCarroProps> = ({ carros }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Combustível</th>
          <th>Portas</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {carros.map((carro, index) => (
          <tr key={index}>
            <td>{carro.modelo}</td>
            <td>{carro.fabricante}</td>
            <td>{carro.tipoCombustivel}</td>
            <td>{carro.quantidadePortas}</td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              <MdEdit />
            </td>
            {carro.veiculoId !== undefined && (
              <Apagar motoId={carro.veiculoId} />
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableCarro
