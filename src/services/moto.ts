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
