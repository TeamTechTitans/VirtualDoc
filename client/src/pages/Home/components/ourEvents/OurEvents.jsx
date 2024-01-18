import { Typography } from '@material-tailwind/react';
import Shape11 from '../../../../assets/icons/shape-11.png'
import Shape12 from '../../../../assets/icons/shape-12.png'

import EventCard from './EventCard';
import CustomTitle from '../../../../components/CustomTitle/CustomTitle';




const OurEvents = () => {
    return (
        <div className='bg-secondary-teal relative overflow-hidden'>
            <img src={Shape12} draggable={false} className='absolute right-0 animation-flooding' alt="" />
            <img src={Shape11} draggable={false} className='absolute left-0 bottom-0 animation-flooding2' alt="" />
            <div className='py-32 container mx-auto'>
                <div className='flex justify-center flex-col text-center mx-auto max-w-2xl items-center'>
                    <CustomTitle title={'OUR EVENTS'} double></CustomTitle>
                    <Typography variant="h2" color="black">
                        Publication Opportunity in Conference
                        Associated Event
                    </Typography>
                </div>
                <EventCard></EventCard>
            </div>
        </div>
    );
};

export default OurEvents;