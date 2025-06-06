import { Button } from '@/shared/ui/Button.tsx'
import edit from '@/assets/edit.png'
import del from '@/assets/delete.png'

type RowActionsProps = {
  onEdit: () => void
  onDelete: () => void
}
export const RowActions = ({ onEdit, onDelete }: RowActionsProps) => {
  return (
    <>
      <Button onClick={onEdit}>
        <img src={edit} alt="" width={20} />
      </Button>
      <Button onClick={onDelete}>
        <img src={del} alt="" width={20} />
      </Button>
    </>
  )
}
