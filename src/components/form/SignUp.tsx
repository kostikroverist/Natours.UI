import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormData, } from "../../types/Types";
import FormInputComponets from "./BaseInput";
import BaseButton from "../button/BaseButton";

const SignUp: FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>();

    const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
        alert(`Your name ${data.name}`)
    }

    return (
        <div className="mx-auto  mt-16 w-1/3 space-y-8  bg-white  p-14">
            <h1 className="text-text-header-login text-3xl text-">CREATE YOUR ACCOUNT!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInputComponets rest={register("name", {
                    required: true,
                })} id={'name'} type="text"
                    autoComplete="name" nameLabel={"Your name"} />


                <FormInputComponets rest={register("email")} id={'email'} type="email"
                    autoComplete="email" nameLabel={"Email address"} placeholder="you@example.com" />


                <FormInputComponets rest={register("password")} id={'Password'} type="Password"
                    autoComplete="password" nameLabel={"Password"} placeholder='********' />

                <FormInputComponets rest={register("confirmPassword")} id={'confirmPassword'} type="password"
                    autoComplete="confirmPassword" nameLabel={"Confirm Password"} placeholder='********' />

                <div className="mt-5" >
                    <BaseButton name="SIGN UP" />
                </div>

            </form>

        </div>
    );
}
export default SignUp;
