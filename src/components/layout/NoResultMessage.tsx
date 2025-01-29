import React from 'react'
import { Message } from '../../layouts/content'

const NoResultsMessage: React.FC = () => {
  return (
    <Message>
      <h2>Nenhum resultado encontrado!</h2>
      <p>Recarregue a página e tente novamente!</p>
    </Message>
  )
}

export default NoResultsMessage
