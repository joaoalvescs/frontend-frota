import React from 'react'

import 'react-toastify/dist/ReactToastify.css'

import { Veiculo } from '../../types/veiculo'

import TableVeiculo from '../veiculo/TableVeiculo'

interface ContentProps {
  veiculos: Veiculo[]
}

const Content: React.FC<ContentProps> = ({ veiculos }) => {
  return (
    <>
      <TableVeiculo veiculos={veiculos} tipo="veiculo" />
    </>
  )
}

export default Content
