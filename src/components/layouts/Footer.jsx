import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <span>Desenvolvido por: <a href="https://github.com/euBrunoLima" target='_blanck'>Bruno Lima</a></span>
        </footer>
    )
}

export default Footer;