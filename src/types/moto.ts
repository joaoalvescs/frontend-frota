export interface ModalPropsMoto {
  isOpen: boolean
  title: string
  type: 'moto' | 'carro'
  formData: {
    veiculoId: number
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
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void
}

export interface Moto {
  veiculoId?: number
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada: string
}

export interface TableMotoProps {
  motos: Moto[]
}
