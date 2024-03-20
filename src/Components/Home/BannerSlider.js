import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import banner1 from '../../images/b1.png';
import banner2 from '../../images/b2.png';
import banner3 from '../../images/b3.webp';

const slideList = [banner1, banner2, banner3];

const BannerSlider = () => {
    return (
        <Slider autoplay={1000} className="slider">
            {slideList.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item}') no-repeat center center`, backgroundSize: 'cover'}}
                />
            ))}
        </Slider>
    );
};

export default BannerSlider;