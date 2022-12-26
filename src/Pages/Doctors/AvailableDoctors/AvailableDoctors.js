import React from 'react';
import { Link } from 'react-router-dom';
import "./AvailableDoctors.css";
import { ImLocation } from "react-icons/im";
import { BsStopwatch } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const AvailableDoctors = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-blue-600 font-bold text-4xl'>Available Doctors : 200</h1>
            <div className='w-3/5 mx-auto my-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <article className="card">
                        <header className="card__thumb">
                            <Link to="/"><img src="https://doccure-html.dreamguystech.com/template/assets/img/doctors/doctor-01.jpg" alt='' /></Link>
                        </header>
                        <date className="card__date">
                            <span className="card__date__day">4.9</span>
                            <br />
                            <span className="card__date__month">Rat</span>
                        </date>
                        <div className="card__body">
                            <div className="card__category"><Link to="/">Cardiology</Link></div>
                            <h2 className="card__title"><Link to="/">Dr. Ruby Perrin</Link></h2>
                            <div className="card__subtitle">MDS - Periodontology and Oral Implantology, BDS</div>
                            <p className="card__description text-lg">
                                <ImLocation className='inline'></ImLocation> Florida, USA <br />
                                <BsStopwatch className='inline'></BsStopwatch> Available on Fri, 22 Mar <br />
                                <FaRegMoneyBillAlt className='inline'></FaRegMoneyBillAlt> $300 - $1000
                            </p>
                        </div>
                        <footer className="card__footer">
                            <Link to="/" className="btn btn-sm btn-info text-white">View Profile</Link>
                            <Link to="/" className="btn btn-sm btn-success text-white ml-4">Book Now</Link>
                        </footer>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default AvailableDoctors;