import { AddButton } from '../../layouts/content'

interface ButtonProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> // Tipagem do setter do useState
}

export default function Button({ setIsModalOpen }: ButtonProps) {
  return <AddButton onClick={() => setIsModalOpen(true)}>+ ADICIONAR</AddButton>
}
