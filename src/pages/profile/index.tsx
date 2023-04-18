import { ComponentType } from 'react'
import { colors } from 'styles/colors'
import style from './profle.module.css'
import TabPanel from 'components/TabPanel'
import { withAuth } from 'routes/withRouts'
import { useUser } from 'contexts/userContext'
import useProfile from 'containers/useProfile'

// MUI
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography'

const Profile: ComponentType = () => {

    const { userState } = useUser()
    const { states, actions } = useProfile()

    return (
        <div className={`${style.container} grid`}>
            <Typography
                variant='h2'
                color={'primary'}
                paddingBottom={2}
                textAlign={'center'}
                sx={{width: '100%', borderBottom: `2px solid ${colors.primary.main}`}}
            >
                {`Welcome ${userState.user?.name}`}
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={states.value} onChange={actions.handleChange} aria-label="basic tabs example">
                        <Tab label="Profile Details" {...actions.a11yProps(0)} />
                        <Tab label="Your Orders" {...actions.a11yProps(1)} />
                        <Tab label="Reset Password" {...actions.a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={states.value} index={0}>
                    Profile Details    
                </TabPanel>
                <TabPanel value={states.value} index={1}>
                    Your Orders
                </TabPanel>
                <TabPanel value={states.value} index={2}>
                    Reset Password
                </TabPanel>
            </Box>
        </div>
    )
}
 
export default withAuth(Profile);