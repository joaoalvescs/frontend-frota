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
