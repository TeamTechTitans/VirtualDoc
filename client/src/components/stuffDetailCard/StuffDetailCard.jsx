import { Typography } from '@material-tailwind/react';
import '../../pages/Home/components/animation.css';

const StuffDetailCard = () => {
    return (
        <div className="flex relative mb-20 p-2 justify-center items-center">
            <div
                className="max-w-[300px] flex max-h-[320px] hover-before before:w-full before:h-full before:opacity-30 before:cursor-pointer before:scale-0 hover:before:scale-100 before:duration-500 before:rounded-2xl before:bg-black  aspect-square"

            >
                <img src="https://www.wellingtonregional.com/sites/wellingtonregional.com/files/doctors_visit_1200x900.jpg"
                    className='aspect-square max-w-[300px] rounded-2xl max-h-[300px]'
                    alt=""
                    loading='lazy'
                />
                <div className='absolute bg-secondary-teal z-10 p-4 w-full rounded-3xl shadow-md -bottom-20 h-40'>
                    <Typography variant='h6' className='text-center'>Doctor Name </Typography>
                    <Typography variant='paragraph' className='text-center'>Doctor position </Typography>
                    <Typography variant='paragraph' className='text-center'>Category</Typography>
                    <Typography variant='paragraph' className='text-center'>Contact</Typography>
                </div>
            </div>
        </div>
    );
};

export default StuffDetailCard;