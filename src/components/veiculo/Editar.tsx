import React from 'react'
import { MdEdit } from 'react-icons/md'

interface EditarProps {
  veiculoId: number
}

const Editar: React.FC<EditarProps> = () => {
  return (
    <>
      <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
        <MdEdit />
        <button>Editar</button>
      </td>
    </>
  )
}

export default Editar
