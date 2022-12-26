import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Feature.css';
import { Link } from 'react-router-dom';


const Features = () => {
    return (
        <div className='py-20' style={{
            backgroundColor: '#edf5fc'
        }}>
            <h1 className='text-blue-600 font-bold text-5xl text-center'>Availabe Features in Our Clinic</h1>
            <p className='font-semibold text-lg text-center text-gray-500'>
                We are a team of professional doctors and medical staff with
                years of experience in the medical field
            </p>
            <div className='w-3/4 my-10 mx-auto'>
                <Swiper
                    autoplay={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='container'>
                        <Link href="#" className="card-d education">
                            <div className="overlay"></div>
                            <div className="circle">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/features-01.svg" alt="" />
                            </div>
                            <p className='font-bold'>Operation</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='container'>
                        <Link href="#" className="card-d credentialing">
                            <div className="overlay"></div>
                            <div className="circle">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/features-02.svg" alt="" />
                            </div>
                            <p className='font-bold'>Medical</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='container'>
                        <Link href="#" className="card-d wallet">
                            <div className="overlay"></div>
                            <div className="circle">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/features-03.svg" alt="" />
                            </div>
                            <p className='font-bold'>Patient Ward</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='container'>
                        <Link href="#" className="card-d human-resources">
                            <div className="overlay"></div>
                            <div className="circle">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/features-04.svg" alt="" />
                            </div>
                            <p className='font-bold'>Laboratory</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Features;