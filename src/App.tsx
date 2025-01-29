import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { getVeiculos } from './services/veiculo'

import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from './layouts/content'
import SideBar from './components/layout/SideBar'
import Filter from './components/layout/Filter'

import { Container } from './layouts/app'

import ContentVeiculo from './components/veiculo/ContentVeiculo'

const Login: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [veiculos, setVeiculos] = useState<any[]>([])

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const veiculosData = await getVeiculos()
        console.log('Motos:', veiculosData)
        setVeiculos(veiculosData)
      } catch (error) {
        console.error('Erro ao buscar motos:', error)
      }
    }

    fetchMotos()
  }, [])

  return (
    <Container>
      <SideBar />
      <ContentIndex>
        <ToastContainer />
        <TableContainer>
          <ControlsContainer>
            <Filter />
            <ContentVeiculo veiculos={veiculos} />
          </ControlsContainer>
        </TableContainer>
      </ContentIndex>
    </Container>
  )
}

export default Login
