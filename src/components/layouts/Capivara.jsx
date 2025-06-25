import styles from './Capivara.module.css';
import Button from './Button';
import { useState } from 'react';
import imagem1 from '../../../public/images/capivara1.gif';
import imagem2 from '../../../public/images/capivara2.gif';
import imagem3 from '../../../public/images/capivara3.gif';
import imagem4 from '../../../public/images/capivara4.gif';





function Capivara() {
    const [showCapivara, setShowCapivara] = useState(false);
    function toggleCapivara() {
    setShowCapivara(!showCapivara);
    }

    return(
        <div>
            <Button text="Clique aqui" onClick={toggleCapivara} />
            {showCapivara && 
                <div className={styles.capivara_container}>
                    <div className={styles.capivara_circle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.capivara_images}>
                        <img className={styles.inverted_radius}
                        src={imagem1} alt="Capivara" />
                        <img className={styles.inverted_radius}
                        src={imagem2} alt="Capivara" />  
                        <img className={styles.inverted_radius}
                        src={imagem3} alt="Capivara" /> 
                        <img className={styles.inverted_radius}
                        src={imagem4} alt="Capivara" />      
                    </div>
                </div>
            }
        </div>


    )
}

export default Capivara;