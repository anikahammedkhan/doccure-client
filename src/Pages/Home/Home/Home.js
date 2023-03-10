import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DoctorSlider from '../DoctorSlider/DoctorSlider';
import Features from '../Features/Features';
import HomeBlog from '../HomeBlog/HomeBlog';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Category></Category>
            <DoctorSlider></DoctorSlider>
            <Features></Features>
            <NewsLetter></NewsLetter>
            <HomeBlog></HomeBlog>
        </div>
    );
};

export default Home;