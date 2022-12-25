import React from 'react';
import { FaBed, FaArrowRight } from 'react-icons/fa';
import { GiMedicines, GiChemicalDrop } from 'react-icons/gi';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';


const Services = () => {
    return (
        <div className='pt-10'>
            <h1 className='text-center font-bold text-5xl text-blue-600'>Our Services</h1>
            <div className='grid grid-cols-5 mt-2'>
                <div className='col-span-2'>
                    <img src="https://doccure-html.dreamguystech.com/template/assets/img/appoinment-img.png" alt="" className='inline-block mr-1' />
                </div>
                <div className='col-span-3 grid grid-cols-3 gap-4 p-5'>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md shadow-slate-200 p-5 h-fit hover:shadow-xl hover:text-blue-600">
                        <div className='text-5xl text-orange-500 bg-orange-200 inline-block p-4 rounded-md mt-2'>
                            <FaBed></FaBed>
                        </div>
                        <div>
                            <h3 className="mb-4 text-3xl font-semibold ">Visit a Doctor</h3>
                            <p className='text-slate-700'>
                                We hire the best specialists to deliver top-notch diagnostic services for you.
                            </p>
                            <button className='btn btn-outline hover:btn-info rounded-full mt-2'>
                                Learn More <FaArrowRight className='ml-2'></FaArrowRight>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md shadow-slate-200 p-5 h-fit hover:shadow-xl hover:text-blue-600">
                        <div className='text-5xl text-green-500 bg-green-200 inline-block p-4 rounded-md mt-2'>
                            <GiMedicines></GiMedicines>
                        </div>
                        <div>
                            <h3 className="mb-4 text-3xl font-semibold ">Find a Pharmacy</h3>
                            <p className='text-slate-700'>
                                We provide a wide range of medical services, so everyone have the opportunity.
                            </p>
                            <button className='btn btn-outline hover:btn-info rounded-full mt-2'>
                                Learn More <FaArrowRight className='ml-2'></FaArrowRight>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md shadow-slate-200 p-5 h-fit hover:shadow-xl hover:text-blue-600">
                        <div className='text-5xl text-red-500 bg-red-200 inline-block p-4 rounded-md mt-2'>
                            <GiChemicalDrop></GiChemicalDrop>
                        </div>
                        <div>
                            <h3 className="mb-4 text-3xl font-semibold ">Find a Lab</h3>
                            <p className='text-slate-700'>
                                We use the first-class medical equipment for timely diagnostics of various diseases.
                            </p>
                            <button className='btn btn-outline hover:btn-info rounded-full mt-2'>
                                Learn More <FaArrowRight className='ml-2'></FaArrowRight>
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md shadow-slate-200 p-5 h-fit hover:shadow-xl hover:text-blue-600">
                        <div className='text-5xl text-blue-500 bg-blue-200 inline-block p-4 rounded-md mt-2'>
                            <AiOutlineSchedule></AiOutlineSchedule>
                        </div>
                        <div>
                            <h3 className="mb-4 text-3xl font-semibold ">Schedule</h3>
                            <div>
                                <p className='text-slate-700'>
                                    <span className='font-bold'>Monday - Friday</span> 8:00 AM - 9:00 PM
                                </p>
                                <p className='text-slate-700'>
                                    <span className='font-bold'>Saturday</span> 9:00 AM - 17:00 PM
                                </p>
                                <p className='text-slate-700'>
                                    <span className='font-bold'>Sunday</span> 9:00 AM - 15:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 bg-blue-500 h-fit p-10 text-white font-semibold rounded-xl'>
                        <h1 className='text-5xl mb-3'>REQUEST AN APPOINTMENT</h1>
                        <div className='flex gap-5'>
                            <FiPhoneCall className='text-[105px]'></FiPhoneCall>
                            <div>
                                <p className='text-2xl'>Call Us Now</p>
                                <p className='text-2xl'>+1 315 369 5943</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;