import { type ButtonHTMLAttributes } from 'react'
import * as React from 'react'

export type ButtonProps =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | { children: React.ReactNode; className?: string }
export const Button = function ({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={
        `rounded-xl bg-white p-2 font-semibold text-gray-800 shadow hover:cursor-pointer hover:bg-gray-100 ` +
        className
      }>
      {children}
    </button>
  )
}
