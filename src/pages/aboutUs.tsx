import { withAuth } from 'routes/withRouts';

// MUI
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';

const AboutUs = () => {
    return (
        <Box>
            <Typography color='primary' variant='h2'>
                about us
            </Typography>
        </Box>
    )
}

export default withAuth(AboutUs);