import React, { FC } from 'react'
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'
import { Form } from 'react-router-dom'
import { FormInput, SignUpFormData } from '../../types/Types'



interface Input<T extends string> extends FormInput {
  rest: UseFormRegisterReturn<T>;
  // errors: FieldErrors[T];
}

const FormInputComponets = <T extends string,>({ rest, id, type, autoComplete, placeholder, nameLabel }: Input<T>) => {
  return (
    <div className='mb-4'>
      <label className='text-text-label-color text-lg'>{nameLabel}</label>
      <input {...rest} id={id} type={type} placeholder={placeholder} autoComplete={autoComplete}
        className='bg-input-bg-color appearance-none rounded-none relative block w-full px-3 py-4 mt-3  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
         focus:outline-none focus:ring-blue-500   focus:border-b-4 focus:border-b-border-input-color focus:z-10 sm:text-sm' />

    </div>
  )
}

export default FormInputComponets
