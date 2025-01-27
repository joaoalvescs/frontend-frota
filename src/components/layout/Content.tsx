import React, { useEffect, useState } from 'react'

import {
  AddButton,
  ContentIndex,
  ControlsContainer,
  FilterSelect,
  OkButton,
  TableContainer,
} from '../../layouts/content'
import { getMotos } from '../../services/moto'

import Modal from './Modal'
import TableMoto from './TableMoto'

import { currentYear, formatPrice } from '../../utils/formatDate'

export default function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [motos, setMotos] = useState([])

  const initialFormData = {
    modelo: '',
    fabricante: '',
    ano: currentYear,
    preco: '',
    cilindrada: '',
  }

  const [formDataMoto, setFormDataMoto] = useState(initialFormData)

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const motosData = await getMotos()
        console.log('Motos:', motosData)
        setMotos(motosData)
      } catch (error) {
        console.error('Erro ao buscar motos:', error)
      }
    }

    fetchMotos()
  }, [])

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
      <ContentIndex>
        <TableContainer>
          <ControlsContainer>
            <AddButton onClick={() => setIsModalOpen(true)}>
              + ADICIONAR
            </AddButton>
            <FilterSelect>
              <option value="" disabled selected>
                Filtrar
              </option>
              <option value="modelo">Modelo</option>
              <option value="ano">Ano</option>
              <option value="fabricante">Fabricante</option>
            </FilterSelect>
            <OkButton>Ok</OkButton>
          </ControlsContainer>
          <TableMoto motos={motos} />
        </TableContainer>
      </ContentIndex>
      <Modal
        isOpen={isModalOpen}
        title="Adicionar moto"
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
