import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormData } from '../../types/Types';
import BaseButton from '../button/BaseButton'
import FormInputComponets from './BaseInput'

const LogIn = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    alert(`Your name ${data.name}`)
  }
  return (
    <div className="m-auto mt-20 w-1/3 space-y-8  bg-white  p-14">
      <h1 className="text-text-header-login text-3xl text-">LOG INTO YOUR ACCOUNT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormInputComponets rest={register("email")} id={'email'} type="email"
          autoComplete="email" nameLabel={"Email address"} placeholder="you@example.com" />


        <FormInputComponets rest={register("password")} id={'Password'} type="Password"
          autoComplete="password" nameLabel={"Password"} placeholder='********' />


        <BaseButton name="Login" />
      </form>

    </div>
  )
}

export default LogIn
