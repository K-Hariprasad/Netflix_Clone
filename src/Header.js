import React, { useEffect, useState } from 'react'
import netlix_logo from './assets/netflix-logo.png'
import netlix_avatar from './assets/netflix-avatar.png'
import './Header.css'
import { useHistory } from 'react-router'
function Header() {
    const [navbar,setNavbar] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setNavbar(true)
            }
            else{
                setNavbar(false)
            }
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[]);
    let history = useHistory()
    const goHome = () => {
        history.push('/')
    }
    return (
        <div className="header_body">
            <nav className={`navbar ${navbar&&"nav_bg"}`}>
                <img className="nav_logo" src={netlix_logo} onClick={goHome} alt="netflix-logo"/> 
                <img className="nav_avatar" src={netlix_avatar} alt="netflix-avatar"/>
            </nav>
        </div>
    )
}

export default Header
