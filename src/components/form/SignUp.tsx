import { FC, useState } from "react";
import axios from "axios";

import { useForm, SubmitHandler } from "react-hook-form";
interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp: FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
        watch,
    } = useForm<SignUpFormData>({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");

    const onSubmit = async (data: SignUpFormData) => {
        setIsLoading(true);
        try {
            // TODO: Submit form data to server
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };
    return (
        <div className="flex justify-center">
            <div className="mt-10  flex w-4/12  items-center justify-center py-12 px-4 bg-white ">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">
                            Sign up for an account
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-6">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Your Name"
                                    {...register('name', {
                                        required: true,
                                    })}
                                    className={`${errors.name ? 'border-red-500' : ''
                                        } appearance-none rounded-none relative block w-full px-3 py-5 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs">{`Your name is required`}</span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email address"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                    })}
                                    className={`${errors.email ? 'border-red-500' : ''
                                        } appearance-none rounded-none relative block w-full px-3 py-5 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                />
                                {errors.email?.type === 'required' && (
                                    <span className="text-red-500 text-xs">{`Your email is required`}</span>
                                )}
                                {errors.email?.type === 'pattern' && (
                                    <span className="text-red-500 text-xs">{`Please enter a valid email address`}</span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className={`${errors.email ? 'border-red-500' : ''
                                        } appearance-none rounded-none relative block w-full px-3 py-5 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must have at least 6 characters",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <span className="text-red-500">{errors.password.message}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="sr-only">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm password"
                                    className={`${errors.email ? 'border-red-500' : ''
                                        } mb-5 appearance-none rounded-none relative block w-full px-3 py-5 mt-5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    {...register("confirmPassword", {
                                        validate: (value) =>
                                            value === password || "Passwords do not match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <span className="text-red-500">
                                        {errors.confirmPassword.message}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white py-5 mt-5 rounded-md hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
export default SignUp;
