import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import banner1 from '../../images/b1.jpeg';
import banner2 from '../../images/b2.jpeg';
import banner3 from '../../images/b3.jpeg';
import banner4 from '../../images/b4.jpeg';

const slideList = [banner1, banner2, banner3, banner4];

const BannerSlider = () => {
    return (
        <Slider autoplay={1000} className="slider">
            {slideList.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item}') no-repeat center center`, backgroundSize: 'auto 100%'}}
                />
            ))}
        </Slider>
    );
};

export default BannerSlider;