import style from './section1.module.css'
import image1 from 'assets/images/slider1.jpg'
import image2 from 'assets/images/slider2.jpg'
import image3 from 'assets/images/slider3.jpg'
import topLayer from 'assets/images/brush-dec 1.png'
import bottomLayer from 'assets/images/brush-dec 2.png'

// MUI
import Typography from '@mui/material/Typography'

// BOOTSTRAP
import { Carousel } from 'react-bootstrap'

const Section1: React.FC = () => {
    return (
        <div className={`${style.container} grid`}>
            <img src={topLayer} className={style.topLayer} width={'100%'} alt="Top layer" />
            <div className={style.titleBox}>
                <Typography color={'primary'} variant="h2">
                    Our Fashion
                </Typography>
                <a href="/">
                    <Typography color={'secondary'} variant="h4">
                        Discover our latest fashion
                    </Typography>
                </a>
            </div>
            <Carousel className={style.sliderContainer}>
                <Carousel.Item>
                    <img src={image1} alt="First slide" className="w-100" />
                    <Carousel.Caption>
                        <h3>Winter Collection</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image2} alt="Second slide" className="w-100" />
                    <Carousel.Caption>
                        <h3>Summer Collection</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image3} alt="Third slide" className="w-100" />
                    <Carousel.Caption>
                        <h3>Legacy</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img
                src={bottomLayer}
                className={style.bottomLayer}
                width={'100%'}
                alt="Bottom layer"
            />
        </div>
    )
}

export default Section1
