import React from 'react';
import Lottie from "lottie-react";
import doctorsBanner from "../../../Assets/doctors-banner-1.json";

const Banner = () => {
    return (
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 w-3/4">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Find Your Doctor As <br /> Per Your Need</h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Browse Doctor by Specialities</p>
                    </div>
                    <div className="relative">
                        <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                        <Lottie className="relative h-[400px] mx-auto" animationData={doctorsBanner} loop={true}
                        ></Lottie>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;