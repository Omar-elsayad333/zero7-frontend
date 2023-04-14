import { colors } from 'styles/colors'
import { Routes } from 'routes/Routes'
import { Link } from 'react-router-dom'
import style from './poductCard.module.css'

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
                    <img loading='lazy' src={data.colors[0].images[0]} alt={data.name} className={style.productImage} />
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
                    <svg className='wishlistIcons' data-id={data._id} onClick={(e) => actions.addToWishlist(e, data._id)} width="24" height="25" viewBox="0 0 24 25" fill={colors.primary.main} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.02765C9.64418 2.91689 6.02125 2.99347 3.75736 5.25736C1.41421 7.60051 1.41421 11.3995 3.75736 13.7426L10.5858 20.5711C11.3668 21.3521 12.6332 21.3521 13.4142 20.5711L20.2426 13.7426C22.5858 11.3995 22.5858 7.60051 20.2426 5.25736C17.9787 2.99347 14.3558 2.91689 12 5.02765ZM10.8284 6.67157L11.2929 7.13604C11.6834 7.52656 12.3166 7.52656 12.7071 7.13604L13.1716 6.67157C14.7337 5.10948 17.2663 5.10948 18.8284 6.67157C20.3905 8.23367 20.3905 10.7663 18.8284 12.3284L12 19.1569L5.17157 12.3284C3.60948 10.7663 3.60948 8.23367 5.17157 6.67157C6.73367 5.10948 9.26633 5.10948 10.8284 6.67157Z" fill="inherit"/>
                    </svg>
                </div>
            </div>
        </>
    );
}
 
export default ProductCard;