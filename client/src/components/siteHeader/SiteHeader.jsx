import { Typography } from '@material-tailwind/react';
import React from 'react';

const SiteHeader = ({ children, title }) => {
    return (
        <div className='bg-header-bg before:h-96 bg-cover bg-repeat-x before:absolute before:w-full before:bg-dark-blue before:opacity-85 flex justify-center items-center h-96 w-full'>
            {/* <div className='bg-header-bg before:h-96 bg-cover bg-repeat-x before:absolute before:w-full before:bg-dark-blue before:opacity-85 flex justify-center items-center h-96 w-full'> */}
            <img src="https://i.ibb.co/NY7D15c/shape-63.png" className='z-10 absolute' alt="" />
            <div className='z-10 text-center'>
                <Typography variant='h1' className='text-white'>{children}</Typography>
                <Typography variant='h6' className='text-white'>{title}</Typography>
            </div>

        </div>
    );
};

export default SiteHeader;