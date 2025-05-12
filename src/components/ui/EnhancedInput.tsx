import React from 'react'
import { Field, useField } from 'formik'
import { cn } from '@/lib/utils'

interface EnhancedInputProps {
    id: string
    name: string
    label: string
    placeholder?: string
    className?: string
    fieldClassName?: string
    labelClassName?: string
    type?: string
    icon?: React.ReactNode
}

const EnhancedInput: React.FC<EnhancedInputProps> = ({
    id,
    name,
    label,
    placeholder = '--',
    className = '',
    fieldClassName = '',
    labelClassName = '',
    type = 'text',
    icon,
}) => {
    const [_, meta] = useField(name)

    return (
        <div className={`${className} relative mt-2`}>
            {/* Label positioned on the border */}
            <label
                htmlFor={id}
                className={cn(
                    'absolute -top-2.5 left-2 px-1 bg-white text-xs text-gray-600 z-10',
                    labelClassName,
                )}
            >
                {label}
            </label>
            <div className="relative">
                <Field
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className={cn(
                        'w-full px-3 py-2 text-sm border border-gray-200 bg-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-10',
                        meta.touched && meta.error ? 'border-red-500' : '',
                        fieldClassName,
                    )}
                />
                {icon && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {icon}
                    </div>
                )}
            </div>
            {meta.touched && meta.error ? (
                <div className="mt-1 text-xs text-red-500">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default EnhancedInput
