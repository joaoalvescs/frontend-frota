import React, { useState } from 'react'
import { currentYear, formatPrice } from '../../utils/formatDate'
import Modal from './Modal'
import TableMoto from './TableMoto'
import Button from './AddButton'
import { postMotos } from '../../services/moto'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Moto {
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada: string
}

interface ContentProps {
  motos: Moto[]
}

const Content: React.FC<ContentProps> = ({ motos }) => {
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

  const handleAddVehicle = async () => {
    try {
      const requestBody = {
        moto: {
          cilindrada: parseFloat(formDataMoto.cilindrada),
        },
        veiculo: {
          modelo: formDataMoto.modelo,
          fabricante: formDataMoto.fabricante,
          ano: formDataMoto.ano.toString(),
          preco: parseFloat(
            formDataMoto.preco.replace(',', '').replace('.', ''),
          ),
        },
      }

      console.log('Enviando dados para a API:', requestBody)

      const response = await postMotos(requestBody)

      console.log('Resposta da API:', response)

      setFormDataMoto(initialFormData)
      setIsModalOpen(false)

      toast.success('Moto cadastrada!')
    } catch (error) {
      console.error('Erro ao salvar a moto:', error)
      toast.error('Erro ao cadastrar moto!')
    }
  }

  return (
    <>
      <Button setIsModalOpen={setIsModalOpen} />
      <TableMoto motos={motos} />
      <Modal
        isOpen={isModalOpen}
        title="Adicionar moto"
        type="moto"
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

export default Content
