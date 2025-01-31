import { api } from './api'
import { Veiculo } from '../types/veiculo'

export async function getCarros() {
  try {
    const response = await api.get(`/carro/all`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const e = error as Error
    console.error(`Erro ao buscar motos: ${e.message}`)
  }
}

export async function postCarros(data: {
  carro: { quantidadePortas: number; tipoCombustivel: string }
  veiculo: { modelo: string; fabricante: string; ano: string; preco: number }
}) {
  try {
    const response = await api.post('/carro/criar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const e = error as Error
    console.error(`Erro ao cadastrar carros: ${e.message}`)
    throw e
  }
}

export async function putCarros(data: {
  carro: { id: number; quantidadePortas: number; tipoCombustivel: string }
  veiculo: {
    id: number
    modelo: string
    fabricante: string
    ano: string
    preco: number
  }
}) {
  try {
    const response = await api.put('/carro/atualizar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const e = error as Error
    console.error(`Erro ao cadastrar motos: ${e.message}`)
    throw e
  }
}

export async function searchCarros(data: { termo: string }) {
  try {
    const response = await api.post(`/carro/pesquisar`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar carros:`, error)
    return []
  }
}

export const buildCarroData = (veiculo: Veiculo) => ({
  carro: {
    id: veiculo.carroId ?? veiculo.veiculoId ?? 0,
    quantidadePortas: veiculo.quantidadePortas || 0,
    tipoCombustivel: veiculo.tipoCombustivel || '',
  },
  veiculo: {
    id: veiculo.veiculoId ?? veiculo.carroId ?? 0,
    modelo: veiculo.modelo,
    fabricante: veiculo.fabricante,
    ano: String(veiculo.ano),
    preco: parseFloat(veiculo.preco.toString()),
  },
})
