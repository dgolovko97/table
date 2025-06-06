import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { type ValueFormProps } from '../model/'

export const ValueForm = ({ onSave, onCancel, initialValue = '' }: ValueFormProps) => {
  const [newValue, setNewValue] = useState<string>(initialValue)
  const handleSave = (e: FormEvent) => {
    e.preventDefault()
    onSave(newValue)
  }
  return (
    <Modal title="Заполните данные">
      <form>
        <Input
          id="new_value"
          label="Новое значение"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewValue(e.target.value)}
          value={newValue}
        />
        <div className="mt-5">
          <Button onClick={handleSave} className="mr-5">
            Сохранить
          </Button>
          <Button onClick={onCancel}>Отменить</Button>
        </div>
      </form>
    </Modal>
  )
}
