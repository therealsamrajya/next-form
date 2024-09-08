import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

type Props = {
  currentStep: number;
  totalSteps: number;
};

const ProgressBar: React.FC<Props> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mt-[4rem] mb-8 relative">
      <div className="flex items-center w-3/4 max-w-2xl">
        {[...Array(totalSteps)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center relative">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm ${
                  index + 1 < currentStep 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : index + 1 === currentStep
                      ? 'bg-[#43056C] border-[#43056C] text-white'
                      : 'bg-[#43056C] border-[#43056C] text-white '
                } transition-all duration-300 ease-in-out`}
              >
                {index + 1}
              </div>
              {index + 1 === currentStep && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-[#43056C] dark:text-white text-lg" />
                </div>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div className="flex-1 mx-1">
                <div className="h-1 bg-gray-300 rounded-full">
                  <div 
                    className={`h-full ${index + 1 < currentStep ? 'bg-green-600' : 'bg-[#43056C]'} rounded-full transition-all duration-300 ease-in-out`}
                    style={{ width: `${index + 1 < currentStep ? '100%' : '0%'}` }}
                  ></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
