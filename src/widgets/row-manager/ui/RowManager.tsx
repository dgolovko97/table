import {
  createRowCrudHandlers,
  RowActions,
  RowForm,
  useRowStore,
  ValueActions,
  ValueForm,
} from '@/features/row-crud'
import { RowTable } from '@/entities/row/ui'
import { Button } from '@/shared/ui/Button.tsx'
import add from '@/assets/add.png'
import { useRowCrudUI } from '@/features/row-crud/model'
import type { Row } from '@/entities/row'

export const RowManager = () => {
  const rows = useRowStore(state => state.rows)
  const setRows = useRowStore(state => state.setRows)

  const {
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
  } = useRowCrudUI()

  const crudHandlers = createRowCrudHandlers({
    rows,
    editingRow,
    editingValue,
    setRows,
  })

  const handleSaveRow = (row: Row) => {
    const handler =
      typeActionForm === 'add' ? crudHandlers.saveRow : crudHandlers.saveEditRow
    handler(row)
    cancelRowForm()
  }

  const handleSaveValueForm = (value: string) => {
    const handler =
      typeActionForm === 'add'
        ? crudHandlers.saveNewValue
        : crudHandlers.saveEditValue
    handler(value)
    cancelValueForm()
  }

  return (
    <div className="container">
      <div className="mx-auto w-fit p-10">
        {showValueForm && (
          <ValueForm
            onSave={handleSaveValueForm}
            onCancel={cancelValueForm}
            initialValue={editingValue?.value}
          />
        )}
        {showRowForm && (
          <RowForm
            onSave={handleSaveRow}
            onCancel={cancelRowForm}
            initialValue={editingRow}
          />
        )}
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 p-5">Тип</th>
              <th className="border border-gray-300 p-5">Значения</th>
              <th className="border border-gray-300 p-5">Действия</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => {
              return (
                <RowTable
                  row={row}
                  key={rowIdx}
                  addValueAction={
                    <div className="flex justify-end border border-gray-300 p-5 last:border-0">
                      <Button onClick={() => openAddValueForm(row)}>
                        <img src={add} alt="" width={20} />
                      </Button>
                    </div>
                  }
                  renderCellActions={(value, valueIdx) => {
                    return (
                      <ValueActions
                        onDelete={() =>
                          crudHandlers.handleDeleteValue(row, valueIdx)
                        }
                        onEdit={() => openEditValueForm(row, valueIdx, value)}
                      />
                    )
                  }}
                  rowActions={
                    <RowActions
                      onEdit={() => openEditRowForm(row)}
                      onDelete={() => crudHandlers.handleDeleteRow(row)}
                    />
                  }
                />
              )
            })}
          </tbody>
        </table>
        <div className="mt-3">
          <Button onClick={openAddRowForm}>
            <img src={add} alt="" className="" />
          </Button>
        </div>
      </div>
    </div>
  )
}
