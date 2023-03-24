import style from './section2.module.css'
import topLayer from 'assets/images/brush-dec 1.png'
import bottomLayer from 'assets/images/brush-dec 2.png'
import SecondaryButton from 'components/Buttons/SecondaryButton';

// MUI
import Typography from '@mui/material/Typography';

const Section2: React.FC = () => {
    return ( 
        <div className={`${style.container} grid`}>
            <img src={topLayer} className={style.topLayer} width={'100%'} alt='Top layer' />
                <div className={style.topBox}>
                    <div className={style.imagesConatiner}>
                        <div className={style.topImageLayer} />
                        <div className={style.bottomImageLayer} />
                    </div>
                    <div className={style.textContainer}>
                        <Typography variant='h2' color={'primary'}>
                            Styled by you.
                        </Typography>
                        <Typography variant='h4' color={'secondary'} maxWidth={480}>
                            We love to see how you style your favourites from H&M:
                            Keep sharing your personal style with @HM and #HMxME for
                            a chance to be featured at hm.com, in our marketing materials 
                            and in our stores.
                        </Typography>
                        <SecondaryButton content='shop now' />
                    </div>
                </div>
                <hr className={style.breaker} />
                <div className={style.bottomBox}>
                    
                </div>
            <img src={bottomLayer} className={style.bottomLayer} width={'100%'} alt='Bottom layer' />
        </div>
    )
}

export default Section2; 