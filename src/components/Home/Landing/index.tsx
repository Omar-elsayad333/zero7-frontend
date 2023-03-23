import style from './landing.module.css'
import { Typography } from '@mui/material'
import landingImage from 'assets/images/landing.png'
import PrimaryButton from 'components/Buttons/PrimaryButton'

const Landing: React.FC = () => {
    return (
        <div className={`${style.container} grid`}>
            <div className={style.textContainer}>
                <svg className={style.dash} data-aos="fade-right" data-aos-duration="1000" width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.5" x2="30" y2="1.5" stroke="#D1AE6F" strokeWidth="3"/>
                </svg>
                <div className={style.textLayout}>          
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography color={'primary'} variant={'h1'} fontWeight={700}>
                            The Creativity.
                        </Typography>
                    </div>
                    <div className={style.smallText} data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1000">
                        <Typography className={style.animatedText} variant='h2' color={'secondary'}>
                            We Are
                        </Typography>
                    </div>
                    <Typography data-aos="flip-left" data-aos-duration="1000" maxWidth={300} variant={'h5'} color={'secondary'}>
                        Be creative like as an omar fed lbp lk
                        klfjio fjseee  kjjfja  k.
                    </Typography>
                    <PrimaryButton content='new collection' />
                </div>
            </div>
            <div className={style.box}>
                <div className={style.imageContainer}>
                    <img className={style.statueImage} src={landingImage} alt='zero7' width={400} />
                    <div className={style.imageBackground} />
                </div>
            </div>
        </div>
    )
}
 
export default Landing;