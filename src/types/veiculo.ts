export interface Veiculo {
  veiculoId?: number
  motoId?: number
  carroId?: number
  modelo: string
  fabricante: string
  ano: number
  preco: string
  cilindrada?: string
  quantidadePortas?: number
  tipoCombustivel?: string
}

export interface TableVeiculoProps {
  veiculos: Veiculo[]
  tipo: 'moto' | 'carro'
}
