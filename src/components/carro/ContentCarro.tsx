import React, { useState } from 'react'

import { toast } from 'react-toastify'

import { postCarros } from '../../services/carro'
import { currentYear, formatPrice } from '../../utils/formatDate'

import TableVeiculo from '../veiculo/TableVeiculo'
import Modal from '../veiculo/Modal'

export interface Carro {
  veiculoId: number
  modelo: string
  fabricante: string
  ano: number
  preco: string
  quantidadePortas: number
  tipoCombustivel: string
}

interface ContentProps {
  carros: Carro[]
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

const ContentCarro: React.FC<ContentProps> = ({
  carros,
  isModalOpen,
  setIsModalOpen,
}) => {
  const initialFormData = {
    veiculoId: 0,
    modelo: '',
    fabricante: '',
    ano: currentYear,
    preco: '',
    quantidadePortas: 0,
    tipoCombustivel: '',
  }

  const [formDataCarro, setFormDataCarro] = useState(initialFormData)

  const handleCancel = () => {
    setFormDataCarro(initialFormData)
    setIsModalOpen(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    if (name === 'ano') {
      const year = parseInt(value, 10)
      if (!isNaN(year) && year >= 1930 && year <= 2100) {
        setFormDataCarro({ ...formDataCarro, [name]: year })
      }
    } else if (name === 'preco') {
      const formattedValue = formatPrice(value)
      setFormDataCarro({ ...formDataCarro, [name]: formattedValue })
    } else if (name === 'quantidadePortas') {
      const portas = parseInt(value, 10)
      if (!isNaN(portas) && portas > 0) {
        setFormDataCarro({ ...formDataCarro, [name]: portas })
      }
    } else {
      setFormDataCarro({ ...formDataCarro, [name]: value })
    }
  }

  const handleAddVehicle = async () => {
    const payload = {
      carro: {
        quantidadePortas: formDataCarro.quantidadePortas,
        tipoCombustivel: formDataCarro.tipoCombustivel,
      },
      veiculo: {
        modelo: formDataCarro.modelo,
        fabricante: formDataCarro.fabricante,
        ano: formDataCarro.ano.toString(),
        preco: parseFloat(
          formDataCarro.preco.replace(',', '').replace('.', ''),
        ),
      },
    }

    console.log('Payload enviado: ', payload)

    try {
      const response = await postCarros(payload)
      console.log('Veículo cadastrado com sucesso:', response)
      setIsModalOpen(false)
      setFormDataCarro(initialFormData)

      // toast.success('Carro cadastrado!')

      window.location.reload()
    } catch (error) {
      console.error('Erro ao cadastrar veículo:', error)
      toast.error('Erro ao cadastrar carro!')
    }
  }

  return (
    <>
      <TableVeiculo veiculos={carros} tipo="carro" />
      <Modal
        isOpen={isModalOpen}
        title="Adicionar carro"
        type="carro"
        formData={{
          ...formDataCarro,
          quantidadePortas: formDataCarro.quantidadePortas || 0,
          tipoCombustivel: formDataCarro.tipoCombustivel || '',
          ano: formDataCarro.ano.toString(),
        }}
        onClose={handleCancel}
        onSave={handleAddVehicle}
        onInputChange={handleInputChange}
      />
    </>
  )
}

export default ContentCarro
