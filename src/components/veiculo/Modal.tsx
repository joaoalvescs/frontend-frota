import React, { useState } from 'react'
import {
  ModalOverlay,
  ModalContent,
  TitleModal,
  ModalActions,
  Input,
  CancelButton,
  SaveButton,
  Select,
  Option,
} from '../../layouts/content'

import { ModalPropsMoto } from '../../types/moto'

const Modal: React.FC<ModalPropsMoto> = ({
  isOpen,
  title,
  type,
  formData,
  onClose,
  onSave,
  onInputChange,
}) => {
  const [errors, setErrors] = useState({
    modelo: '',
    fabricante: '',
    ano: '',
    preco: '',
    cilindrada: '',
    quantidadePortas: '',
    tipoCombustivel: '',
  })

  const combustiveis = ['Gasolina', 'Etanol', 'Diesel', 'Flex']

  if (!isOpen) return null

  const validateFields = () => {
    const newErrors = {
      modelo: formData.modelo.trim() === '' ? 'Modelo é obrigatório' : '',
      fabricante:
        formData.fabricante.trim() === '' ? 'Fabricante é obrigatório' : '',
      ano: formData.ano.toString().trim() === '' ? 'Ano é obrigatório' : '',
      preco: formData.preco.trim() === '' ? 'Preço é obrigatório' : '',
      cilindrada:
        type === 'moto' &&
        (!formData.cilindrada || formData.cilindrada.trim() === '')
          ? 'Cilindrada é obrigatória'
          : '',
      quantidadePortas:
        type === 'carro' &&
        (!formData.quantidadePortas || formData.quantidadePortas <= 0)
          ? 'Quantidade de portas é obrigatória'
          : '',
      tipoCombustivel:
        type === 'carro' &&
        (!formData.tipoCombustivel || formData.tipoCombustivel.trim() === '')
          ? 'Tipo de combustível é obrigatório'
          : '',
    }
    setErrors(newErrors)

    return Object.values(newErrors).every((error) => error === '')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateFields()) {
      onSave()
    }
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <TitleModal>{title}</TitleModal>
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="modelo"
            placeholder="Modelo"
            value={formData.modelo}
            onChange={onInputChange}
          />
          {errors.modelo && (
            <span style={{ color: 'red' }}>{errors.modelo}</span>
          )}

          <Input
            type="text"
            name="fabricante"
            placeholder="Fabricante"
            value={formData.fabricante}
            onChange={onInputChange}
          />
          {errors.fabricante && (
            <span style={{ color: 'red' }}>{errors.fabricante}</span>
          )}

          <Input
            type="number"
            name="ano"
            placeholder="Ano"
            value={formData.ano}
            onChange={onInputChange}
          />
          {errors.ano && <span style={{ color: 'red' }}>{errors.ano}</span>}

          <Input
            type="text"
            name="preco"
            placeholder="Preço"
            value={formData.preco}
            onChange={onInputChange}
          />
          {errors.preco && <span style={{ color: 'red' }}>{errors.preco}</span>}

          {type === 'moto' ? (
            <>
              <Input
                type="number"
                name="cilindrada"
                placeholder="Cilindrada"
                value={formData.cilindrada || ''}
                onChange={onInputChange}
              />
              {errors.cilindrada && (
                <span style={{ color: 'red' }}>{errors.cilindrada}</span>
              )}
            </>
          ) : (
            <>
              <Input
                type="number"
                name="quantidadePortas"
                placeholder="Quantidade de portas"
                value={formData.quantidadePortas || ''}
                onChange={onInputChange}
              />
              {errors.quantidadePortas && (
                <span style={{ color: 'red' }}>{errors.quantidadePortas}</span>
              )}
              <Select
                name="tipoCombustivel"
                value={formData.tipoCombustivel || ''}
                onChange={onInputChange}
              >
                <Option value="" disabled>
                  Selecione o tipo de combustível
                </Option>
                {combustiveis.map((combustivel) => (
                  <Option key={combustivel} value={combustivel}>
                    {combustivel}
                  </Option>
                ))}
              </Select>

              {errors.tipoCombustivel && (
                <span style={{ color: 'red' }}>{errors.tipoCombustivel}</span>
              )}
            </>
          )}

          <ModalActions>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <SaveButton type="submit">Salvar</SaveButton>
          </ModalActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
