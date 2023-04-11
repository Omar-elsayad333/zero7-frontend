import style from './mainProduct.module.css'
import test3 from 'assets/images/test3.jpg'
import test4 from 'assets/images/test4.jpg'

// MUI
import Typography from '@mui/material/Typography'

type Props = {
    data: any;
    states: any;
    actions: any;
}

const MainProduct: React.FC<Props> = ({ data, states, actions }) => {
    
    console.log(states)
    console.log(actions)
    
    return (
        <div className={style.container} key={data._id}>
            <div className={style.imagesContainer}>
                <img src={test3} alt={data.name} />
                <img src={test4} alt={data.name} />
            </div>
            <div className={style.detailsContainer}>
                <Typography variant='h2' color={'primary'}>
                    {data.name}
                </Typography>
                <Typography variant='h3' color={'primary'}>
                    {data.description}
                </Typography>
                <Typography variant='h4' color={'primary'}>
                    {`EGP: ${data.price}`}
                </Typography>
                <div className={style.colorsContainer}>
                    <Typography variant='h4' color={'primary'}>
                        Colors:
                    </Typography>
                    <div className={style.colors}>
                        {
                            data.colors &&
                            data.colors.map((item: any, index: number) => (
                                <div 
                                    key={item.colorId._id}
                                    onClick={(e) => actions.selectColor(e)}
                                    style={{background: item.colorId.hexColor}}
                                    className={`${style.colorOuter} colorBox ${index === 0 ? 'colorActive' : null}`}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={style.colorsContainer}>
                    <Typography variant='h4' color={'primary'}>
                        Colors:
                    </Typography>
                    <div className={style.colors}>
                        {
                            data.colors &&
                            data.colors.map((item: any, index: number) => (
                                <div 
                                    key={item.colorId._id}
                                    onClick={(e) => actions.selectColor(e)}
                                    style={{background: item.colorId.hexColor}}
                                    className={`${style.colorOuter} colorBox ${index === 0 ? 'colorActive' : null}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainProduct;