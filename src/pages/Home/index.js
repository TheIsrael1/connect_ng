import React,  { useState, useEffect }  from 'react';
import DefaultHeader from '../../components/DefaultHeader';
import Signup from './signup';
import Login from './Login'
import styles from './home.module.css'



const Home = (
    
) => {
   const [toggled, setToggled] = useState(false);

    return (
        <>
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
                    toggled={toggled}
                    />
                    <Login
                    toggle={()=>{setToggled(!toggled)}}
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
