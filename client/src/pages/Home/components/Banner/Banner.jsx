import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import round from '../../../../assets/icons/shape-52.png';
import topBg from '../../../../assets/icons/shape-53.png';
import bottomBg from '../../../../assets/icons/shape-54.png';
import bannerBg from '../../../../assets/icons/shape-68.png';

import { useQuery } from '@tanstack/react-query';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import BannerSlider from './BannerSlider';

const Banner = () => {

    const { data } = useQuery({
        queryKey: ['banner'],
        queryFn: async () => {
            const getReviews = await fetch('banner.json')
            return getReviews.json();
        }
    })

    return (
        <div className="w-full bg-dark-blue relative flex justify-center items-center overflow-hidden h-[800px] max-h-[1280px]">
            <img loading="lazy" src={bannerBg} className='absolute hidden md:block bottom-0 w-full' alt="" />
            <img loading="lazy" src={topBg} className='absolute animation-flooding2 top-0 w-2/3' alt="" />
            <img loading="lazy" src={round} className='absolute m-5 md:m-20 w-32 md:w-60 animation-spin top-0' alt="" />
            <img loading="lazy" src={bottomBg} className='absolute animation-flooding bottom-0 w-1/3 right-0 ' alt="" />
            <div className='container mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data?.map((slide, idx) => <SwiperSlide key={idx}><BannerSlider slide={slide}></BannerSlider></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;