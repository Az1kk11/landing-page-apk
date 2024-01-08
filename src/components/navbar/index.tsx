import React, { useState } from 'react'
import './style.css'
import logo from '../../image/AddText_08-11-11.00.38.png'
import {motion} from 'framer-motion'

export const Navbar: React.FC = () => {
    const [collor, setCollor] = useState(false)

    const changeCollor = () =>{
        if(window.scrollY >= 90){
            setCollor(true)
        }else{
            setCollor(false)
        }
    }
    window.addEventListener('scroll', changeCollor)
    

    
    return (
        <div className={collor? 'navbar navbar-bg' : 'navbar'}>
            <div className="container">
                <div className="navbar-box">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Orfo-Qareken</p>
                    </div>
                    <motion.button whileTap ={{scale: 0.9}} className='download'>Júklep alıw <i className="ri-download-cloud-fill"></i></motion.button>
                </div>
            </div>
        </div>
    )
}
