import styles from './Capivara.module.css';
import ButtonLink from './ButtonLink';
import Button from './Button';
import React, { useState } from 'react';




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
                        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXl1Zjd0ZnI3cHFrb3ljamNwcWtpbXA3ZmZlOHp0ZDMyN2dmMWE5YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1OlrKj845H31ha6Kpy/giphy.gif" alt="Capivara" />
                        <img className={styles.inverted_radius}
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3FkNndleG53M3p6MTVhaGZkdXFtOTI3b3A1dGEzOGw2bTgydnBlayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckrIsK9gWtr0WyUw4n/giphy.gif" alt="Capivara" />  
                        <img className={styles.inverted_radius}
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmtuN2JnM2w4ZjdhbDFqczNkd2NseGN1bGdzM2FhZmhuMmh0bjd4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wWX3KcvkDeKGXVsN0o/giphy.gif" alt="Capivara" />    
                    </div>
                </div>
            }
        </div>


    )
}

export default Capivara;