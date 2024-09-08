import React from 'react';
import Image from 'next/image';

type FinalDetailsProps = {
  formData: any; // Replace 'any' with a more specific type if available
};

const FinalDetails: React.FC<FinalDetailsProps> = ({ formData }) => {
  return (
    <div className="relative max-sm:text-xs max-sm:w-fit max-w-5xl font-semibold mx-auto p-8 bg-white bg-opacity-100 rounded-lg shadow-lg border-2 border-black mb-[2rem] mt-[8rem]">
      <h2 className="text-4xl font-semibold mb-6">My Details</h2>
      
      <div className="flex flex-col space-y-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          {formData.profilePicture ? (
            <Image 
              src={formData.profilePicture} 
              alt="Profile Picture" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover border-black transition-opacity focus:outline-none focus:ring-2 duration-300"
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
            <p>First Name: {formData.firstName}</p>
            <p>Middle Name: {formData.middleName}</p>
            <p>Last Name: {formData.lastName}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <p>Phone: {formData.phone}</p>
            <p>Birth Date: {formData.birthDate.toDateString()}</p>
            <p>Gender: {formData.gender}</p>
          </div>
        </div>

        {/* Address Details */}
        <div>
          <h3 className="text-4xl font-semibold mb-4">Address</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <p>Country: {formData.country}</p>
            <p>District: {formData.district}</p>
            <p>Municipality: {formData.municipality}</p>
          </div>
          <div className="flex flex-row items-center gap-[10rem]">
            <p>City: {formData.city}</p>
            <p className="ml-[3rem]">Ward: {formData.ward}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalDetails;
