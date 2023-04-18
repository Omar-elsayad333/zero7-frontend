import { useState } from 'react'

const useProfile = () => {

    const [value, setValue] = useState(0);

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };

    return (
        {
            data: {

            },
            states: {
                value
            },
            actions: {
                a11yProps,
                handleChange
            }
        }
    );
}
 
export default useProfile;