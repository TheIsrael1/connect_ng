import React from 'react'
import DefaultHeader from '../../components/DefaultHeader';
import styles from './about.module.css'

const About = () => {
    return (
        <>
        <DefaultHeader />
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`} >
                <div className={`${styles.row}`}>
                    <div className={`${styles.column1}`}>
                    <div className={`${styles.header}`}>
                    About Us
                    </div>
                    <div className={`${styles.subText}`}>
                    Aliqua dolor sunt anim id sit et consequat ipsum cupidatat. Ad enim enim labore eu ut est occaecat sunt exercitation. Aute nostrud duis ipsum occaecat quis voluptate fugiat non sunt ad qui commodo eiusmod. Consectetur officia tempor amet ipsum fugiat minim irure anim anim aliquip non aute. Commodo esse irure mollit proident. Non reprehenderit mollit est aliqua aute qui enim officia do consequat nisi dolor. Sint occaecat cupidatat do enim anim aute cillum et non.
                    </div>
                    </div>
                    <div className={`${styles.column2}`}>
                    <div className={`${styles.imgWrap}`}>
                    <img className={`${styles.img}`} src="https://images.pexels.com/photos/5973962/pexels-photo-5973962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="about_img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
