import Slider from "react-slick";
import styles from './Carrossel.module.css';
import anima from '../../styles/animations.module.css';
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
        <div className={`${styles.carrossel_container} ${anima.fadeIn}`}>
            <Slider className={styles.slider} {...settings}>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/90/7a/6a/907a6acd620fd86565cb68b4191cf34a.jpg" alt="" />
                </div>
                <div className={styles.carrossel_img}>
                    <img src="https://i.pinimg.com/736x/11/0d/b0/110db086a88ab4ae2963514a9aa7b2e9.jpg"alt="" />
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