import { Typography } from '@mui/material';
import style from './filterWidget.module.css'
import SelectInput from 'components/Inputs/SelectInput';

const FilterWidget: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.filtersContainer}>
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
            <div className={style.filterControllers}>
                <Typography variant='h4' color={'primary'}>
                    Clear Filters
                </Typography>
            </div>
        </div>
    );
}

export default FilterWidget;