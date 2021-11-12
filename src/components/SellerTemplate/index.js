import React from 'react'
import styles from './sellerTemplate.module.css'


const SellerTemplate = () => {
    return (
        <div className={`${styles.modalContainer}`}>

        <div className={`${styles.modalOverlay}`}>
        <div className={`${styles.modal}`}>
        <div className={`${styles.imgCon}`}>
            <img className={`${styles.img}`} src="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img" />
        </div>
        <div >
            <form className={`${styles.content}`}>
            <div className={`${styles.left}`}>
                <input placeholder="enter price" className={`${styles.price}`} >

                </input>
            </div>
            <div className={`${styles.right}`}>
                <input className={`${styles.input}`} />
                <input className={`${styles.input}`} />
                <textarea className={`${styles.textarea}`} />              
                <div className={`${styles.btnContainer}`}>
                <button className={`${styles.btn}`}>
                    POST    
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
        </div>

        </div>
    )
}

export default SellerTemplate
