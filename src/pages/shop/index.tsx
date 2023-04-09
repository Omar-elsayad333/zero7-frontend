import style from './shop.module.css'
import useShop from 'containers/useShop'
// import mp4 from 'assets/videos/shopVideo.mp4'
// import webm from 'assets/videos/shopVideo.WebM'
import FilterWidget from 'components/filterWidget'
import ProductCard from 'components/Shop/ProductCard'

// MUI
import { Typography } from '@mui/material'

const Shop: React.FC  = () => {

    const { data } = useShop()

    return (
        <div className={`${style.container} grid`}>
            {/* <div className={style.shopVideoContainer}>
                <video autoPlay loop muted className={style.shopVideo}>
                    <source src={mp4} type='video/mp4' />
                    <source src={webm} type='video/webm' />
                    Your browser is not support video tag
                </video>
            </div> */}
            <FilterWidget />
            <div className={style.cardsContainer}>
                {
                    data ?
                    data.map((item: any) => (
                        <div key={item._id} className={style.card} data-aos="flip-left" data-aos-duration="1000">
                            <ProductCard data={item} />
                        </div>
                    )) : 
                    <Typography variant='h4' color={'primary'}>
                        Come back later
                    </Typography>
                }
            </div>
        </div>
    )
}

export default Shop;