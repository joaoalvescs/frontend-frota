interface TableColumns {
  tipo: string
}

const TableColumns: React.FC<TableColumns> = ({ tipo }) => {
  return (
    <tr>
      {tipo === 'moto' ? (
        <>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Ano</th>
          <th>Cilindradas</th>
          <th>Editar</th>
          <th>Apagar</th>
        </>
      ) : tipo === 'carro' ? (
        <>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Combustível</th>
          <th>Portas</th>
          <th>Editar</th>
          <th>Apagar</th>
        </>
      ) : (
        <>
          <th>Modelo</th>
          <th>Fabricante</th>
          <th>Ano</th>
          <th>Preço (R$)</th>
          <th>Editar</th>
          <th>Apagar</th>
        </>
      )}
    </tr>
  )
}

export default TableColumns
