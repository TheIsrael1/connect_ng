import React from 'react'
import styles from './sellerDashboard.module.css'
import DashboardHeader from '../../components/DashboardHeader'
import { Link } from 'react-router-dom'

const SellerDashboard = () => {

    const name = localStorage.getItem("first_name")
    return (
        <>
        <DashboardHeader />
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`} >
                <div className={`${styles.row}`}>
                    <div className={`${styles.column}`}>
                    <div className={`${styles.header}`}>
                    Hi {name},
                    </div>
                    <div className={`${styles.subText}`}>
                    Trying to Sell a Service?
                    </div>
                    <Link to="/listingflow" className={`${styles.btn}`}>
                    LIST A SERVICE
                    </Link>
                    </div>
                    <div className={`${styles.column}`}>
                    <div className={`${styles.imgWrap}`}>
                    <img className={`${styles.img}`} src="https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SellerDashboard
