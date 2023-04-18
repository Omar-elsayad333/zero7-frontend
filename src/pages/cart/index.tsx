import style from './cart.module.css'
import { ComponentType } from 'react'
import { Routes } from 'routes/Routes'
import { colors } from 'styles/colors'
import { Link } from 'react-router-dom'
import useCart from 'containers/useCart'
import { useUser } from 'contexts/userContext'
import LogoLoading from 'components/Loading/LogoLoading'
import PrimaryButton from 'components/Buttons/PrimaryButton'

// MUI
import Typography from '@mui/material/Typography'

const Cart: ComponentType = () => {

    const { userState } = useUser()
    const { data, states, actions } = useCart()

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
                        Your Cart
                    </Typography>
                    {
                        data.productsData.length > 0 ?
                        <div className={style.contentLayout}>
                            <div className={style.productsContainer}>    
                                {
                                    data.productsData.map((item: any, index: number) => (
                                        <div key={index} className={style.product} data-aos="fade-right" data-aos-duration="1000">
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
                            <div className={style.checkoutContainer} data-aos="fade-left" data-aos-duration="1000" data-aos-once='true'>
                                <Typography variant='h3' color={'primary'}>
                                    Order Summary
                                </Typography>
                                <div className={style.checkoutContent}>
                                    <Typography variant='h4' color={'primary'}>
                                        Subtotal
                                    </Typography>
                                    <Typography variant='h5' color={'primary'}>
                                        {`EGP ${states.productsSubtotal}`}
                                    </Typography>
                                </div>
                                <div className={style.checkoutContent}>
                                    <Typography variant='h4' color={'primary'}>
                                        Delivery
                                    </Typography>
                                    <Typography variant='h5' color={'primary'}>
                                        {`EGP 60`}
                                    </Typography>
                                </div>
                                <hr className={style.breaker} />
                                <div className={style.checkoutContent}>
                                    <Typography variant='h3' color={'primary'}>
                                        Order Total
                                    </Typography>
                                    <Typography variant='h4' color={'primary'}>
                                        {`EGP ${states.productsTotal}`}
                                    </Typography>
                                </div>
                                    <PrimaryButton 
                                        content='CHECKOUT'
                                        onClick={actions.checkout}
                                    />
                            </div>
                        </div> :
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
            }
        </>
    );
}
 
export default Cart;