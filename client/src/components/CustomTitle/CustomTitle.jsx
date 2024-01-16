import { Typography } from '@material-tailwind/react';
import TitleIcon from '../../assets/icons/decor-2.png'

const CustomTitle = ({ title, double }) => {
    return (
        <div className="flex w-max uppercase items-center mb-5">
            <img src={TitleIcon} className="pr-3" alt="" />
            <Typography variant="h6" className="text-primary-teal">{title}</Typography>
            {double ? <img src={TitleIcon} className="pl-3" alt="" /> : ''}
        </div>
    );
};

export default CustomTitle;