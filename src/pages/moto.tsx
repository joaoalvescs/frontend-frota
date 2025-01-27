/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import SideBar from '../components/layout/SideBar'

import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from '../layouts/content'

import { Container } from '../layouts/app'
import { getMotos } from '../services/moto'

import { ToastContainer } from 'react-toastify'
import ContentMoto from '../components/moto/ContentMoto'

export default function Moto() {
  const [motos, setMotos] = useState<any[]>([])

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

  return (
    <>
      <Container>
        <SideBar />
        <ContentIndex>
          <ToastContainer />
          <TableContainer>
            <ControlsContainer>
              <ContentMoto motos={motos} />
            </ControlsContainer>
          </TableContainer>
        </ContentIndex>
      </Container>
    </>
  )
}
