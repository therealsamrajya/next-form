"use client"
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ImageInput from './ImageInput';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const ProfilePicture: React.FC<Props> = ({ onNext, onPrev }) => {
  const { setValue } = useFormContext();
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        setValue('profilePicture', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg border-2 border-black z-10 mb-[2rem] mt-[8rem]">
      <h2 className="text-2xl font-semibold mb-6 text-center">Set Your Profile Picture</h2>
      
      <ImageInput image={image} onImageChange={handleImageChange} />

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-32 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 font-semibold border border-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;