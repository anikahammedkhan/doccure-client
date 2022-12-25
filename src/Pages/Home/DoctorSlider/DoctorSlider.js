import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const DoctorSlider = () => {
    return (
        <div className='mt-5 py-10 h-[800px]'
            style={{
                backgroundImage: `url("https://doccure-html.dreamguystech.com/template/assets/img/doctors/doctor-img.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'fit-content',
                backgroundPosition: 'right',
            }}
        >
            <h1 className='text-blue-600 font-bold text-5xl text-center'>Book Our Doctor</h1>
            <p className='font-semibold text-lg text-center text-gray-500'>
                We are a team of professional doctors and medical staff with
                years of experience in the medical field
            </p>
            <div className='w-3/5 mx-auto'>
                <Swiper
                    autoplay={true}
                    slidesPerView={3}
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
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl m-2">
                            <figure className="px-5 pt-10">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/book-doctor-01.jpg" alt="Shoes" className="rounded-xl w-full h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center p-4">
                                <h2 className="card-title">David Blackwell</h2>
                                <p>Dental Specialist</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <p> 4.9 (82)</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn bg-blue-500 border-none hover:bg-blue-700">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl m-2">
                            <figure className="px-5 pt-10">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/book-doctor-01.jpg" alt="Shoes" className="rounded-xl w-full h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center p-4">
                                <h2 className="card-title">David Blackwell</h2>
                                <p>Dental Specialist</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <p> 4.9 (82)</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn bg-blue-500 border-none hover:bg-blue-700">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl m-2">
                            <figure className="px-5 pt-10">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/book-doctor-01.jpg" alt="Shoes" className="rounded-xl w-full h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center p-4">
                                <h2 className="card-title">David Blackwell</h2>
                                <p>Dental Specialist</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <p> 4.9 (82)</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn bg-blue-500 border-none hover:bg-blue-700">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card bg-base-100 shadow-xl m-2">
                            <figure className="px-5 pt-10">
                                <img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/book-doctor-01.jpg" alt="Shoes" className="rounded-xl w-full h-[300px]" />
                            </figure>
                            <div className="card-body items-center text-center p-4">
                                <h2 className="card-title">David Blackwell</h2>
                                <p>Dental Specialist</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <p> 4.9 (82)</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn bg-blue-500 border-none hover:bg-blue-700">Book Appointment</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default DoctorSlider;