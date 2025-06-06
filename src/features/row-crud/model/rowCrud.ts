import { type Row, type Value } from '@/entities/row'

type rowCrudActionsProps = {
  rows: Row[]
  editingRow?: Row | undefined
  editingValue: Value | undefined
  setRows: (rows: Row[]) => void
}
export const createRowCrudHandlers = ({
  rows,
  editingRow,
  editingValue,
  setRows,
}: rowCrudActionsProps) => {
  const filterRows = (rows: Row[]): Row[] => {
    return rows.sort((a: Row, b: Row) => (a.type > b.type ? 1 : -1))
  }

  const saveRow = (row: Row): void => {
    setRows(filterRows([...rows, row]))
  }

  const saveEditRow = (row: Row): void => {
    setRows(filterRows([...rows.filter(row => row !== editingRow), row]))
  }

  const handleDeleteRow = (row: Row): void => {
    setRows(filterRows([...rows.filter(curRow => curRow !== row)]))
  }

  const handleDeleteValue = (row: Row, idx: number): void => {
    const newRow: Row = {
      ...row,
      values: row.values.filter((_, curIdx) => curIdx !== idx),
    }
    setRows(filterRows([...rows.filter(curRow => curRow !== row), newRow]))
  }
  const saveEditValue = (newValue: string): void => {
    if (!editingRow) return
    if (!editingValue) return
    const newValues = [...editingRow.values]

    newValues[editingValue.idx] = newValue
    setRows(
      filterRows([
        ...rows.filter(row => row !== editingRow),
        { ...editingRow, values: [...newValues] },
      ]),
    )
  }

  const saveNewValue = (newValue: string): void => {
    if (!editingRow) return
    setRows(
      filterRows([
        ...rows.filter(row => row !== editingRow),
        { ...editingRow, values: [...editingRow.values, newValue] },
      ]),
    )
  }

  return {
    saveRow,
    saveEditRow,
    handleDeleteRow,
    handleDeleteValue,
    saveEditValue,
    saveNewValue,
  }
}
