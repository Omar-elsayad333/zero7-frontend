import style from './shop.module.css'
import useShop from 'containers/useShop'
import FilterWidget from 'components/filterWidget'
import ProductCard from 'components/Shop/ProductCard'
import LogoLoading from 'components/Loading/LogoLoading'

// MUI
import Typography from '@mui/material/Typography'

const Shop: React.FC  = () => {

    const { data, states, actions} = useShop()

    return (
        <div className={`${style.container} grid`}>
            {
                states.isLoading ?
                <LogoLoading /> :
                <>
                    <FilterWidget 
                        data={{
                            genders: data.genders,
                            categorys: data.categorys
                        }} 
                        state={{
                            selectedGender: states.selectedGender.name,
                            isLoading: states.isLoading
                        }}
                        actions={{
                            handleSelectedGender: actions.handleSelectedGender
                        }}
                    />
                    <div className={style.cardsContainer}>
                        {
                            data ?
                            data.productsData.map((item: any) => (
                                <div key={item._id} className={style.card} data-aos="flip-left" data-aos-duration="1000">
                                    <ProductCard data={item} />
                                </div>
                            )) : 
                            <Typography variant='h4' color={'primary'}>
                                Come back later
                            </Typography>
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Shop;