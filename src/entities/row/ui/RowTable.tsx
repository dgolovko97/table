import * as React from 'react'
import { type Row } from '@/entities/row/model'
import Td from '@/shared/ui/Td.tsx'

interface Props {
  rowActions?: React.ReactNode
  renderCellActions: (value: string, idx: number) => React.ReactNode
  addValueAction: React.ReactNode
  row: Row
}
const RowTable = ({
  row,
  rowActions,
  renderCellActions,
  addValueAction,
}: Props): React.ReactElement => {
  return (
    <tr>
      <Td className="p-5">{row.type}</Td>
      <Td>
        {row.values.map((value, idx) => {
          return (
            <div
              className="flex items-center justify-between gap-3 border-b-1 border-gray-300 p-5"
              key={value + idx}>
              <div>
                {idx + 1}.&nbsp;{value}
              </div>
              <div>{renderCellActions(value, idx)}</div>
            </div>
          )
        })}
        <div className="flex justify-end border border-gray-300 last:border-0">
          {addValueAction}
        </div>
      </Td>
      <Td>{rowActions}</Td>
    </tr>
  )
}

export default RowTable
