import { Routes } from 'routes/Routes'
import { Link } from 'react-router-dom'
import style from './poductCard.module.css'
import test1 from 'assets/images/test1.jpg'

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    data: any;
    actions: any;
}

const ProductCard: React.FC<Props> = ({ data, actions }) => {
    return (
        <>
            <div className={style.productImageContainer}>
                <Link to={`${Routes.product}${data._id}`} className='notLink'>
                    <img loading='lazy' src={test1} alt={data.name} className={style.productImage} />
                </Link>
            </div>
            <div className={style.detailsContainer}>
                <Link to={`${Routes.product}${data._id}`} className='notLink'>
                    <Typography variant='h4' color={'primary'}>
                        {data.name}
                    </Typography>
                </Link>
                <div className={style.cardOptions}>
                    <Typography variant='h5' color={'primary'}>
                        {`EGP ${data.price}`}
                    </Typography> 
                    <Typography
                        variant='h6'
                        color={'error'}
                        data-id={data._id}
                        onClick={() => actions.removeFromWishList(data._id)}
                    >
                        Remove
                    </Typography>
                </div>
            </div>
        </>
    );
}
 
export default ProductCard;