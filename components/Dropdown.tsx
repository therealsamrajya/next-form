"use client"
import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormValues } from './types';

type Props = {
  name: string;
  options: { value: string; label: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<FormValues>;
  error?: FieldError;
  placeholder?: string;
  className?: string;
};

const Dropdown: React.FC<Props> = ({
  name,
  options,
  register,
  error,
  placeholder = "Select an option",
  className = ""
}) => {
  return (
    <div>
      <select 
        {...register(name)} 
        className={`${className} placeholder:text-gray-400 placeholder:text-sm`}
      >
        <option value="" disabled selected hidden>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 mt-1">{error.message}</span>}
    </div>
  );
};

export default Dropdown;