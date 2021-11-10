import React from 'react';
import BannerSlider from '../Components/Home/BannerSlider';
import DisplayProduct from '../Components/Home/DisplayProduct';
import Review from '../Components/Home/Review';
import TrackingBanner from '../Components/Home/TrackingBanner';
import Navigation from '../Components/Shared/Navigation';
import SubBanner from '../Components/Shared/SubBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <BannerSlider />
            <SubBanner />
            <DisplayProduct />
            <Review />
            <TrackingBanner />
        </div>
    );
};

export default Home;