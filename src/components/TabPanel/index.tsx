
// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {
                value === index && 
                <Box sx={{ p: 3 }}>
                    <Typography>
                        {children}
                    </Typography>
                </Box>  
            }
        </div>
    );
}

export default TabPanel