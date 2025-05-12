import React from "react";
import { Field, ErrorMessage } from "formik";

interface FormCheckboxProps {
  id: string;
  name: string;
  label: string;
  className?: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  name,
  label,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 text-xs text-gray-600">
        {label}
      </label>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs ml-2"
      />
    </div>
  );
};

export default FormCheckbox;
