import { Button } from '@/shared/ui/Button.tsx'
import edit from '@/assets/edit.png'
import del from '@/assets/delete.png'

type valueActionsProps = {
  onEdit: () => void
  onDelete: () => void
}

export const ValueActions = ({ onEdit, onDelete }: valueActionsProps) => {
  return (
    <>
      <Button className="mr-2" onClick={onEdit}>
        <img src={edit} alt="" width={20} />
      </Button>
      <Button onClick={onDelete}>
        <img src={del} alt="" width={20} />
      </Button>
    </>
  )
}
