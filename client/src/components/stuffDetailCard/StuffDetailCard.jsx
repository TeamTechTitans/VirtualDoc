import { Typography } from '@material-tailwind/react';
import '../../pages/Home/components/animation.css';
import { FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa6';

const StuffDetailCard = ({ doctor }) => {
    // console.log(doctor)
    return (
        <div className="flex relative mb-20 p-2 justify-center items-center">
            <div
                className="w-[280px] flex rounded-full h-[280px] hover-before before:w-full before:h-full before:opacity-30 before:cursor-pointer before:scale-0 hover:before:scale-100 before:duration-500 before:rounded-full before:bg-black  aspect-square"

            >
                <img src={doctor?.image}
                    className='aspect-square w-[280px] rounded-full h-[280px]'
                    alt=""
                    loading='lazy'
                />
                <div className='absolute bg-secondary-teal w-52 z-10 p-4 translate-x-1/2 right-1/2 rounded-3xl shadow-md -bottom-20 h-40'>
                    <Typography variant='h6' className='text-center'>{doctor?.name}</Typography>
                    <Typography variant='paragraph' className='text-center'>{doctor?.health_category} </Typography>
                    <Typography variant='paragraph' className='text-center'>{doctor?.education}</Typography>
                    <div className='flex flex-wrap justify-center mt-4 gap-4'>
                        <a href={`mailto:${doctor?.email}`} className='border rounded-full w-8 h-8 flex justify-center items-center border-solid border-black' target='_blank'><FaEnvelope className='text-xl' /></a>
                        <a href={'https://facebook.com'} className='border rounded-full w-8 h-8 flex justify-center items-center border-solid border-black' target='_blank'><FaFacebook className='text-xl' /></a>
                        <a href={'https://twitter.com'} className='border rounded-full w-8 h-8 flex justify-center items-center border-solid border-black' target='_blank'><FaTwitter className='text-xl' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StuffDetailCard;