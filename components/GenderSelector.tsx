import React from 'react';
import { UseFormRegister, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

interface FormValues {
  [key: string]: unknown;
}

type Props = {
  register: UseFormRegister<FormValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const GenderSelector: React.FC<Props> = ({ register, error }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getErrorMessage = (err: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined): string => {
    if (typeof err === 'string') return err;
    if (err?.message instanceof Error) return err.message.toString();
    if (typeof err?.message === 'string') return err.message;
    return '';
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