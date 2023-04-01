interface InputProps {
    value: string;
    show?: boolean;
    error: boolean;
    length: number;
    helperText: string;
}

export interface SignUpState {
    fields: {
        name: InputProps;
        email: InputProps;
        password: InputProps;
        confirmPassword: InputProps;
    };
    loading: boolean;
    error: string | null;
    success: boolean;
}

export type SignUpAction =
    | { type: 'field'; field: keyof SignUpState['fields']; value: string }
    | { type: 'showPass'; field: keyof SignUpState['fields'] }
    | { type: 'submit' }
    | { type: 'success' }
    | { type: 'error'; errorField: keyof SignUpState['fields']; error: string };

export const registerInitialState: SignUpState = {
    fields: {
        name: {
            value: '',
            length: 0,
            error: false,
            helperText: ''
        },
        email: {
            value: '',
            length: 0,
            error: false,
            helperText: ''
        },
        password: {
            value: '',
            length: 0,
            show: false,
            error: false,
            helperText: ''
        },
        confirmPassword: {
            value: '',
            length: 0,
            show: false,
            error: false,
            helperText: ''
        },
    },
    loading: false,
    error: null,
    success: false,
};