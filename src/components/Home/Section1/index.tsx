import style from './section1.module.css'
import topLayer from 'assets/images/brush-dec 1.png'
import bottomLayer from 'assets/images/brush-dec 2.png'

const Section1: React.FC = () => {
    return (
        <div className={style.container}>
            <img src={topLayer} className={style.topLayer} width={'100%'} />
                
            <img src={bottomLayer} className={style.bottomLayer} width={'100%'} />
        </div>
    );
}
 
export default Section1;