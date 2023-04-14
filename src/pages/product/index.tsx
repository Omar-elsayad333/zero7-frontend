import style from './product.module.css'
import useProduct from "containers/useProduct";
import LogoLoading from "components/Loading/LogoLoading";
import MainProduct from "components/Product/MainProduct";
import SideProducts from 'components/Product/SideProducts';

const ProfileDetails: React.FC  = () => {

    const { data, states, actions } = useProduct()

    return (
        <div className={`${style.container} grid`}>
            {
                states.isLoading ?
                <LogoLoading /> : 
                <>
                    <MainProduct 
                        data={data}
                        states={states}
                        actions={actions}
                    />
                    <hr className={style.breaker} />
                    <SideProducts
                        data={data.sideProducts}
                        actions={actions.addToWishlist}
                    />
                </>
            }
        </div>
    )
}

export default ProfileDetails;