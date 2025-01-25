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

export default function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    modelo: '',
    fabricante: '',
    ano: '',
    preco: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAddVehicle = () => {
    console.log('Dados do veículo:', formData)
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
                <td>R$ 150.000</td>
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
        formData={formData}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddVehicle}
        onInputChange={handleInputChange}
      />
    </>
  )
}
