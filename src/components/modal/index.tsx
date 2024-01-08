import React from 'react'
import './style.css'
import videoORQ from './video/OrfoQarekeń_islew_procesi_1.mp4'

type modal = {
    setOpenModal: any
}

export const ModalPlayer: React.FC<modal> = ({ setOpenModal }) => {
    return (
        <div className='player-box'>
            <button className='close' onClick={() => {setOpenModal(false)}} ><i className="ri-close-line"></i></button>
            <video controls >
                <source src={videoORQ} type='video/mp4' />
            </video>
        </div>
    )
}