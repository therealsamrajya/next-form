export interface FormValues {
    firstName: string;
    middleName?: string;
    lastName: string;
    phone: string;
    birthDate: Date;
    gender: 'male' | 'female' | 'other';
    [key: string]: unknown;
}