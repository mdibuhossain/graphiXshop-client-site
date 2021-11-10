import React from 'react';
import BannerSlider from '../Components/Home/BannerSlider';
import DisplayProduct from '../Components/Home/DisplayProduct';
import Navigation from '../Components/Shared/Navigation';
import SubBanner from '../Components/Shared/SubBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerSlider />
            <SubBanner />
            <DisplayProduct />
        </div>
    );
};

export default Home;