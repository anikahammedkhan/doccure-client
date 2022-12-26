import React from 'react';
import AvailableDoctors from '../AvailableDoctors/AvailableDoctors';
import Banner from '../Banner/Banner';
import CategoryCard from '../CategoryCard/CategoryCard';


const Doctors = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <AvailableDoctors></AvailableDoctors>
        </div>
    );
};

export default Doctors;