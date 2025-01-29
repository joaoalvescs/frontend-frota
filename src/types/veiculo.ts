export interface Veiculo {
  id?: number
  motoId?: number
  carroId?: number
  veiculoId?: number
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
  tipo: 'moto' | 'carro' | 'veiculo'
}
