import { api } from './api'

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
