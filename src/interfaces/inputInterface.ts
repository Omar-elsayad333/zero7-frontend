export interface InputProps {
    type: string;
    name?: string;
    value: string;
    error: boolean;
    setValue: Function;
    helperText: string;
    placeholder: string;
}

export interface PasswordInputProps {
    name: string
    value: string;
    show?: boolean;
    placeholder: string;
    helperText: string;
    showHandler: Function;
    setValue: Function;
    error: boolean;
}

export interface InputHelperTextProps {
    type: string;
    content: string;
}