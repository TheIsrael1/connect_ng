import React,  { useState, useEffect }  from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import Signup from './signup';
import Login from './Login'
import Modal from '../../components/Modal';
import styles from './home.module.css'
import Loader from '../../components/loader';



const Home = (
    
) => {
   const [toggled, setToggled] = useState(false);
   const [showDialog, setShowDialog] = useState(false)
   const [showLoader, setShowLoader] = useState(false)

    return (
        <>
        {showLoader && <Loader />}
        {showDialog && <Modal />}
        <DefaultHeader/>
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`} >
                <div className={`${styles.row}`}>
                    <div className={`${styles.column}`}>
                    <div className={`${styles.header}`}>
                    Say bye to Physical  Outlets!
                    </div>
                    <div className={`${styles.subText}`}>
                    List Your Services on connectNG
                    </div>
                    <a href="/" className={`${styles.btn}`}>
                    GETTING STARTED
                    </a>
                    </div>
                    <div className={`${styles.column}`}>
                    <Signup
                    toggle={()=>{setToggled(!toggled)}}
                    showDialog={()=>{setShowDialog(!showDialog)}}
                    showLoader={()=>{setShowLoader(!showLoader)}}
                    toggled={toggled}
                    />
                    <Login
                    toggle={()=>{setToggled(!toggled)}}
                    showDialog={()=>{setShowDialog(!showDialog)}}
                    showLoader={()=>{setShowLoader(!showLoader)}}
                    toggled={toggled}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
