import { withAuth } from 'routes/withRouts'
// MUI
import Box from '@mui/material/Box'

const Profile = () => {
    return (
        <Box>
            profile
        </Box>
    )
}
 
export default withAuth(Profile);