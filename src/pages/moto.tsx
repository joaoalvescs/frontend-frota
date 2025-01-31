/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { getMotos, searchMotos } from '../services/moto'
import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from '../layouts/content'
import { Container } from '../layouts/app'

import SideBar from '../components/layout/SideBar'
import ContentMoto from '../components/moto/ContentMoto'
import Filter from '../components/layout/Filter'
import AddButton from '../components/layout/AddButton'

export default function Moto() {
  const [motos, setMotos] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchMotos = async () => {
      try {
        const motosData = await getMotos()
        console.log('Motos:', motosData)
        setMotos(motosData)
      } catch (error) {
        console.error('Erro ao buscar motos:', error)
      }
    }

    fetchMotos()
  }, [])

  const handleSearch = async () => {
    try {
      const result = await searchMotos({ termo: searchTerm })
      setMotos(result)
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
                placeholderTitle="Filtrar moto por ano, modelo ou fabricante"
              />
              <AddButton setIsModalOpen={setIsModalOpen} />
            </ControlsContainer>
            <ContentMoto
              motos={motos}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </TableContainer>
        </ContentIndex>
      </Container>
    </>
  )
}
