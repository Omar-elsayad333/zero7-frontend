import { ComponentType } from 'react'
import { classes } from './muiClasses'
import { colors } from 'styles/colors'
import style from './profle.module.css'
import TabPanel from 'components/TabPanel'
import { withAuth } from 'routes/withRouts'
import { useUser } from 'contexts/userContext'
import useProfile from 'containers/useProfile'

// MUI
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Routes } from 'routes/Routes'

const Profile: ComponentType = () => {
    const { userState } = useUser()
    const { states, actions } = useProfile()

    return (
        <div className={`${style.container} grid`}>
            <Typography
                variant="h2"
                color={'primary'}
                paddingBottom={2}
                textAlign={'center'}
                sx={{ width: '100%', borderBottom: `2px solid ${colors.primary.main}` }}
            >
                {`Welcome ${userState.user?.name}`}
            </Typography>
            <Box sx={classes}>
                <Box>
                    <Tabs
                        value={states.value}
                        onChange={actions.handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Profile Details" {...actions.a11yProps(0)} />
                        <Tab label="Your Orders" {...actions.a11yProps(1)} />
                        <Tab label="Reset Password" {...actions.a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={states.value} index={0}>
                    <div className={style.content}>
                        <div>
                            <Typography marginBottom={1} variant="h4" color={colors.dark.main}>
                                Name
                            </Typography>
                            <Typography paddingLeft={4} variant="h5" color={'primary'}>
                                {userState.user?.name}
                            </Typography>
                        </div>
                        <div>
                            <Typography marginBottom={1} variant="h4" color={colors.dark.main}>
                                Email Address
                            </Typography>
                            <Typography paddingLeft={4} variant="h5" color={'primary'}>
                                {userState.user?.email}
                            </Typography>
                        </div>
                        <div>
                            <Typography marginBottom={1} variant="h4" color={colors.dark.main}>
                                Phone Number
                            </Typography>
                            <Typography paddingLeft={4} variant="h5" color={'primary'}>
                                {userState.user?.phoneNumber}
                            </Typography>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={states.value} index={1}>
                    <Typography variant="h4" color={colors.dark.main}>
                        No orders yet
                        <Link to={Routes.shop}>
                            <Typography variant="h4" color="primary">
                                Go Shopping
                            </Typography>
                        </Link>
                    </Typography>
                </TabPanel>
                <TabPanel value={states.value} index={2}>
                    Reset Password
                </TabPanel>
            </Box>
        </div>
    )
}

export default withAuth(Profile)
