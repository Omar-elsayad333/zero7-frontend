import style from './product.module.css'
import useProduct from "containers/useProduct";
import LogoLoading from "components/Loading/LogoLoading";
import MainProduct from "components/Product/MainProduct";

const ProfileDetails: React.FC  = () => {

    const { data, states, actions } = useProduct()

    return (
        <div className={`${style.container} grid`}>
            {
                states.isLoading ?
                <LogoLoading /> : 
                <div>
                    <MainProduct 
                        data={data.productData}
                        states={states}
                        actions={actions}
                    />
                    {/* <SideProduct /> */}
                </div>
            }
        </div>
    )
}

export default ProfileDetails;