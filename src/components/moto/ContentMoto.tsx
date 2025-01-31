import React, { useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { postMotos } from '../../services/moto'
import { currentYear, formatPrice } from '../../utils/formatDate'

import TableVeiculo from '../veiculo/TableVeiculo'
import Modal from '../veiculo/Modal'
import NoResultsMessage from '../layout/NoResultMessage'

interface Moto {
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada: string
}

interface ContentProps {
  motos: Moto[]
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

const Content: React.FC<ContentProps> = ({
  motos,
  isModalOpen,
  setIsModalOpen,
}) => {
  const initialFormData = {
    veiculoId: 0,
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

  if (motos.length === 0) {
    return <NoResultsMessage />
  }

  return (
    <>
      <TableVeiculo veiculos={motos} tipo="moto" />
      <Modal
        isOpen={isModalOpen}
        title="Adicionar moto"
        type="moto"
        formData={{
          ...formDataMoto,
          cilindrada: formDataMoto.cilindrada || '',
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
