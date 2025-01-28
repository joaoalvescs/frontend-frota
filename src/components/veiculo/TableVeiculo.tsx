import React from 'react'

import { MdEdit } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'

import { Table } from '../../layouts/content'
import Apagar from './Apagar'

interface Veiculo {
  veiculoId?: number
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada?: string
  quantidadePortas?: number
  tipoCombustivel?: string
}

interface TableVeiculoProps {
  veiculos: Veiculo[]
  tipo: 'moto' | 'carro'
}

const TableVeiculo: React.FC<TableVeiculoProps> = ({ veiculos, tipo }) => {
  return (
    <Table>
      <ToastContainer />
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>{tipo === 'moto' ? 'Cilindradas' : 'Combustível'}</th>
          <th>{tipo === 'moto' ? 'Ano' : 'Portas'}</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {veiculos.map((veiculo, index) => (
          <tr key={index}>
            <td>{veiculo.modelo}</td>
            <td>{veiculo.fabricante}</td>
            <td>
              {tipo === 'moto' ? veiculo.cilindrada : veiculo.tipoCombustivel}
            </td>
            <td>{tipo === 'moto' ? veiculo.ano : veiculo.quantidadePortas}</td>
            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              <MdEdit />
            </td>
            {veiculo.veiculoId !== undefined && (
              <Apagar motoId={veiculo.veiculoId} />
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableVeiculo
