import React from 'react';
import { useFormContext } from 'react-hook-form';
import DateSelector from './DateSelector';
import GenderSelector from './GenderSelector';

type FormData = {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  birthDate: Date;
  gender: 'male' | 'female' | 'other';
};

type Props = {
  onNext: () => void;
};

const PersonalDetails: React.FC<Props> = ({ onNext }) => {
  const { register, formState: { errors }, trigger, setValue } = useFormContext<FormData>();

  const handleNext = async () => {
    console.log('handleNext called in PersonalDetails');
    const isValid = await trigger(['firstName', 'lastName', 'phone', 'birthDate', 'gender']);
    if (isValid) {
      console.log('Form is valid, calling onNext');
      onNext();
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg border-2 border-black z-10 mb-[2rem] mt-[8rem] ">
      <div className="absolute inset-0 bg-white opacity-90 -z-10 rounded-lg"></div>
      <h2 className="text-3xl mb-8 text-center relative z-20">Personal Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
        <div className="relative z-20">
          <label htmlFor="firstName" className="block mb-2">First Name</label>
          <input 
            {...register('firstName')} 
            placeholder='Enter your first name' 
            id="firstName" 
            className="w-full dark:bg-white px-4 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          {errors.firstName && <span className="text-red-500 mt-1">{errors.firstName.message}</span>}
        </div>
        <div className="relative z-20">
          <label htmlFor="middleName" className="block mb-2">Middle Name</label>
          <input 
            {...register('middleName')} 
            placeholder='Enter your middle name' 
            id="middleName" 
            className="w-full dark:bg-white px-4 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
        </div>
        <div className="relative z-20">
          <label htmlFor="lastName" className="block mb-2">Last Name</label>
          <input 
            {...register('lastName')} 
            placeholder='Enter your last name' 
            id="lastName" 
            className="w-full dark:bg-white px-4 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          {errors.lastName && <span className="text-red-500 mt-1">{errors.lastName.message}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative z-20">
          <label htmlFor="phone" className="block mb-2">Phone</label>
          <input 
            {...register('phone')} 
            placeholder='98xxxxxxxx' 
            id="phone" 
            className="w-full px-4 py-2  dark:bg-white border-black border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
          {errors.phone && <span className="text-red-500 mt-1">{errors.phone.message}</span>}
        </div>
        <div className="relative z-20">
          <label htmlFor="birthDate" className="block mb-2">Birth Date</label>
          <DateSelector 
            name="birthDate" 
            register={register} 
            label=""
            error={errors.birthDate} 
            setValue={(name, value) => setValue(name as 'birthDate', value as Date)}
          />
        </div>
      </div>

      <div className="mb-8 relative z-20">
        <label className="block mb-2">Gender</label>
        <GenderSelector register={register} error={errors.gender} />
      </div>

      <div className="mt-8 flex justify-end relative z-20">
        <button 
          type="button" 
          onClick={handleNext}
          className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;