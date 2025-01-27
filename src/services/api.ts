import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 300000,
  timeoutErrorMessage: 'Não foi possivel conectar ao servidor!',
})
