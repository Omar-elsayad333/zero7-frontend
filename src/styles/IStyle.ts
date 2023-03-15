import { Theme, SystemStyleObject } from '@mui/system';

export type IStyle = {
    [Property: string]:
        | SystemStyleObject<Theme>
        | ((theme: Theme) => SystemStyleObject<Theme>)
        | undefined;
};
