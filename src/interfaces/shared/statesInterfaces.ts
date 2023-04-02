export interface InputStateProps {
    value: string;
    show?: boolean;
    error: boolean;
    length: number;
    helperText: string;
}

export const inputStateInitialValues = {
    value: '',
    error: false,
    length: 0,
    helperText: ''
}

export const passwordStateInitialValues = {
    value: '',
    show: false,
    error: false,
    length: 0,
    helperText: ''
}