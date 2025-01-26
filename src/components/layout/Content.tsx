import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import {
  AddButton,
  ContentIndex,
  ControlsContainer,
  FilterSelect,
  OkButton,
  Table,
  TableContainer,
} from '../../layouts/content'
import Modal from './Modal'
import { formatPrice } from '../../utils/formatDate'

export default function Content() {
  const currentYear = new Date().getFullYear()

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
          <Table>
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Fabricante</th>
                <th>Ano</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corolla</td>
                <td>Toyota</td>
                <td>2022</td>
                <td>R$ 150.000,00</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdEdit />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <MdDelete />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableContainer>
      </ContentIndex>
      <Modal
        isOpen={isModalOpen}
        title="Adicionar veículo"
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
