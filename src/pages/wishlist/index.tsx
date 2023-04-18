import { ComponentType } from 'react'
import { colors } from 'styles/colors'
import { Routes } from 'routes/Routes'
import { Link } from 'react-router-dom'
import style from './wishlist.module.css'
import useWishlist from 'containers/useWishlist'
import LogoLoading from 'components/Loading/LogoLoading'
import ProductCard from 'components/Wishlist/ProductCard'
import PrimaryButton from 'components/Buttons/PrimaryButton'

// MUI
import Typography from '@mui/material/Typography'

const Wishlist: ComponentType = () => {

    const { data, states, actions} = useWishlist()

    return (
        <div className={`${style.container} grid`}>
            {
                states.isLoading ?
                <LogoLoading /> :
                <>
                    <Typography
                        variant='h2'
                        color={'primary'}
                        paddingBottom={2}
                        textAlign={'center'}
                        sx={{width: '100%', borderBottom: `2px solid ${colors.primary.main}`}}
                    >
                        Your Wishlist
                    </Typography>
                    <div className={style.cardsContainer}>
                        {
                            data.productsData.length > 0 ?
                            data.productsData.map((item: any) => (
                                <div key={item._id} className={style.card} data-aos="flip-left" data-aos-duration="1000">
                                    <ProductCard 
                                        data={item}
                                        actions={{
                                            removeFromWishList: actions.removeFromWishList
                                        }}
                                    />
                                </div>
                            )) : 
                            <div className={style.emptyMes}>
                                <Typography variant='h3' color={'primary'}>
                                    Your favourites is empty.
                                </Typography>
                                <Link to={Routes.shop}>
                                    <PrimaryButton content='Go Shopping' />
                                </Link>
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    )
}
 
export default Wishlist;