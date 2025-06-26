import styles from './Footer.module.css'
import ScrollReveal from 'scrollreveal';
import { useEffect, useRef } from 'react';

function Footer(){

    const div_ref = useRef(null)

    useEffect(() =>{
        ScrollReveal().reveal(div_ref.current,{
            origin: 'bottom',
            distance: '20px',
            duration: '1000',
            delay: 400,
            easing: 'ease-in-out',
            reset: false
        })
    }, [])
    return(
        <footer ref={div_ref} className={styles.footer}>
            <span>Desenvolvido por: <a href="https://github.com/euBrunoLima" target='_blanck'>Bruno Lima</a></span>
        </footer>
    )
}

export default Footer;