import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  type?: string;
  icon?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  placeholder = "—",
  className = "",
  type = "text",
  icon,
}) => {
  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className="text-xs font-medium text-gray-600 mb-1 block"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-2 text-sm border border-gray-200 bg-white rounded-md focus:outline-none focus:border-blue-500"
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default FormInput;
