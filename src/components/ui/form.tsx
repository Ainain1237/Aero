import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${className}`}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-md';
    const variantStyles = variant === 'primary' 
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';