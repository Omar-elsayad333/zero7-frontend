import { IStyle } from 'styles/IStyle'
import { colors } from 'styles/colors'
import { SxProps } from '@mui/material'

export const style: IStyle = {
    root: {
        width: '255px',
        height: '46px',
        color: colors.secondary.main,
        backgroundColor: '#151515',
        borderRadius: '7px',
        fontSize: '14px',
        fontWeight: '400',
        '.MuiOutlinedInput-notchedOutline': {
            transition: '.2s ease-out',
            border: `1px solid ${colors.primary.main}`
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${colors.primary.main}`
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${colors.primary.main}`
        },
        '@media(max-width: 300px)': {
            width: '200px'
        },
        '@media(max-width: 250px)': {
            width: '150px'
        },
        '.MuiSelect-select': {
            width: '250px',
            color: colors.secondary.main
        },
        '.MuiSvgIcon-root ': {
            fill:  colors.primary.main
        },
    }
}

export const menuStyle: SxProps = {
    '.MuiPaper-root': {
        '::-webkit-scrollbar': {
            width: '10px',
            backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-track': {
            boxShadow: 'none'
        },
        '::-webkit-scrollbar-thumb': {
            border: '2px solid transparent',
        },  
        marginTop: '10px',
        backgroundColor: '#151515',
        border: `1px solid ${colors.primary.main}`,
        // first number is item height, second number is item top padding
        maxHeight: 48 * 4.5 + 8,
    },
    '.MuiMenuItem-root': {
        color: colors.secondary.main,
        ':hover': {
            backgroundColor: '#282828'
        }
    },
}