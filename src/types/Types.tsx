export interface FormInput {
    id: string,
    type: string,
    autoComplete: string,
    placeholder?: string,
    nameLabel: string,
}

export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface LoginFormData extends SignUpFormData {
}