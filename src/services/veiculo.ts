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
