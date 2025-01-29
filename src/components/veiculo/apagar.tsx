import React from 'react'

// import { toast } from 'react-toastify'
import { MdDelete } from 'react-icons/md'

import { deleteMotos } from '../../services/moto'

interface ApagarProps {
  motoId: number
}

const Apagar: React.FC<ApagarProps> = ({ motoId }) => {
  const handleDelete = async () => {
    try {
      if (motoId) {
        await deleteMotos(motoId)
        // toast.success('Veículo apagado!')
      } else {
        console.error('motoId is undefined')
      }

      window.location.reload()
    } catch (error) {
      console.error(`Erro ao excluir moto: ${error}`)
    }
  }

  return (
    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
      <MdDelete onClick={handleDelete} />
    </td>
  )
}

export default Apagar
