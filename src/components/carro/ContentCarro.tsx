import React, { useState } from 'react'

import { toast } from 'react-toastify'

import { postCarros } from '../../services/carro'
import { currentYear, formatPrice } from '../../utils/formatDate'

import TableVeiculo from '../veiculo/TableVeiculo'
import Modal from '../veiculo/Modal'
import Button from '../layout/AddButton'

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
}

const ContentCarro: React.FC<ContentProps> = ({ carros }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const initialFormData = {
    veiculoId: 0,
    modelo: '',
    fabricante: '',
    ano: currentYear,
    preco: '',
    quantidadePortas: 0,
    tipoCombustivel: '',
  }

  const [formDataMoto, setFormDataMoto] = useState(initialFormData)

  const handleCancel = () => {
    setFormDataMoto(initialFormData)
    setIsModalOpen(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target

    if (name === 'ano') {
      const year = parseInt(value, 10)
      if (!isNaN(year) && year >= 1930 && year <= 2100) {
        setFormDataMoto({ ...formDataMoto, [name]: year })
      }
    } else if (name === 'preco') {
      const formattedValue = formatPrice(value)
      setFormDataMoto({ ...formDataMoto, [name]: formattedValue })
    } else if (name === 'quantidadePortas') {
      const portas = parseInt(value, 10)
      if (!isNaN(portas) && portas > 0) {
        setFormDataMoto({ ...formDataMoto, [name]: portas })
      }
    } else {
      setFormDataMoto({ ...formDataMoto, [name]: value })
    }
  }

  const handleAddVehicle = async () => {
    const payload = {
      carro: {
        quantidadePortas: formDataMoto.quantidadePortas,
        tipoCombustivel: formDataMoto.tipoCombustivel,
      },
      veiculo: {
        modelo: formDataMoto.modelo,
        fabricante: formDataMoto.fabricante,
        ano: formDataMoto.ano.toString(),
        preco: parseFloat(formDataMoto.preco.replace(',', '').replace('.', '')),
      },
    }

    console.log('Payload enviado: ', payload)

    try {
      const response = await postCarros(payload)
      console.log('Veículo cadastrado com sucesso:', response)
      setIsModalOpen(false)
      setFormDataMoto(initialFormData)

      toast.success('Carro cadastrado!')
    } catch (error) {
      console.error('Erro ao cadastrar veículo:', error)
    }
  }

  return (
    <>
      <Button setIsModalOpen={setIsModalOpen} />
      <TableVeiculo veiculos={carros} tipo="carro" />
      <Modal
        isOpen={isModalOpen}
        title="Adicionar carro"
        type="carro"
        formData={{
          ...formDataMoto,
          quantidadePortas: formDataMoto.quantidadePortas || 0,
          tipoCombustivel: formDataMoto.tipoCombustivel || '',
          ano: formDataMoto.ano.toString(),
        }}
        onClose={handleCancel}
        onSave={handleAddVehicle}
        onInputChange={handleInputChange}
      />
    </>
  )
}

export default ContentCarro
