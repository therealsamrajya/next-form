"use client"

import React from 'react';
import Image from 'next/image';

type Props = {
  image: string | null;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput: React.FC<Props> = ({ image, onImageChange }) => {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      <div className="flex justify-center">
        {image ? (
          <Image 
            src={image} 
            alt="Profile picture" 
            width={200} 
            height={200} 
            className=" dark:border-black rounded-[3rem] opacity-100
             object-cover"
          />
        ) : (
          <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No image uploaded</span>
          </div>
        )}
      </div>
      
      <div className="relative">
        <input 
          type="file" 
          accept="image/*" 
          onChange={onImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer dark:bg-white"
        />
        <div className="bg-green-600 text-white w-fit py-2 px-4 rounded-md text-center cursor-pointer">
          Upload Image
        </div>
      </div>
    </div>
  );
};

export default ImageInput;