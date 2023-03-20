export interface FormInput {
    id: string,
    type: string,
    autoComplete: string,
    placeholder?: string,
    NameLabel: string
}

export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}