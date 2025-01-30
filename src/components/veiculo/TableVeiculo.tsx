import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { MdEdit } from 'react-icons/md'

import { buildMotoData, putMotos } from '../../services/moto'
import { buildCarroData, putCarros } from '../../services/carro'
import { buildVeiculoData, putVeiculos } from '../../services/veiculo'

import { TableVeiculoProps, Veiculo } from '../../types/veiculo'

import { Table } from '../../layouts/content'

import Apagar from './Apagar'
import Modal from './Modal'
import TableColumns from './TableColumns'

const TableVeiculo: React.FC<TableVeiculoProps> = ({ veiculos, tipo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVeiculo, setSelectedVeiculo] = useState<Veiculo | null>(null)

  const handleEdit = (veiculo: Veiculo) => {
    setSelectedVeiculo(veiculo)
    setIsModalOpen(true)
  }

  const handleSave = async () => {
    if (!selectedVeiculo) return

    console.log('selected veiculo: ', JSON.stringify(selectedVeiculo))

    if (
      tipo === 'veiculo' &&
      (selectedVeiculo.id === undefined || selectedVeiculo.id === null)
    ) {
      console.error('ID do veículo é indefinido e não pode ser salvo.')
      return
    }

    try {
      let veiculoData

      if (tipo === 'moto') {
        veiculoData = buildMotoData(selectedVeiculo)
        await putMotos(veiculoData)
      } else if (tipo === 'carro') {
        veiculoData = buildCarroData(selectedVeiculo)
        await putCarros(veiculoData)
      } else {
        veiculoData = buildVeiculoData(selectedVeiculo)
        console.log('Payload enviado para API:', JSON.stringify(veiculoData))
        await putVeiculos(veiculoData)
      }

      console.log('Veículo atualizado com sucesso:', veiculoData)
      setIsModalOpen(false)
    } catch (error) {
      console.error('Erro ao salvar veículo', error)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    if (selectedVeiculo) {
      setSelectedVeiculo({
        ...selectedVeiculo,
        [name]: name === 'preco' ? Number(value) : value,
      })
    }
  }
  return (
    <>
      <Table>
        <ToastContainer />
        <thead>
          <TableColumns tipo={tipo} />
        </thead>
        <tbody>
          {veiculos.map((veiculo, index) => (
            <tr key={index}>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.fabricante}</td>
              <td>
                {tipo === 'moto'
                  ? veiculo.ano
                  : tipo === 'carro'
                  ? veiculo.tipoCombustivel
                  : veiculo.ano}
              </td>
              <td>
                {tipo === 'moto'
                  ? veiculo.cilindrada
                  : tipo === 'carro'
                  ? veiculo.quantidadePortas
                  : new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(Number(veiculo.preco))}
              </td>
              <td
                style={{
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                }}
              >
                <MdEdit onClick={() => handleEdit(veiculo)} />
              </td>
              {(tipo === 'veiculo' ? veiculo.id : veiculo.veiculoId) !==
                undefined && (
                <Apagar
                  motoId={
                    (tipo === 'veiculo' ? veiculo.id : veiculo.veiculoId) ?? 0
                  }
                />
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
