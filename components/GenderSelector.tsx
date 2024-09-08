import React from 'react';
import { UseFormRegister, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

type Props = {
  register: UseFormRegister<any>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const GenderSelector: React.FC<Props> = ({ register, error }) => {
  const getErrorMessage = (error: any): string => {
    return typeof error === 'string' 
      ? error 
      : error?.message instanceof Error
      ? error.message.toString()
      : typeof error?.message === 'string'
      ? error.message
      : '';
  };

  return (
    <div className="flex space-x-4">
      {['male', 'female', 'other'].map((gender) => (
        <div key={gender} className="flex items-center">
          <input
            type="radio"
            id={gender}
            value={gender}
            {...register('gender')}
            className="hidden"
          />
          <label
            htmlFor={gender}
            className="flex items-center cursor-pointer text-sm"
          >
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-gray-300 flex-shrink-0 transition-all duration-200 ease-in-out relative">
              <span className="absolute inset-0 rounded-full transition-all duration-200 ease-in-out" />
            </span>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </label>
        </div>
      ))}
      {error && <span className="text-red-500 text-sm">{getErrorMessage(error)}</span>}
      <style jsx>{`
        input[type="radio"]:checked + label span {
          background-color: #10B981;
          border-color: #10B981;
        }
        input[type="radio"]:checked + label span::after {
          content: '';
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default GenderSelector;