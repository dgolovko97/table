import { type Row } from '@/entities/row'

export type ValueFormProps = {
  onSave: (value: string) => void
  onCancel: () => void
  initialValue?: string
}
export type RowFormProps = {
  onSave: (row: Row) => void
  onCancel: () => void
  initialValue?: Row
}
