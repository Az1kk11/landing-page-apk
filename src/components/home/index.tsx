import React, { useState } from 'react'
import './style.css'
import png from '../../image/orfo (2).png'
import { motion } from 'framer-motion'
import { ModalPlayer } from '../modal'

export const Home: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <div className='home'>

            <div className="container">
                <div className="hero-text">
                    <div className="text">
                        <h3>Orfo Qarakeń qosımshası</h3>
                        <p>Orfo Qarakeń programmasınıń aktuallıǵı sonda, ol qaraqalpaq tilinde jazılǵan tekstti orfografiyalıq jaqtan tekseriw hámde durıslaw imkániyatın beretuǵın jalǵız qosımsha.</p>
                        <h4>Sonıń menen birge qosımsha tómendegi múmkinshiliklerge iye:</h4>
                        <ul>
                            <li>Bir waqıttıń ózinde sózlerdegi orfografiyalıq qátelerdi tawıp olarǵa tuwrı variantlardı kórsetedi.</li>
                            <li>Microsoft Office Word qosımshasınıń ishinen júklep alıw múmkinshiligi iye.</li>
                            <li>Kirill hám latın álipbelerine konvertatsiya qılıw.</li>
                            <li>Qaraqalpaq tilindegi klaviaturanı ornatıw.</li>
                            <li>Ízlengen sózlerdiń mánisin tabıw.</li>
                        </ul>
                        <div className="btn-group">
                            <motion.a
                                whileTap={{ scale: 0.9 }}
                                className='text-download'
                                href=''
                                download
                            >
                                Júklep alıw <i className="ri-download-cloud-fill"></i>
                            </motion.a>
                            <motion.button whileTap={{ scale: 0.9 }} className="glightbox play-btn mb-4"
                                onClick={() => { setOpenModal(true) }}
                            >
                            </motion.button>
                        </div>
                    </div>
                    <div className="png">
                        <img src={png} alt="" className='animated' />
                    </div>
                </div>

                {openModal && <ModalPlayer setOpenModal={setOpenModal} />}

            </div>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>

        </div>
    )
}