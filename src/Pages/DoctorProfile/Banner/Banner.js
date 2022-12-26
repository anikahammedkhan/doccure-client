import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { BiLike } from 'react-icons/bi';
import { TbDental, TbMessageCircle2 } from 'react-icons/tb';
import { BsBookmarkHeart, BsTelephoneOutbound, BsCameraVideoFill } from 'react-icons/bs';
import { TiMessage } from 'react-icons/ti';

const Banner = () => {
    return (
        <div className='w-3/4 mx-auto border p-5 m-5 flex justify-between'>
            <div className='flex gap-4'>
                <div>
                    <img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/doctor-thumb-02.jpg" alt="" className='w-[200px]' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Dr. Darren Elder</h1>
                    <p>BDS, MDS - Oral & Maxillofacial Surgery</p>
                    <p><TbDental className='inline text-sky-400'></TbDental> Dentist</p>
                    <div className='flex text-yellow-500 items-center gap-1 text-lg'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <p className='text-black'>(36)</p>
                    </div>
                    <ImLocation className='inline' /> Newyork, USA <br />
                    <div className="badge badge-info badge-outline">Dental Fillings</div>
                    <div className="badge badge-info badge-outline ml-4">Teeth Whitening</div>
                </div>
            </div>
            <div>
                <p><BiLike className='inline' />  99%</p>
                <p><TbMessageCircle2 className='inline' />  35 Feedback</p>
                <p><ImLocation className='inline' />  Newyork, USA</p>
                <p><FaRegMoneyBillAlt className='inline' />  $100 per hour</p>
                <div className='grid grid-cols-4 gap-2'>
                    <div>
                        <img src="https://doccure-html.dreamguystech.com/template/assets/img/features/feature-01.jpg" alt="" className='rounded w-[40px]' />
                    </div>
                    <div>
                        <img src="https://doccure-html.dreamguystech.com/template/assets/img/features/feature-02.jpg" alt="" className='rounded w-[40px]' />
                    </div>
                    <div>
                        <img src="https://doccure-html.dreamguystech.com/template/assets/img/features/feature-03.jpg" alt="" className='rounded w-[40px]' />
                    </div>
                    <div>
                        <img src="https://doccure-html.dreamguystech.com/template/assets/img/features/feature-04.jpg" alt="" className='rounded w-[40px]' />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-2 my-4'>
                    <div className='text-2xl border p-2 border-slate-800 hover:text-red-500'>
                        <BsBookmarkHeart />
                    </div>
                    <div className='text-2xl border p-2 border-slate-800 hover:text-blue-500'>
                        <TiMessage />
                    </div>
                    <div className='text-2xl border p-2 border-slate-800 hover:text-green-500'>
                        <BsTelephoneOutbound />
                    </div>
                    <div className='text-2xl border p-2 border-slate-800 hover:text-red-500'>
                        <BsCameraVideoFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;