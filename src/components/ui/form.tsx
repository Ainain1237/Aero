import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block mb-1 text-sm">{label}</label>}
        <input
          ref={ref}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block mb-1 text-sm">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', isLoading, children, ...props }, ref) => {
    const baseStyles = 'px-4 py-2 rounded-md transition-colors';
    const variantStyles = variant === 'primary' 
      ? 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);
Button.displayName = 'Button';