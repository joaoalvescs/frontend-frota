import React from 'react'
import { MdEdit } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'

import { Table } from '../../layouts/content'
import { TableMotoProps } from '../../types/moto'

import Apagar from '../veiculo/Apagar'

const TableMoto: React.FC<TableMotoProps> = ({ motos }) => {
  return (
    <Table>
      <ToastContainer />
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Ano</th>
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
            {moto.veiculoId !== undefined && <Apagar motoId={moto.veiculoId} />}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableMoto
