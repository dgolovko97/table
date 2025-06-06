import { useState } from 'react'
import { useRowStore } from './useRowStore'
import type { Row } from '@/entities/row'

export const useRowCrudUI = () => {
  const [showValueForm, setShowValueForm] = useState(false)
  const [showRowForm, setShowRowForm] = useState(false)
  const [typeActionForm, setTypeActionForm] = useState<'edit' | 'add'>('edit')

  const editingValue = useRowStore(state => state.editingValue)
  const setEditingValue = useRowStore(state => state.setEditingValue)

  const editingRow = useRowStore(state => state.editingRow)
  const setEditingRow = useRowStore(state => state.setEditingRow)

  const openAddValueForm = (row: Row) => {
    setEditingRow(row)
    setEditingValue(null)
    setTypeActionForm('add')
    setShowValueForm(true)
  }

  const openEditValueForm = (row: Row, idx: number, value: string) => {
    setEditingRow(row)
    setEditingValue({ value, idx })
    setTypeActionForm('edit')
    setShowValueForm(true)
  }

  const openEditRowForm = (row: Row) => {
    setEditingRow(row)
    setTypeActionForm('edit')
    setShowRowForm(true)
  }

  const openAddRowForm = () => {
    setEditingRow(undefined)
    setTypeActionForm('add')
    setShowRowForm(true)
  }

  const cancelValueForm = () => {
    setEditingValue(null)
    setShowValueForm(false)
  }

  const cancelRowForm = () => {
    setEditingRow(undefined)
    setShowRowForm(false)
  }

  return {
    showValueForm,
    showRowForm,
    typeActionForm,
    editingValue,
    editingRow,
    openAddValueForm,
    openEditValueForm,
    openEditRowForm,
    openAddRowForm,
    cancelValueForm,
    cancelRowForm,
    setTypeActionForm, // вдруг пригодится вручную
  }
}
