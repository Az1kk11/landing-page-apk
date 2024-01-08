import React from 'react'
import { Info, Navbar, Home } from './components'
import './App.css'

const App:React.FC = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Info />
        </div>
    )
}

export default App