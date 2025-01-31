import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { getVeiculos, searchVeiculos } from './services/veiculo'

import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from './layouts/content'
import { Container } from './layouts/app'

import SideBar from './components/layout/SideBar'
import Filter from './components/layout/Filter'
import ContentVeiculo from './components/veiculo/ContentVeiculo'

const Login: React.FC = () => {
  const [veiculos, setVeiculos] = useState<never[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const veiculosData = await getVeiculos()
        console.log('Veículos:', veiculosData)
        setVeiculos(veiculosData)
      } catch (error) {
        console.error('Erro ao buscar veículos:', error)
      }
    }

    fetchVeiculos()
  }, [])

  const handleSearch = async () => {
    try {
      const result = await searchVeiculos({ termo: searchTerm })
      setVeiculos(result)
    } catch (error) {
      console.error('Erro ao buscar veículos:', error)
    }
  }

  return (
    <Container>
      <SideBar />
      <ContentIndex>
        <ToastContainer />
        <TableContainer>
          <ControlsContainer>
            <Filter
              setSearchTerm={setSearchTerm}
              onSearch={handleSearch}
              placeholderTitle="Filtrar veículo por ano, modelo ou fabricante"
            />
          </ControlsContainer>
          <ContentVeiculo veiculos={veiculos} />
        </TableContainer>
      </ContentIndex>
    </Container>
  )
}

export default Login
