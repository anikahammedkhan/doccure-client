import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';

const HomeBlog = () => {
    const blogData = [
        {
            id: 1,
            title: "How to handle patient body in MRI?",
            img: "https://doccure-html.dreamguystech.com/template/assets/img/blog/blog-11.jpg",
            details: "Mri is a medical imaging technique used in radiology to visualize internal structures of the body in both health and disease states. It is based on the application of magnetic fields and radio waves.",
            date: "12 Jan 2021",
            tag: "Health Care",
        },
        {
            id: 2,
            title: "How to handle patient body in MRI?",
            img: "https://doccure-html.dreamguystech.com/template/assets/img/blog/blog-12.jpg",
            details: "Mri is a medical imaging technique used in radiology to visualize internal structures of the body in both health and disease states. It is based on the application of magnetic fields and radio waves.",
            date: "12 Jan 2021",
            tag: "Health Care",
        },
        {
            id: 3,
            title: "How to handle patient body in MRI?",
            img: "https://doccure-html.dreamguystech.com/template/assets/img/blog/blog-13.jpg",
            details: "Mri is a medical imaging technique used in radiology to visualize internal structures of the body in both health and disease states. It is based on the application of magnetic fields and radio waves.",
            date: "12 Jan 2021",
            tag: "Health Care",
        },
        {
            id: 4,
            title: "How to handle patient body in MRI?",
            img: "https://doccure-html.dreamguystech.com/template/assets/img/blog/blog-14.jpg",
            details: "Mri is a medical imaging technique used in radiology to visualize internal structures of the body in both health and disease states. It is based on the application of magnetic fields and radio waves.",
            date: "12 Jan 2021",
            tag: "Health Care",
        }
    ]
    return (
        <div className='my-10'>
            <h1 className='text-blue-600 font-bold text-5xl text-center'>Let’s See Our Latest News</h1>
            <p className='font-semibold text-lg text-center text-gray-500'>
                Your frequently asked questions answered by our experts
            </p>
            <div className="grid w-full grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:w-3/4">
                {
                    blogData.map(blog => (
                        <div className="overflow-hidden bg-white rounded shadow" key={blog.id}>
                            <div className="p-5">
                                <div className="relative">
                                    <Link to="/" title="" className="block aspect-w-4 aspect-h-3">
                                        <img className="object-cover w-full h-[220px]" src={blog.img} alt="" />
                                    </Link>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {blog.tag}</span>
                                    </div>
                                </div>
                                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {blog.date}</span>
                                <p className="mt-5 text-2xl font-semibold">
                                    <Link href="#" title="" className="text-black"> {blog.title}</Link>
                                </p>
                                <p className="mt-4 text-base text-gray-600">{blog.details}</p>
                                <Link to="/" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    Continue Reading
                                    <BiRightArrowCircle className='ml-2' />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default HomeBlog;