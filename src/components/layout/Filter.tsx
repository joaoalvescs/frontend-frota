import { useState } from 'react'
import { OkButton, SearchInput } from '../../layouts/content'

interface FilterProps {
  setSearchTerm: (term: string) => void
  onSearch: () => void
  placeholderTitle: string
}

export default function Filter({
  setSearchTerm,
  onSearch,
  placeholderTitle,
}: FilterProps) {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <SearchInput
        placeholder={placeholderTitle}
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
