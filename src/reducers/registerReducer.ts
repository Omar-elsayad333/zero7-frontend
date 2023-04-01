import { SignUpState, SignUpAction } from 'interfaces/registerInterface'

export const registerReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
    switch (action.type) {
        case 'field':
            let { field, value } = action;
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
            return {
                ...state,
                loading: false,
                error: action.error,
                success: false
            };
        default:
            return state;
    }
};