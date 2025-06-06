import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Modal } from '@/shared/ui/Modal.tsx'
import { Input } from '@/shared/ui/Input.tsx'
import { Button } from '@/shared/ui/Button.tsx'
import { type RowFormProps } from '../model'

export const RowForm = ({
  onSave,
  onCancel,
  initialValue = { type: '', name: '', values: [''] },
}: RowFormProps) => {
  const [type, setType] = useState(initialValue?.type)
  const [name, setName] = useState(initialValue?.name)
  const [values, setValues] = useState(initialValue?.values)

  const handleChangeValue = (value: string, idx: number) => {
    const newValues = [...values]
    newValues[idx] = value
    setValues(newValues)
  }
  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSave({
      type,
      name,
      values,
    })
  }
  return (
    <Modal title="Заполните данные">
      <form action="">
        <Input
          id="new_type"
          label="Тип"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setType(e.target.value)
          }
          value={type}
        />
        {values.map((name, idx) => {
          return (
            <Input
              key={`new_value + ${idx}}`}
              id={`new_value + ${idx}}`}
              label="Значение"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeValue(e.target.value, idx)
              }
              value={name}
            />
          )
        })}

        <Input
          id="new_name"
          label="Имя"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={name}
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
