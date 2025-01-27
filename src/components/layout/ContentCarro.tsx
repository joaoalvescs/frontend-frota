import React, { useState } from 'react'

import Modal from './Modal'
import Button from './AddButton'
import TableCarro from './TableCarro'

import { currentYear, formatPrice } from '../../utils/formatDate'

export interface Carro {
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
    modelo: '',
    fabricante: '',
    ano: currentYear,
    preco: '',
    cilindrada: '',
  }

  const [formDataMoto, setFormDataMoto] = useState(initialFormData)

  const handleCancel = () => {
    setFormDataMoto(initialFormData)
    setIsModalOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'ano') {
      const year = parseInt(value, 10)
      if (!isNaN(year) && year >= 1930 && year <= 2100) {
        setFormDataMoto({ ...formDataMoto, [name]: year })
      }
    } else if (name === 'preco') {
      const formattedValue = formatPrice(value)
      setFormDataMoto({ ...formDataMoto, [name]: formattedValue })
    } else if (name === 'cilindrada') {
      const cilindrada = parseFloat(value)
      if (!isNaN(cilindrada) && cilindrada > 1) {
        setFormDataMoto({ ...formDataMoto, [name]: value })
      } else {
        console.warn('Cilindrada deve ser maior que 1!')
      }
    } else {
      setFormDataMoto({ ...formDataMoto, [name]: value })
    }
  }

  const handleAddVehicle = () => {
    console.log('Dados do veículo:', formDataMoto)
    setIsModalOpen(false)
  }

  return (
    <>
      <Button setIsModalOpen={setIsModalOpen} />
      <TableCarro carros={carros} />
      <Modal
        isOpen={isModalOpen}
        title="Adicionar carro"
        type="carro"
        formData={{
          ...formDataMoto,
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
