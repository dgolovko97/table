import * as React from 'react'

type ModalProps = {
  children: React.ReactNode
  title: string
}
export function Modal({ title, children }: ModalProps) {
  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  )
}
