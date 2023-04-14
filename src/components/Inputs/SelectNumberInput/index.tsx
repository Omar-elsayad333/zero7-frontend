import { style, menuStyle } from './style'
import { SelectNumberProps } from 'interfaces/inputsInterface';

// MUI
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SelectNumberInput: React.FC<SelectNumberProps> = ({ name, value, onChange, disabled, min = 1, max = 20, placeholder }) => {

    const rendered = [];
    for (let i = min; i <= max; i++) {
        rendered.push(
            <MenuItem
                key={i}
                value={i}
            >
                {i}
            </MenuItem>
        );
    }

    return (
        <Select
            displayEmpty
            name={name}
            value={value}  
            sx={style.root}
            disabled={disabled}
            onChange={e => onChange(e)}
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {    
                if (!selected || selected.length === 0) {
                    return (
                        <Typography 
                            fontSize={16}    
                            fontWeight={400} 
                            color={'secondary'}
                        >
                            {placeholder}
                        </Typography>
                    );
                }
                return selected;
            }}
            MenuProps={{
                sx: menuStyle
            }}
        >
            { rendered }
        </Select>

    );
}
 
export default SelectNumberInput;