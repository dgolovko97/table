import type { InputHTMLAttributes } from 'react'

interface BaseInputProps {
  label: string
  id: string
  required?: boolean
  error?: string
}

interface TextInputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  type?: 'text' | 'url' | 'email' | 'password' | 'number'
}

type InputProps = TextInputProps

export const Input = (props: InputProps) => {
  const { label, id, required, error, className = '', ...rest } = props
  const baseInputClasses =
    'mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:border-blue-500 focus:ring-blue-500 p-2'
  const errorClasses = error
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
    : ''

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        className={`${baseInputClasses} ${errorClasses} ${className}`}
        required={required}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
