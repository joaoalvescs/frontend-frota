/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'

import { Container } from '../layouts/app'
import SideBar from '../components/layout/SideBar'

import {
  ContentIndex,
  ControlsContainer,
  TableContainer,
} from '../layouts/content'

import { getCarros } from '../services/carro'
import ContentCarro from '../components/layout/ContentCarro'

export default function Carro() {
  const [carros, setCarros] = useState<any[]>([])

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

  return (
    <>
      <Container>
        <SideBar />
        <ContentIndex>
          <TableContainer>
            <ControlsContainer>
              <ContentCarro carros={carros} />
            </ControlsContainer>
          </TableContainer>
        </ContentIndex>
      </Container>
    </>
  )
}
