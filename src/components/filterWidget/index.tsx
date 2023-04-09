import { Typography } from '@mui/material';
import style from './filterWidget.module.css'
import SelectInput from 'components/Inputs/SelectInput';

const FilterWidget: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.filtersContainer} data-aos="fade-right" data-aos-duration="1000">
                <SelectInput 
                    data={''}
                    value={''}
                    onChange={()=>{}}
                    placeholder='gender'
                    disabled={false}
                />
                <SelectInput 
                    data={''}
                    value={''}
                    onChange={()=>{}}
                    placeholder=''
                    disabled={false}
                />
            </div>
            <div className={style.filterControllers} data-aos="fade-left" data-aos-duration="1000">
                <Typography variant='h4' color={'primary'}>
                    Clear Filters
                </Typography>
            </div>
        </div>
    );
}

export default FilterWidget;