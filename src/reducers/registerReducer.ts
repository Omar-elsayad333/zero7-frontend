import { SignUpState, SignUpAction } from 'interfaces/registerInterface'

export const registerReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
    switch (action.type) {
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
                    },
                },
            };
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
        case 'submit':
            return {
                ...state,
                loading: true,
                error: null,
                success: false
            };
        case 'success':
            return {
                ...state,
                loading: false,
                error: null,
                success: true
            };
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
        default:
            return state;
    }
};