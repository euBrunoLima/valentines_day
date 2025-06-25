import React from 'react';
import Slider from "react-slick";
import styles from './Carrossel.module.css';

const Carrossel = () => {
    const settings = {
        dots: true,
         arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.carrossel_container}>
            <Slider {...settings}>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                 <div>
                    
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;