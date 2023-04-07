import style from './shop.module.css'
import mp4 from 'assets/videos/shopVideo.mp4'
import webm from 'assets/videos/shopVideo.WebM'
import FilterWidget from 'components/filterWidget'

// MUI

const Shop = () => {
    return (
        <div className={`${style.container} grid`}>
            <video autoPlay loop muted className={style.shopVideo}>
                <source src={mp4} type='video/mp4' />
                <source src={webm} type='video/webm' />
                Your browser is not support video tag
            </video>
            <FilterWidget />
        </div>
    )
}

export default Shop;