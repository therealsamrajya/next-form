import React from 'react';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

type Props = {
  onPrev: () => void;
};

const Summary: React.FC<Props> = ({ onPrev }) => {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div className="relative max-sm:text-xs max-sm:w-fit  max-w-5xl font-semibold mx-auto p-8 bg-white bg-opacity-100 rounded-lg shadow-lg border-2 border-black  mb-[2rem] mt-[8rem]">
      <h2 className="text-4xl font-semibold mb-6">Review Your Details</h2>
      
      <div className="flex flex-col space-y-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          {values.profilePicture ? (
            <Image 
              src={values.profilePicture} 
              alt="Profile Picture" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover border-black  transition-opacity focus:outline-none focus:ring-2 duration-300"
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image uploaded</span>
            </div>
          )}
        </div>

        {/* Personal Details */}
        <div>
          <h3 className="text-4xl font-semibold mb-4">Personal Details</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <p>First Name: {values.firstName}</p>
            <p>Middle Name: {values.middleName}</p>
            <p>Last Name: {values.lastName}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <p>Phone: {values.phone}</p>
            <p>Birth Date: {values.birthDate.toDateString()}</p>
            <p>Gender: {values.gender}</p>
          </div>
        </div>

        {/* Address Details */}
        <div>
          <h3 className="text-4xl font-semibold mb-4">Address</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <p>Country: {values.country}</p>
            <p>District: {values.district}</p>
            <p>Municipality: {values.municipality}</p>
          </div>
          <div className="flex flex-row items-center gap-[10rem] ">
            <p>City: {values.city}</p>
            <p className="ml-[3rem]">Ward: {values.ward}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;