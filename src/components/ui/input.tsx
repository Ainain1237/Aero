import React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border rounded p-2 w-full ${className}`}
      {...props}
    />
  )
}