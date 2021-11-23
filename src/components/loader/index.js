import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.centered}`}>
                <div className={`${styles.blob1}`}>
                </div>
                <div className={`${styles.blob2}`}>
                </div>
            </div>
        </div>
    )
}

export default Loader
