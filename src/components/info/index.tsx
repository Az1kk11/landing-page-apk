import React from 'react'
import './style.css'

export const Info: React.FC = () => {
    return (
        <div className='container'>
            <div className="info">
                <h3>Baylanıs ushın</h3>
                <ul>
                    <li>
                        <i className="ri-phone-fill"></i>
                        +998912555260
                    </li>
                    <li>
                        <i className="ri-mail-line"></i>
                        qogambaev001@gmail.com
                    </li>
                    <li>
                        <i className="ri-map-pin-2-fill"></i>
                        Qaraqalpaqstan Respublikası, Nókis qalası
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright © 2023 Orfo-qareken.uz</p>
            </div>
        </div>
    )
}