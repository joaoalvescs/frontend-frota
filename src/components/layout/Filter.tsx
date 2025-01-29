import { OkButton, SearchInput } from '../../layouts/content'

export default function Filter() {
  return (
    <>
      <SearchInput placeholder="Filtrar por ano, modelo ou fabricante" />
      <OkButton>Ok</OkButton>
    </>
  )
}
