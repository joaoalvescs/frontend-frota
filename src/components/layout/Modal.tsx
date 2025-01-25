import React from 'react'
import {
  ModalOverlay,
  ModalContent,
  TitleModal,
  ModalActions,
  Input,
  CancelButton,
  SaveButton,
} from '../../layouts/content'

interface ModalProps {
  isOpen: boolean
  title: string
  formData: {
    modelo: string
    fabricante: string
    ano: string
    preco: string
  }
  onClose: () => void
  onSave: () => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  formData,
  onClose,
  onSave,
  onInputChange,
}) => {
  if (!isOpen) return null

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
