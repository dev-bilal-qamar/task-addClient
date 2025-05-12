import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface FloatingInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string
  addon?: React.ReactNode
  addonClassName?: string
  containerClassName?: string
  labelClassName?: string
  type?: "text" | "number" | "email" | "password" | "tel" | "url"
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { className, type = "text", label, addon, addonClassName, containerClassName, labelClassName, id, ...props },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue)
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-")

    // Prevent scroll from changing number value
    const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
      if (type === "number") {
        e.currentTarget.blur()
      }
    }

    return (
      <div className={cn("relative", containerClassName)}>
        <input
          id={inputId}
          type={type}
          className={cn(
            "peer w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            // Hide number input spinners if type is number
            type === "number" &&
              "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            // Add padding for addon if present
            addon && "pr-10",
            className,
          )}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false)
            setHasValue(e.target.value.length > 0)
          }}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          onWheel={handleWheel}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-1 text-sm text-muted-foreground duration-200",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
            "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-primary",
            (isFocused || hasValue) && "top-2 -translate-y-4 scale-75 text-primary",
            labelClassName,
          )}
        >
          {label}
        </label>
        {addon && (
          <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", addonClassName)}>
            {addon}
          </div>
        )}
      </div>
    )
  },
)

FloatingInput.displayName = "FloatingInput"