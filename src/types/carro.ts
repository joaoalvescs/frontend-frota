export interface Carro {
  veiculoId?: number
  modelo: string
  fabricante: string
  ano: number
  preco: string
  quantidadePortas: number
  tipoCombustivel: string
}

export interface TableCarroProps {
  carros: Carro[]
}
