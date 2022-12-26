import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';

const DoctorProfile = () => {
    return (
        <div>
            <div className='pl-10 py-3'
                style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
                }}
            >
                <h1 className='text-white'> Home  /  Doctor Profile</h1>
                <h1 className='text-white font-bold text-2xl'>Doctor Profile</h1>
            </div>
            <Banner></Banner>
            <Appointment></Appointment>
        </div>
    );
};

export default DoctorProfile;