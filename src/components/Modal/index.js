import React from 'react'
import styles from './modal.module.css'

const Modal = () => {
    return (

        <div className={`${styles.modalContainer}`}>

        <div className={`${styles.modalOverlay}`}>
        <div className={`${styles.modal}`}>
            
            <div className={`${styles.modalContent}`}>
            <div className={`${styles.logo}`}>
                <span className={`${styles.logoSpan1}`}>
                    connect
                </span>
                <span className={`${styles.logoSpan2}`}>
                    NG
                </span>
            </div>
            <div className={`${styles.optionButtons}`}>
                <button className={`${styles.option}`}>
                    List a Service
                </button>
                <button className={`${styles.option}`}>
                    Find a Service
                </button>
            </div>
            </div>
            
        </div>
        </div>

        </div>
    )
}

export default Modal
