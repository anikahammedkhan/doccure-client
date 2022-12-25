import React from 'react';

const Banner = () => {
    return (
        <section className="pt-10 overflow-hidden bg-[#E5F1FB] md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h1 className='text-5xl font-bold mb-5'>Search Doctor,</h1>
                        <h1 className='text-5xl font-bold text-blue-600'>Make an Appointment</h1>
                        <h1 className='mt-10 gap-2 bg-blue-500 text-3xl inline-block px-3 py-2 rounded-md text-white'>
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/banner-check.png" alt="" className='inline-block mr-1' />
                            Instant Operation & Appointment
                        </h1>
                        <h1 className='mt-10 gap-2 bg-blue-500 text-3xl inline-block px-3 py-2 rounded-md text-white'>
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/banner-check.png" alt="" className='inline-block mr-1' />
                            100% Expert Doctors
                        </h1>
                        <p className='mt-4 text-2xl text-gray-700'>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>
                    <div className="relative">
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://doccure-html.dreamguystech.com/template/assets/img/banner-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;