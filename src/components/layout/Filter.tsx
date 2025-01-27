import { FilterSelect, OkButton } from '../../layouts/content'

export default function Filter() {
  return (
    <>
      <FilterSelect>
        <option value="" disabled selected>
          Filtrar
        </option>
        <option value="modelo">Modelo</option>
        <option value="ano">Ano</option>
        <option value="fabricante">Fabricante</option>
      </FilterSelect>
      <OkButton>Ok</OkButton>
    </>
  )
}
