import { Typography } from '@material-tailwind/react';
import TitleIcon from '../../assets/icons/decor-2.png'

const CustomTitle = ({ title }) => {
    return (
        <div className="flex items-center mb-5">
            <img src={TitleIcon} className="pr-3" alt="" />
            <Typography variant="h6" className="text-primary-teal">{title}</Typography>
        </div>
    );
};

export default CustomTitle;