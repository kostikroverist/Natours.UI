import React, { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Form } from 'react-router-dom'
import { FormInput } from '../../types/Types'



interface Input<T extends string> extends FormInput {
  rest: UseFormRegisterReturn<T>;

}

const FormInputComponets = <T extends string,>({ rest, id, type, autoComplete, placeholder, NameLabel }: Input<T>) => {
  return (
    <div >
      <label className='text-text-label-color text-lg'>{NameLabel}</label>
      <input {...rest} id={id} type={type} placeholder={placeholder} autoComplete={autoComplete}
        className='bg-input-bg-color appearance-none rounded-none relative block w-full px-3 py-4 mt-3 mb-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
         focus:outline-none focus:ring-blue-500   focus:border-b-4 focus:border-b-border-input-color focus:z-10 sm:text-sm' />
    </div>
  )
}

export default FormInputComponets
