import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DoctorSlider from '../DoctorSlider/DoctorSlider';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Category></Category>
            <DoctorSlider></DoctorSlider>
        </div>
    );
};

export default Home;