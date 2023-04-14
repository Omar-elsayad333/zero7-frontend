import style from './sideProducts.module.css'
import ProductCard from 'components/Shop/ProductCard';

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    data: any;
    actions: any
}

const SideProducts: React.FC<Props> = ({ data, actions }) => {
    return (
        <div className={style.container}>
            <Typography variant='h2' color={'primary'}>
                You Also May Like
            </Typography>
            <div className={style.cardContainer}>
                {
                    data.length > 0 ?
                    data.map((item: any) => (
                        <div key={item._id} className={style.card} data-aos="flip-left" data-aos-duration="1000">
                            <ProductCard 
                                data={item}
                                actions={{
                                    addToWishlist: actions.addToWishlist
                                }}
                            />
                        </div>
                    )) :
                    <Typography textAlign={'center'} width={'100%'} variant='h3' color={'secondary'}>
                        No more products like this
                    </Typography>
                }
            </div>
        </div>
    );
}

export default SideProducts;