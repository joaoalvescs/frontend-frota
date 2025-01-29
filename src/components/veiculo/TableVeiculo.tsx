import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { MdEdit } from 'react-icons/md'

import { buildMotoData, putMotos } from '../../services/moto'
import { buildCarroData, putCarros } from '../../services/carro'

import { TableVeiculoProps, Veiculo } from '../../types/veiculo'

import { Table } from '../../layouts/content'

import Apagar from './Apagar'
import Modal from './Modal'

const TableVeiculo: React.FC<TableVeiculoProps> = ({ veiculos, tipo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null)

  const handleEdit = (veiculo: Veiculo) => {
    setSelectedVeiculo(veiculo)
    setIsModalOpen(true)
  }

  const handleSave = async () => {
    if (selectedVeiculo) {
      try {
        let veiculoData

        if (tipo === 'moto') {
          veiculoData = buildMotoData(selectedVeiculo)
          await putMotos(veiculoData)
        } else {
          veiculoData = buildCarroData(selectedVeiculo)
          await putCarros(veiculoData)
        }

        console.log('Veículo atualizado com sucesso:', veiculoData)
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
