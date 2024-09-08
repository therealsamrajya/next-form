import React from 'react';
import { useFormContext ,FieldError} from 'react-hook-form';
import Dropdown from './Dropdown';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const AddressDetails: React.FC<Props> = ({ onNext, onPrev }) => {
  const { register, formState: { errors }, trigger } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger(['country', 'district', 'municipality', 'city', 'ward']);
    if (isValid) onNext();
  };

 
  const countryOptions = [{ value: 'nepal', label: 'Nepal' }];
  const districtOptions = [{ value: 'kathmandu', label: 'Kathmandu' }, { value: 'lalitpur', label: 'Lalitpur' }];
  const municipalityOptions = [{ value: 'kathmandu', label: 'Kathmandu' }, { value: 'lalitpur', label: 'Lalitpur' }];

  return (
    <div className="relative max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg border-2 border-black z-10 mb-[2rem] mt-[8rem]">
      <div className="absolute inset-0 bg-white opacity-90 -z-10 rounded-lg"></div>
      <h2 className="text-3xl mb-8 text-left relative z-20">Address </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="relative z-20">
          <label htmlFor="country" className="block mb-2">Country</label>
          <Dropdown
            name="country"
            
            options={countryOptions}
            register={register}
            error={errors.country as FieldError | undefined}
            placeholder="Eg:Nepal "
            className="w-full dark:bg-white text-gray-400 text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
        </div>
        <div className="relative z-20">
          <label htmlFor="district" className="block mb-2">District</label>
          <Dropdown
            name="district"
            
            options={districtOptions}
            register={register}
            error={errors.district as FieldError | undefined}
            placeholder="Eg:Kathmandu"
            className="w-full text-gray-400 dark:bg-white text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
        </div>
        <div className="relative z-20">
          <label htmlFor="municipality" className="block mb-2">Municipality/Local</label>
          <Dropdown
            name="municipality"
            options={municipalityOptions}
            register={register}
            error={errors.municipality as FieldError | undefined}
            placeholder="Eg:Lalitpur"
            className="w-full text-gray-400 dark:bg-white text-sm px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="relative z-20">
          <label htmlFor="city" className="block mb-2">City</label>
          <input
            {...register('city')}
            placeholder="Eg:Kathmandu"
            id="city"
            className="w-full px-4 dark:bg-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400 placeholder:text-sm"
          />
          {errors.city && <span className="text-red-500 mt-1">{errors.city.message as string}</span>}
        </div>
        <div className="relative z-20">
          <label htmlFor="ward" className="block mb-2">Ward</label>
          <input
            {...register('ward')}
            placeholder="Eg:4"
            id="ward"
            className="w-full px-4 dark:bg-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 placeholder:text-gray-400 placeholder:text-sm"
          />
          {errors.ward && <span className="text-red-500 mt-1">{errors.ward.message as string}</span>}
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4 relative z-10">
        <button
          type="button"
          onClick={onPrev}
          className="w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className=" w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;