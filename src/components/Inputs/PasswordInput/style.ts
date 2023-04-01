import { colors } from 'styles/colors'

export const style = {
    root: {
        width: '250px',
        height: '56px',
        padding: '15px 20px',
        fontSize: '14px',
        fontWeight: '400',
        color: colors.secondary.main,
        borderRadius: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        '.MuiOutlinedInput-input': {
            padding: '0',  
            '&::placeholder': {
                opacity: .65,
                color: colors.secondary.main
            }
        },
        '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
            borderBottom: `2px ${colors.primary.main} solid`,
            transition: '.2s ease-out',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            boxShadow: `0px 10px 15px -12px ${colors.primary.main}`,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderBottom: `2px ${colors.primary.main} solid`,
            boxShadow: `0px 10px 15px -12px ${colors.primary.main}`,
        },
        '.Mui-error': {
            borderColor: colors.error.main,
            boxShadow: `0px 10px 15px -12px ${colors.error.main}`,
        },
        '.MuiSvgIcon-root': {
            color: colors.secondary.main
        },
        '@media(max-width: 350px)': {
            width: '200px',
        },
        '@media(max-width: 250px)': {
            width: '150px',
        },
    }
};