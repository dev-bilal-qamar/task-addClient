import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { useField, useFormikContext } from 'formik'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

interface Option {
    value: string | number
    label: string
}

interface EnhancedSelectProps {
    id: string
    name: string
    label: string
    options: Option[]
    className?: string
    labelClassName?: string
    fieldClassName?: string
    placeholder?: string
}

export const EnhancedSelect: React.FC<EnhancedSelectProps> = ({
    id,
    name,
    label,
    options,
    className = '',
    labelClassName = '',
    fieldClassName = '',
    placeholder = 'Select',
}) => {
    const [field, meta] = useField(name)
    const { setFieldValue } = useFormikContext()
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [triggerWidth, setTriggerWidth] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    // Fix for placeholder not showing when value is 0 or empty string
    const hasRealValue =
        field.value !== undefined &&
        field.value !== null &&
        field.value !== '' &&
        field.value !== 0 &&
        field.value !== '0'

    // Update trigger width on mount and window resize
    useEffect(() => {
        const updateWidth = () => {
            if (triggerRef.current) {
                setTriggerWidth(triggerRef.current.offsetWidth)
            }
        }

        // Update initially
        updateWidth()

        // Setup resize observer for dynamic width updates
        const resizeObserver = new ResizeObserver(updateWidth)
        if (triggerRef.current) {
            resizeObserver.observe(triggerRef.current)
        }

        // Also listen to window resize for container changes
        window.addEventListener('resize', updateWidth)

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener('resize', updateWidth)
        }
    }, [triggerRef])

    // Make sure content width matches trigger width after opening
    useEffect(() => {
        if (contentRef.current && triggerWidth > 0) {
            contentRef.current.style.width = `${triggerWidth}px`
        }
    }, [triggerWidth])

    const handleValueChange = (value: string) => {
        setFieldValue(name, value)
    }

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

            <SelectPrimitive.Root
                value={hasRealValue ? field.value?.toString() : ''}
                onValueChange={handleValueChange}
            >
                <SelectPrimitive.Trigger
                    ref={triggerRef}
                    id={id}
                    className={cn(
                        'flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
                        meta.touched && meta.error ? 'border-red-500' : '',
                        fieldClassName,
                    )}
                >
                    <SelectPrimitive.Value placeholder={placeholder} />
                    <SelectPrimitive.Icon>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>

                <SelectPrimitive.Portal>
                    <SelectPrimitive.Content
                        ref={contentRef}
                        className="relative z-50 overflow-hidden text-gray-800 bg-white border border-gray-200 rounded-md shadow-md max-h-96 animate-in fade-in-80"
                        position="popper"
                        sideOffset={5}
                        style={{ width: `${triggerWidth}px` }}
                    >
                        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-6 text-gray-700 bg-white cursor-default">
                            <ChevronDown className="w-4 h-4 rotate-180" />
                        </SelectPrimitive.ScrollUpButton>
                        <SelectPrimitive.Viewport className="p-1">
                            <SelectPrimitive.Group>
                                {options.map((option) => (
                                    <SelectPrimitive.Item
                                        key={option.value}
                                        value={option.value.toString()}
                                        className="relative flex h-9 cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-blue-50 focus:text-blue-700 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-blue-50"
                                    >
                                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                            <SelectPrimitive.ItemIndicator>
                                                <Check className="w-4 h-4 text-blue-600" />
                                            </SelectPrimitive.ItemIndicator>
                                        </span>
                                        <SelectPrimitive.ItemText>
                                            {option.label}
                                        </SelectPrimitive.ItemText>
                                    </SelectPrimitive.Item>
                                ))}
                            </SelectPrimitive.Group>
                        </SelectPrimitive.Viewport>
                        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-6 text-gray-700 bg-white cursor-default">
                            <ChevronDown className="w-4 h-4" />
                        </SelectPrimitive.ScrollDownButton>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>

            {meta.touched && meta.error ? (
                <div className="mt-1 text-xs text-red-500">{meta.error}</div>
            ) : null}
        </div>
    )
}

export default EnhancedSelect
