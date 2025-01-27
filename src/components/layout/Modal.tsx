import React from 'react'
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
  if (!isOpen) return null

  const combustiveis = ['Gasolina', 'Etanol', 'Diesel', 'Flex']

  return (
    <ModalOverlay>
      <ModalContent>
        <TitleModal>{title}</TitleModal>
        <form>
          <Input
            type="text"
            name="modelo"
            placeholder="Modelo"
            value={formData.modelo}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="fabricante"
            placeholder="Fabricante"
            value={formData.fabricante}
            onChange={onInputChange}
          />
          <Input
            type="number"
            name="ano"
            placeholder="Ano"
            value={formData.ano}
            onChange={onInputChange}
          />
          <Input
            type="text"
            name="preco"
            placeholder="Preço"
            value={formData.preco}
            onChange={onInputChange}
          />
          {type === 'moto' ? (
            <Input
              type="number"
              name="cilindrada"
              placeholder="Cilindrada"
              value={formData.cilindrada || ''}
              onChange={onInputChange}
            />
          ) : (
            <>
              <Input
                type="number"
                name="quantidadePortas"
                placeholder="Quantidade de portas"
                min={1}
                max={20}
                value={formData.quantidadePortas || ''}
                onChange={onInputChange}
              />
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
            </>
          )}
          <ModalActions>
            <CancelButton onClick={onClose}>Cancelar</CancelButton>
            <SaveButton onClick={onSave}>Salvar</SaveButton>
          </ModalActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
