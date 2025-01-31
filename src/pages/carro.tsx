/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { Container } from '../layouts/app'

import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from '../layouts/content'
import { getCarros, searchCarros } from '../services/carro'

import ContentCarro from '../components/carro/ContentCarro'
import SideBar from '../components/layout/SideBar'
import Filter from '../components/layout/Filter'
import Button from '../components/layout/AddButton'

export default function Carro() {
  const [carros, setCarros] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const carrosData = await getCarros()
        console.log('Carros:', carrosData)
        setCarros(carrosData)
      } catch (error) {
        console.error('Erro ao buscar Carros:', error)
      }
    }

    fetchCarros()
  }, [])

  const handleSearch = async () => {
    try {
      const result = await searchCarros({ termo: searchTerm })
      setCarros(result)
    } catch (error) {
      console.error('Erro ao buscar veículos:', error)
    }
  }

  return (
    <>
      <Container>
        <SideBar />
        <ContentIndex>
          <ToastContainer />
          <TableContainer>
            <ControlsContainer>
              <Filter
                setSearchTerm={setSearchTerm}
                onSearch={handleSearch}
                placeholderTitle="Filtrar carro por ano, modelo ou fabricante"
              />
              <Button setIsModalOpen={setIsModalOpen} />
            </ControlsContainer>
            <ContentCarro
              carros={carros}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </TableContainer>
        </ContentIndex>
      </Container>
    </>
  )
}
