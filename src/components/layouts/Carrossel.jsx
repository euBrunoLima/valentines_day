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
            <Slider className={styles.slider} {...settings}>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/83/1c/f4/831cf4ce9f3219fa33d92b01f7130ec3.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/b4/98/40/b4984009c5ede76b9fc7a105ccdcaafc.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/01/77/67/0177675f0669045e06dc23df8c8d1692.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/71/ab/b9/71abb9f3d0d694afc6402c2b0114d812.jpg" alt="" />
                </div>
            </Slider>
        </div>        
        
    );
}

export default Carrossel;