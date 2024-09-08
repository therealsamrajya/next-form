"use client";
import { UseFormRegister, FieldError } from 'react-hook-form';
import { parse, isValid } from 'date-fns';

type Props = {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  setValue: (name: string, value: any) => void;
};

const DateSelector: React.FC<Props> = ({ name, label, register, setValue, error }) => {
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if (dateValue) {
      const parsedDate = parse(dateValue, 'yyyy-MM-dd', new Date());
      setValue(name, isValid(parsedDate) ? parsedDate : null);
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
        {...register(name)}
        onChange={handleDateChange}
        onBlur={(e) => {
          const date = new Date(e.target.value);
          if (!isNaN(date.getTime())) {
            e.target.value = formatDate(date);
          }
        }}
        defaultValue="" 
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default DateSelector;
