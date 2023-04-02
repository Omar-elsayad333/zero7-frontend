import { 
    InputStateProps,
    inputStateInitialValues, 
    passwordStateInitialValues 
} from 'interfaces/shared/statesInterfaces'

export interface SignUpState {
    fields: {
        name: InputStateProps;
        email: InputStateProps;
        phoneNumber: InputStateProps;
        password: InputStateProps;
        confirmPassword: InputStateProps;
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
        name: inputStateInitialValues,
        email: inputStateInitialValues,
        phoneNumber: inputStateInitialValues,
        password: passwordStateInitialValues,
        confirmPassword: passwordStateInitialValues
    },
    loading: false,
    error: null,
    success: false,
};