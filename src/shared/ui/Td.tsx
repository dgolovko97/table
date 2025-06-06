import React, { type TdHTMLAttributes } from 'react'
interface Props extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children?: React.ReactNode
}

const Td = ({ className = '', children, ...rest }: Props) => {
  return (
    <td {...rest} className={`border border-gray-300` + ' ' + className}>
      {children}
    </td>
  )
}

Td.propTypes = {}

export default Td
