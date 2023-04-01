interface InputProps {
    value: string;
    error: boolean;
    lenght: number;
    helperText: string;
}

interface PassInputProps {
    value: string;
    show: boolean;
    error: boolean;
    lenght: number;
    helperText: string;
}

export interface SignUpState {
    fields: {
        name: InputProps;
        email: InputProps;
        password: PassInputProps;
        confirmPassword: PassInputProps;
    }
    loading: boolean;
    error: string | null;
    success: boolean;
}

export type SignUpAction =
    | { type: 'field'; field: keyof SignUpState['fields']; value: string }
    | { type: 'submit' }
    | { type: 'success' }
    | { type: 'error'; error: string };

export const registerInitialState: SignUpState = {
    fields: {
        name: {
            value: '',
            lenght: 0,
            error: false,
            helperText: ''
        },
        email: {
            value: '',
            lenght: 0,
            error: false,
            helperText: ''
        },
        password: {
            value: '',
            lenght: 0,
            show: false,
            error: false,
            helperText: ''
        },
        confirmPassword: {
            value: '',
            lenght: 0,
            show: false,
            error: false,
            helperText: ''
        },
    },
    loading: false,
    error: null,
    success: false,
};