import { ComponentType } from 'react'
import { colors } from 'styles/colors'
import style from './profle.module.css'
import { withAuth } from 'routes/withRouts'
import { useUser } from 'contexts/userContext'

// MUI
import Typography from '@mui/material/Typography'

const Profile: ComponentType = () => {
    const { userState } = useUser()
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
        </div>
    )
}
 
export default withAuth(Profile);