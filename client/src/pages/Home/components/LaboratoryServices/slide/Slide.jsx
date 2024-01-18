import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Reviews from './Reviews';
import { Tooltip } from '@material-tailwind/react';

const slide = () => {

    const { data } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const getReviews = await fetch('sliderData.json')
            return getReviews.json();
        }
    })

    useEffect(() => {

    }, [])

    return (
        <div className='relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {data?.map((review, key) => <SwiperSlide key={key}><Reviews review={review}></Reviews></SwiperSlide>)}

            </Swiper>
            <div className='absolute hidden sm:block w-24 bottom-10 right-10'>
                <Tooltip content="Previous">
                    <div className='swiper-button-prev after:hidden'>
                        <svg fill="#BBBBBB" className='hover:fill-primary-teal' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#BBBBBB"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.293,12.707a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,8.707,6.707L4.414,11H22a1,1,0,0,1,0,2H4.414l4.293,4.293a1,1,0,0,1-1.414,1.414Z"></path></g></svg>
                    </div>
                </Tooltip>
                <Tooltip content="Next">
                    <div className='swiper-button-next after:hidden'>
                        <svg fill="#BBBBBB" className='hover:fill-primary-teal' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#BBBBBB" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1.293,12.707a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,8.707,6.707L4.414,11H22a1,1,0,0,1,0,2H4.414l4.293,4.293a1,1,0,0,1-1.414,1.414Z"></path></g></svg>
                    </div>
                </Tooltip>
            </div>
        </div>

    );
};

export default slide;