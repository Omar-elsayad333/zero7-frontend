import { colors } from 'styles/colors'
import style from './mainProduct.module.css'
import PrimaryButton from 'components/Buttons/PrimaryButton'
import SelectNumberInput from 'components/Inputs/SelectNumberInput'

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    data: any
    states: any
    actions: any
}

const MainProduct: React.FC<Props> = ({ data, states, actions }) => {
    return (
        <div className={style.container} key={data.productData._id}>
            <div
                className={style.imagesContainer}
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                {data.productData.colors && (
                    <>
                        <img
                            src={states.selectedImages[0]}
                            style={{ maxWidth: '100%' }}
                            alt={data.productData.name}
                        />
                        <img
                            src={states.selectedImages[1]}
                            style={{ maxWidth: '100%' }}
                            alt={data.productData.name}
                        />
                    </>
                )}
            </div>
            <div
                className={style.detailsContainer}
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
            >
                <Typography variant="h1" color={'primary'}>
                    {data.productData.name}
                </Typography>
                <Typography
                    width={600}
                    maxWidth={'100%'}
                    variant="h3"
                    color={'primary'}
                    sx={{
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                    }}
                >
                    {data.productData.description}
                </Typography>
                <Typography variant="h3" fontWeight={700} color={'primary'}>
                    {`Price: ${data.productData.price} `}
                    <Typography variant="h3" color={'primary'} display={'inline'}>
                        EGP
                    </Typography>
                </Typography>
                <div className={style.colorsContainer}>
                    <Typography variant="h3" fontWeight={700} color={'primary'}>
                        Colors:
                    </Typography>
                    <div className={style.colors}>
                        {data.productData.colors &&
                            data.productData.colors.map((item: any, index: number) => (
                                <div
                                    key={item.colorId._id}
                                    data-id={item.colorId._id}
                                    data-value={item.colorId.hexColor}
                                    onClick={(e) => actions.handleSelectColor(e)}
                                    style={{ background: item.colorId.hexColor }}
                                    className={`${style.colorOuter} colorBox ${
                                        index === 0 ? 'boxActive' : null
                                    }`}
                                />
                            ))}
                    </div>
                </div>
                <div className={style.colorsContainer}>
                    <Typography variant="h3" fontWeight={700} color={'primary'}>
                        Sizes:
                    </Typography>
                    <div className={style.colors}>
                        {data.sizes &&
                            data.sizes.map((item: any, index: number) => (
                                <div
                                    key={item.sizeId._id}
                                    data-id={item.sizeId._id}
                                    data-value={item.sizeId.name}
                                    onClick={(e) => actions.handleSelectSize(e)}
                                    className={`${style.sizeOuter} sizeBox ${
                                        index === 0 ? 'boxActive' : null
                                    }`}
                                >
                                    <Typography color={'white'} variant="h4">
                                        {item.sizeId.name}
                                    </Typography>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={style.colorsContainer}>
                    <Typography variant="h3" fontWeight={700} color={'primary'}>
                        Quantity:
                    </Typography>
                    <SelectNumberInput
                        max={data.quantity}
                        disabled={states.isLoading}
                        placeholder="Select Quantity"
                        value={states.selectedQuantity || ''}
                        onChange={actions.handleSelectQuantity}
                    />
                </div>
                {states.error && (
                    <Typography variant="h6" color={'error'}>
                        {states.error}
                    </Typography>
                )}
                <div className={style.buttonsAction}>
                    <PrimaryButton onClick={actions.addToCart} content="Add To Cart" />
                    <svg
                        onClick={(e) => actions.addToWishlist(e, data.productData._id)}
                        className="wishlistIcons"
                        data-id={data.productData._id}
                        width="30"
                        height="30"
                        viewBox="0 0 24 25"
                        fill={colors.primary.main}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 5.02765C9.64418 2.91689 6.02125 2.99347 3.75736 5.25736C1.41421 7.60051 1.41421 11.3995 3.75736 13.7426L10.5858 20.5711C11.3668 21.3521 12.6332 21.3521 13.4142 20.5711L20.2426 13.7426C22.5858 11.3995 22.5858 7.60051 20.2426 5.25736C17.9787 2.99347 14.3558 2.91689 12 5.02765ZM10.8284 6.67157L11.2929 7.13604C11.6834 7.52656 12.3166 7.52656 12.7071 7.13604L13.1716 6.67157C14.7337 5.10948 17.2663 5.10948 18.8284 6.67157C20.3905 8.23367 20.3905 10.7663 18.8284 12.3284L12 19.1569L5.17157 12.3284C3.60948 10.7663 3.60948 8.23367 5.17157 6.67157C6.73367 5.10948 9.26633 5.10948 10.8284 6.67157Z"
                            fill="inherit"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MainProduct
