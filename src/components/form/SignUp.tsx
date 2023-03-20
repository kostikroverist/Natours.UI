import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormData, } from "../../types/Types";
import FormInputComponets from "./BaseInput";
import BaseButton from "../button/BaseButton";

const SignUp: FC = () => {

    const { register, handleSubmit } = useForm<SignUpFormData>();

    const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
        alert(`Your name ${data.name}`)
    }

    return (
        <div className="flex justify-center mt-16">
            <div className=" w-1/3 space-y-8  bg-white  p-14">
                <h1 className="text-text-header-login text-3xl text-">CREATE YOUR ACCOUNT!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInputComponets rest={register("name")} id={'name'} type="text"
                        autoComplete="name" NameLabel={"Your name"} />


                    <FormInputComponets rest={register("email")} id={'email'} type="email"
                        autoComplete="email" NameLabel={"Email address"} placeholder="you@example.com" />


                    <FormInputComponets rest={register("password")} id={'Password'} type="Password"
                        autoComplete="password" NameLabel={"Password"} placeholder='********' />

                    <FormInputComponets rest={register("confirmPassword")} id={'confirmPassword'} type="password"
                        autoComplete="confirmPassword" NameLabel={"Confirm Password"} placeholder='********' />
                    <BaseButton name="SIGN UP" />
                </form>

            </div>

        </div >

    );
}
export default SignUp;
