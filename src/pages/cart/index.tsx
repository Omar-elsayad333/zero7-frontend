import style from './cart.module.css'
import { Routes } from 'routes/Routes'
import { colors } from 'styles/colors'
import { Link } from 'react-router-dom'
import useCart from 'containers/useCart'
import PrimaryButton from 'components/Buttons/PrimaryButton'

// MUI
import Typography from '@mui/material/Typography'

const cart: React.FC = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useCart()

    return (
        <div className={`${style.container} grid`}>
            {
                data.productsData.length > 0 ?
                <>
                    <div className={style.productsContainer}>    
                        {
                            data.productsData.map((item: any, index: number) => (
                                <div key={index} className={style.product}>
                                    <Link to={`${Routes.product}${item._id}`}>
                                        <img 
                                            width={200} 
                                            loading='lazy' 
                                            alt={item.name} 
                                            src={item.image} 
                                            style={{borderRadius: '20px', border: `2px solid ${colors.primary.main}`}} 
                                        />
                                    </Link>
                                    <div className={style.productDetails}>
                                        <Typography variant='h3' color={'primary'}>
                                            {item.name}
                                        </Typography>
                                        <div
                                            className={style.productColorBox}
                                            style={{backgroundColor: item.color}}
                                        />
                                        <Typography variant='h4' color={'primary'}>
                                            {`Size: ${item.size}`}
                                        </Typography>
                                        <Typography variant='h4' color={'primary'}>
                                            {`Quantity: ${item.quantity}`}
                                        </Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={style.checkoutContainer}>

                    </div>
                </> :
                <div className={style.emptyMes}>
                    <Typography variant='h3' color={'primary'}>
                        Your cart is empty.
                    </Typography>
                    <Link to={Routes.shop}>
                        <PrimaryButton content='Go Shopping' />
                    </Link>
                </div>
            }
        </div>
    );
}
 
export default cart;