import React from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { Veiculo } from '../../types/veiculo'

import TableVeiculo from '../veiculo/TableVeiculo'
import NoResultsMessage from '../layout/NoResultMessage'

interface ContentProps {
  veiculos: Veiculo[]
}

const Content: React.FC<ContentProps> = ({ veiculos }) => {
  if (veiculos.length === 0) {
    return <NoResultsMessage />
  }

  return <TableVeiculo veiculos={veiculos} tipo="veiculo" />
}

export default Content
