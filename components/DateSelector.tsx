"use client";
import React, { useState } from 'react';
import { UseFormRegister, FieldError, UseFormSetValue } from 'react-hook-form';
import { parse, isValid, format } from 'date-fns';

import { FormValues } from './types';

type DateSelectorProps = {
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  name: string;
  error?: FieldError;
  label: string;
};

const DateSelector: React.FC<DateSelectorProps> = ({ register, setValue, name, error, label }) => {
  const [displayValue, setDisplayValue] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDisplayValue(inputValue);

    if (inputValue) {
      const parsedDate = parse(inputValue, 'yyyy-MM-dd', new Date());
      if (isValid(parsedDate)) {
        setValue(name, parsedDate);
      } else {
        setValue(name, null);
      }
    } else {
      setValue(name, null);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input 
        className="w-full dark:bg-white px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
        type="date" 
        {...register(name, {
          onChange: handleDateChange,
          setValueAs: (v: string | Date) => {
            if (v instanceof Date) return v;
            return v ? parse(v, 'yyyy-MM-dd', new Date()) : null;
          },
        })}
        value={displayValue}
      />
      {error && <span className="text-red-500 mt-1">{error.message}</span>}
    </div>
  );
};

export default DateSelector;