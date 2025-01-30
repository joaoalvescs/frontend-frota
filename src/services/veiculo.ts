import { Veiculo } from '../types/veiculo'
import { api } from './api'

export async function getVeiculos() {
  try {
    const response = await api.get(`/veiculo/all`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const e = error as Error
    console.error(`Erro ao buscar veículos: ${e.message}`)
  }
}

export async function searchVeiculos(data: { termo: string }) {
  try {
    const response = await api.post(`/veiculo/pesquisar`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar veículos:`, error)
    return []
  }
}

export async function putVeiculos(data: {
  veiculo: {
    id: number
    modelo: string
    fabricante: string
    ano: string
    preco: number
  }
}) {
  console.log('dataset: ' + JSON.stringify(data))
  try {
    const response = await api.put(`/veiculo/atualizar`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    const e = error as Error
    console.error(`Erro ao atualizar veículo: ${e.message}`)
    throw e
  }
}

export const buildVeiculoData = (veiculo: Veiculo) => {
  return {
    veiculo: {
      id: veiculo.id, // No caso de "veiculoId", seria veiculo.id
      modelo: veiculo.modelo,
      fabricante: veiculo.fabricante,
      ano: String(veiculo.ano), // Certifique-se de que o ano seja uma string
      preco: parseFloat(veiculo.preco.toString()), // Garanta que o preco seja numérico
    },
  }
}
