"use client";

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PersonalDetails from "./PersonalDetails";
import AddressDetails from './AddressDetails';
import ProfilePicture from './ProfilePicture';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  birthDate: z.date({ required_error: "Birth date is required" }),
  gender: z.enum(['male', 'female', 'other'], { required_error: "Gender is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  profilePicture: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TOTAL_STEPS = 4;

const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your server
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return <PersonalDetails key={1} onNext={nextStep} />;
      case 2:
        return <AddressDetails key={2} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <ProfilePicture key={3} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <Summary key={4} onPrev={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="text-black  font-sans text-base opacity-95" onSubmit={methods.handleSubmit(onSubmit)}>
        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        <TransitionGroup>
          <CSSTransition
            key={step}
            timeout={300}
            classNames="fade"
          >
            {renderStep()}
          </CSSTransition>
        </TransitionGroup>
      </form>
    </FormProvider>
  );
};

export default RegistrationForm;