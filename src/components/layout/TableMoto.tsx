import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { Table } from '../../layouts/content'
import { TableMotoProps } from '../../types/moto'

const TableMoto: React.FC<TableMotoProps> = ({ motos }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Preço</th>
          <th>Cilindradas</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {motos.map((moto, index) => (
          <tr key={index}>
            <td>{moto.modelo}</td>
            <td>{moto.fabricante}</td>
            <td>{moto.ano}</td>
            <td>{moto.cilindrada}</td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              <MdEdit />
            </td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              <MdDelete />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableMoto
