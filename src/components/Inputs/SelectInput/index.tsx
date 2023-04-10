import { style, menuStyle } from './style'
import { SelectProps } from 'interfaces/inputsInterface';

// MUI
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SelectInput: React.FC<SelectProps> = ({ name, value = '', onChange, disabled, data, placeholder }) => {
    return (
        <div>
            <Select
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
                                fontSize={14}    
                                fontWeight={400} 
                                color={'primary'}
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
                {   
                    data?.length > 0 &&
                    data.map((item: any) => (
                        <MenuItem
                            key={item._id}
                            value={item.name}
                        >
                            {item.name}
                        </MenuItem>
                    ))
                }
            </Select>
        </div>
    );
}
 
export default SelectInput;