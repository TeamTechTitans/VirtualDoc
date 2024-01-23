import { useEffect, useState } from "react";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
// import img from '../../../assests/vector.png'
// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CustomTitle from "../../../components/CustomTitle/CustomTitle";
import { Typography } from "@material-tailwind/react";
import { Autoplay } from 'swiper/modules';

// import './styles.css';

// import required modules

const Article = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('article.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (

        <div className="container mx-auto py-32">
            <div className="mb-20">
                <CustomTitle title={'Recent Article'}></CustomTitle>
                <Typography variant="h2" className="text-[#142441] font-bold hidden md:block">Interesting Articles Updated <br />Every Daily</Typography>

            </div>


            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },

                }}
                modules={[Autoplay]}
                className="mySwiper items-center"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article, index) => (
                        <SwiperSlide key={index}>
                            <ArticleCard article={article}></ArticleCard>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>

        </div>
    );
};

export default Article;