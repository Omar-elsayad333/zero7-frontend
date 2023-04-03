import { LoginActions, LoginState } from "interfaces/loginInterface";

export const loginReducer = (state: LoginState, action: LoginActions): LoginState => {
    switch(action.type) {
        case 'field':
            const { field, value } = action;
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [field]: {
                        ...state.fields[field],
                        value: value,
                        error: false,
                        helperText: null,
                        length: value.length,
                    }
                }
            }
        case 'showPass': 
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.field]: {
                        ...state.fields[action.field],
                        show: !state.fields[action.field]['show']
                    }
                }
            }
        case 'remeberMe':
            return {
                ...state,
                remeberMe: {
                    value: !state.remeberMe.value
                }
            }
        case 'error': 
            const { errorField, error } = action;
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [errorField]: {
                        ...state.fields[errorField],
                        error: true,
                        helperText: error,
                    },
                },
            };
        case 'loading':
            return {
                ...state,
                loading: !state.loading
            }
        default:
            throw new Error('Invalid action type');
    }
}