import React from 'react';
import { Link } from 'react-router-dom';
import { GiWoodenPegleg } from 'react-icons/gi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';
import { TbDental } from 'react-icons/tb';
import { GiBrain } from 'react-icons/gi';

const Category = () => {
    return (
        <div className='py-12'
            style={{
                backgroundColor: '#edf5fc'
            }}
        >
            <h1 className='text-center text-blue-600 font-bold text-4xl py-5'>High Quality Service for you</h1>
            <p className='text-center text-lg font-semibold text-gray-500'>
                We Provide the best service for you. All of our patient are very happy with our <br /> service. There are mainly 4 categories of our service.
            </p>
            <div className='w-3/5 mx-auto my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className="flex items-center justify-center rounded-lg">
                        <Link className="relative block w-full h-64 overflow-hidden bg-gray-900 group rounded-lg" to="/">
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/services-01.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-50 rounded-lg" />
                            <div className="relative">
                                <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                    <div className="p-5">
                                        <GiWoodenPegleg className='text-white text-5xl rounded'></GiWoodenPegleg>
                                        <p className="mt-2 text-white font-bold text-4xl">Orthopedic</p>
                                        <div className="flex items-center mt-4">
                                            <p className="text-blue-500 hover:text-blue-600">
                                                <BsFillArrowRightCircleFill
                                                    className='text-white hover:text-blue-600 text-3xl'

                                                ></BsFillArrowRightCircleFill>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center rounded-lg">
                        <Link className="relative block w-full h-64 overflow-hidden bg-gray-900 group rounded-lg" to="/">
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/services-02.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-50 rounded-lg" />
                            <div className="relative">
                                <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                    <div className="p-5">
                                        <FaHeartbeat className='text-white text-5xl rounded'></FaHeartbeat>
                                        <p className="mt-2 text-white font-bold text-4xl">Cardiologist</p>
                                        <div className="flex items-center mt-4">
                                            <p className="text-blue-500 hover:text-blue-600">
                                                <BsFillArrowRightCircleFill
                                                    className='text-white hover:text-blue-600 text-3xl'

                                                ></BsFillArrowRightCircleFill>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center rounded-lg">
                        <Link className="relative block w-full h-64 overflow-hidden bg-gray-900 group rounded-lg" to="/">
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/services-03.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-50 rounded-lg" />
                            <div className="relative">
                                <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                    <div className="p-5">
                                        <TbDental className='text-white text-5xl rounded'></TbDental>
                                        <p className="mt-2 text-white font-bold text-4xl">Dentist</p>
                                        <div className="flex items-center mt-4">
                                            <p className="text-blue-500 hover:text-blue-600">
                                                <BsFillArrowRightCircleFill
                                                    className='text-white hover:text-blue-600 text-3xl'
                                                ></BsFillArrowRightCircleFill>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center rounded-lg">
                        <Link className="relative block w-full h-64 overflow-hidden bg-gray-900 group rounded-lg" to="/">
                            <img src="https://doccure-html.dreamguystech.com/template/assets/img/services/services-04.jpg" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-50 rounded-lg" />
                            <div className="relative">
                                <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                    <div className="p-5">
                                        <GiBrain className='text-white text-5xl rounded'></GiBrain>
                                        <p className="mt-2 text-white font-bold text-4xl">Neurology</p>
                                        <div className="flex items-center mt-4">
                                            <p className="text-blue-500 hover:text-blue-600">
                                                <BsFillArrowRightCircleFill
                                                    className='text-white hover:text-blue-600 text-3xl'

                                                ></BsFillArrowRightCircleFill>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;