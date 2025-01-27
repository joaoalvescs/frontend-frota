import { api } from './api'

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
