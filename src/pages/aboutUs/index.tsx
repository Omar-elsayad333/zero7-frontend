import { colors } from 'styles/colors'
import style from './aboutUs.module.css'
import { withAuth } from 'routes/withRouts'
import { useUser } from 'contexts/userContext'
import { ComponentType } from 'react'
import LogoLoading from 'components/Loading/LogoLoading'

// MUI
import Typography from '@mui/material/Typography'

const AboutUs: ComponentType = () => {

    const { userState } = useUser()
    
    return (
        <>
            {
                userState.userLoading ?
                <LogoLoading /> :
                <div className={`${style.container} grid`}>
                    <Typography
                        variant='h2'
                        color={'primary'}
                        paddingBottom={2}
                        textAlign={'center'}
                        sx={{width: '100%', borderBottom: `2px solid ${colors.primary.main}`}}
                    >
                        About Us
                    </Typography>
                    <div className={style.contentContainer}>
                        <div className={style.section} data-aos="zoom-in" data-aos-duration="1000">
                            <Typography textAlign={'center'} variant='h3' color={'primary'}>
                                H&M GROUP AT A GLANCE
                            </Typography>
                            <Typography textAlign={'left'} maxWidth={600} variant='h5' color={colors.dark.main}>
                                The H&M group is one of the world’s leading fashion companies – with the brands H&M and H&M Home,
                                COS, & Other Stories, Monki, Weekday Cheap Monday and ARKET. Each with its own unique identity,
                                all our brands are united by a passion for fashion and quality and the drive to dress customers in a sustainable way.
                            </Typography>
                        </div>
                        <hr className={style.breaker} />
                        <div className={style.section} data-aos="zoom-in" data-aos-duration="1000">
                            <Typography textAlign={'center'} variant='h4' color={'primary'}>
                                FASHION LOVED BY MANY
                            </Typography>
                            <Typography textAlign={'left'} maxWidth={600} variant='h5' color={colors.dark.main}>
                                It all started with a single womenswear store in Västerås, Sweden, in 1947. Today,
                                the H&M group has several clearly defined fashion brands and a strong global presence.
                                Our expansion is long-term and we grow both online and with new stores, in existing as well as new markets.
                                We want to make sustainable, good-quality fashion accessible to as many people as possible.
                            </Typography>
                        </div>
                        <hr className={style.breaker} />
                        <div className={style.section} data-aos="zoom-in" data-aos-duration="1000">
                            <Typography textAlign={'center'} variant='h4' color={'primary'}>
                                HOW WE DO IT
                            </Typography>
                            <Typography textAlign={'left'} maxWidth={600} variant='h5' color={colors.dark.main}>
                                We want to make fashion sustainable and sustainability fashionable.
                                The commitment of our employees is key to our success.
                                We are dedicated to creating a better fashion future and we use our size and scale to drive
                                development towards a more circular, fair and equal fashion industry.
                            </Typography>
                        </div>
                        <hr className={style.breaker} />
                        <div className={style.section} data-aos="zoom-in" data-aos-duration="1000">
                            <Typography textAlign={'center'} variant='h4' color={'primary'}>
                                WHO WE ARE
                            </Typography>
                            <Typography textAlign={'left'} maxWidth={600} variant='h5' color={colors.dark.main}>
                                The H&M group joins together more than 161,000 colleagues from different backgrounds
                                and nationalities across the world. We are dedicated to always create the best offering
                                and the best experience for our customers. We all share a values-driven way of working,
                                based on a fundamental respect for the individual. Our shared values help create an open,
                                dynamic and down-to-earth company culture where anything is possible.
                            </Typography>
                        </div>
                        <hr className={style.breaker} />
                    </div>
                </div>
            }
        </>
    )
}

export default withAuth(AboutUs);