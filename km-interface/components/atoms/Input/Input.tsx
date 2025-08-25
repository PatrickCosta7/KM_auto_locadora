import React from 'react';

interface InputProps {
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    inputMode?: 'text' | 'search' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal';
    className?: string;
}

export default function Input({
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    required = false,
    pattern,
    inputMode,
    className = '',
}: InputProps) {
    return (
        <input
            type={type}
            name={name}
            value={value ?? ''}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            inputMode={inputMode}
            className={`w-full px-4 lg:px-6 py-2 lg:py-3 bg-gray-50 rounded-2xl font-oxygen text-base lg:text-lg ${className}`}
        />
    );
}
