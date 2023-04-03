import { IStyle } from 'styles/IStyle';

// MUI
import Box from '@mui/system/Box';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    small?: boolean ;
};

const Loading: React.FC<Props> = ({ small }) => {
    const styles: IStyle = {
        container: {
            width: '100%',
            height: '100%',
            position: 'fixed', 
            top: '0',
            zIndex: '1000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0 , 0, .7)'
        }
    };

    return (
        <Box sx={styles.container}>
            <CircularProgress color='primary' size={small ? 30 : 75} />
        </Box>
    );
}

export default Loading;