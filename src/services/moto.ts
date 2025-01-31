import { api } from './api'
import { Veiculo } from '../types/veiculo'

export async function getMotos() {
  try {
    const response = await api.get(`/moto/all`, {
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

export async function postMotos(data: {
  moto: { cilindrada: number }
  veiculo: { modelo: string; fabricante: string; ano: string; preco: number }
}) {
  try {
    const response = await api.post('/moto/criar', data, {
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

export async function deleteMotos(id: number) {
  try {
    const response = await api.delete(`/veiculo/apagar/${id}`, {
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

export async function putMotos(data: {
  moto: { id: number; cilindrada: number }
  veiculo: {
    id: number
    modelo: string
    fabricante: string
    ano: string
    preco: number
  }
}) {
  try {
    const response = await api.put('/moto/atualizar', data, {
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

export async function searchMotos(data: { termo: string }) {
  try {
    const response = await api.post(`/moto/pesquisar`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar motos:`, error)
    return []
  }
}

export const buildMotoData = (veiculo: Veiculo) => ({
  moto: {
    id: veiculo.motoId ?? veiculo.veiculoId ?? 0,
    cilindrada: veiculo.cilindrada ? parseInt(veiculo.cilindrada) : 0,
  },
  veiculo: {
    id: veiculo.veiculoId ?? veiculo.motoId ?? 0,
    modelo: veiculo.modelo,
    fabricante: veiculo.fabricante,
    ano: String(veiculo.ano),
    preco: parseFloat(veiculo.preco.toString()),
  },
})
