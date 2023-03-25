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

export interface IGuide {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: string;
}

export interface ILocation {
    type: string;
    coordinates: number[];
    description: string;
    day: number;
    _id: string;
}

export interface ITour {
    startLocation: {
        type: string;
        coordinates: number[];
        address: string;
        description: string;
    };
    _id: string;
    name: string;
    duration: number;
    maxGroupSize: number;
    difficulty: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    summary: string;
    description: string;
    imageCover: string;
    images: string[];
    startDates: string[];
    secretTour: boolean;
    locations: ILocation[];
    guides: IGuide[];
    slug: string;
    durationWeeks: number;
    id: string;
}