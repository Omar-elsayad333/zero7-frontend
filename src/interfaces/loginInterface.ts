import { 
    InputStateProps, 
    inputStateInitialValues, 
    passwordStateInitialValues 
} from 'interfaces/shared/statesInterfaces'

export interface LoginState {
    fields: {
        email: InputStateProps;
        password: InputStateProps;
    };
    remeberMe: {
        value: boolean
    };
    loading: boolean;
}   

export type LoginActions = 
    | { type: 'loading'; }
    | { type: 'remeberMe'; }
    | { type: 'showPass'; field: keyof LoginState['fields']}
    | { type: 'field';  field: keyof LoginState['fields']; value: string}
    | { type: 'error'; errorField: keyof LoginState['fields']; error: string };

export const loginInitialValues: LoginState = {
    fields: {
        email: inputStateInitialValues,
        password: passwordStateInitialValues,
    },
    remeberMe: {
        value: false
    },
    loading: false
}