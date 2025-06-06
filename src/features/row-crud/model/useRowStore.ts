import { create } from 'zustand'
import { type Row, type Value } from '@/entities/row'

type RowState = {
  rows: Row[]
  setRows: (rows: Row[]) => void
  addRow: (row: Row) => void
  removeRow: (row: Row) => void
  editingValue: Value | undefined
  setEditingValue: (value: Value | undefined) => void
  editingRow: Row | undefined
  setEditingRow: (row: Row | undefined) => void
}

export const useRowStore = create<RowState>(set => ({
  rows: [
    {
      values: ['арбуз', 'вишня'],
      type: 'Фрукты 1',
      name: 'тип',
    },
    {
      values: ['персик', 'мандарин'],
      type: 'Фрукты 2',
      name: 'value',
    },
  ],
  editingValue: undefined,
  setEditingValue: (value: Value | undefined) => set({ editingValue: value }),
  editingRow: undefined,
  setEditingRow: (row: Row | undefined) => set({ editingRow: row }),
  setRows: rows => set({ rows }),
  addRow: row => set(state => ({ rows: [...state.rows, row] })),
  removeRow: targetRow =>
    set(state => ({ rows: state.rows.filter(row => row != targetRow) })),
}))
