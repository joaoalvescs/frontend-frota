import { useState } from 'react'
import { OkButton, SearchInput } from '../../layouts/content'

interface FilterProps {
  setSearchTerm: (term: string) => void
  onSearch: () => void
}

export default function Filter({ setSearchTerm, onSearch }: FilterProps) {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <SearchInput
        placeholder="Filtrar por ano, modelo ou fabricante"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          setSearchTerm(e.target.value)
        }}
      />
      <OkButton onClick={onSearch}>Ok</OkButton>
    </>
  )
}
