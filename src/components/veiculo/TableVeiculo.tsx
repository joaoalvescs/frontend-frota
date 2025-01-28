import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { MdEdit } from 'react-icons/md'

import { putMotos } from '../../services/moto'

import { Table } from '../../layouts/content'

import Apagar from './Apagar'
import Modal from './Modal'

interface Veiculo {
  veiculoId?: number
  motoId?: number
  carroId?: number
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null)

  const handleEdit = (veiculo: Veiculo) => {
    setSelectedVeiculo(veiculo)
    setIsModalOpen(true)
  }

  /*
  const handleSave = () => {
    console.log('Veículo salvo', selectedVeiculo)
    setIsModalOpen(false)
  } */

  const handleSave = async () => {
    if (selectedVeiculo) {
      try {
        const veiculoData = {
          moto: {
            id: selectedVeiculo.motoId || 0,
            cilindrada: selectedVeiculo.cilindrada
              ? parseInt(selectedVeiculo.cilindrada)
              : 0,
          },
          veiculo: {
            id: selectedVeiculo.veiculoId || 0,
            modelo: selectedVeiculo.modelo,
            fabricante: selectedVeiculo.fabricante,
            ano: String(selectedVeiculo.ano),
            preco: parseFloat(selectedVeiculo.preco),
          },
        }

        const response = await putMotos(veiculoData)
        console.log('Veículo atualizado com sucesso:', response)
        setIsModalOpen(false)
      } catch (error) {
        console.error('Erro ao salvar veículo', error)
      }
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    if (selectedVeiculo) {
      setSelectedVeiculo({
        ...selectedVeiculo,
        [name]: value,
      })
    }
  }

  return (
    <>
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
              <td>
                {tipo === 'moto' ? veiculo.ano : veiculo.quantidadePortas}
              </td>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <MdEdit onClick={() => handleEdit(veiculo)} />
              </td>
              {veiculo.veiculoId !== undefined && (
                <Apagar motoId={veiculo.veiculoId} />
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedVeiculo && (
        <Modal
          isOpen={isModalOpen}
          title="Editar"
          type={tipo}
          formData={selectedVeiculo}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          onInputChange={handleInputChange}
        />
      )}
    </>
  )
}

export default TableVeiculo
