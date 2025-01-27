export interface ModalPropsMoto {
  isOpen: boolean
  title: string
  type: string
  formData: {
    modelo: string
    fabricante: string
    ano: string
    preco: string
    cilindrada?: string
    quantidadePortas?: number
    tipoCombustivel?: string
  }
  onClose: () => void
  onSave: () => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Moto {
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada: number
}

export interface TableMotoProps {
  motos: Moto[]
}
