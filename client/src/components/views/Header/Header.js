import React, {useEffect} from 'react'
import img from './Sections/logo.jpg'
import './Sections/Header.css'

function Header() {
    return (
        <div className="logo">
            <a href="/"><img src={img}/></a>
        </div>
    )
}

export default Header
