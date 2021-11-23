import React from 'react'
import styles from './modal.module.css'
import { Link } from 'react-router-dom'

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
                <Link to="/sellerdashboard" className={`${styles.option}`}>
                    List a Service
                </Link>
                <Link to="/market" className={`${styles.option}`}>
                    Find a Service
                </Link>
            </div>
            </div>
            
        </div>
        </div>

        </div>
    )
}

export default Modal
