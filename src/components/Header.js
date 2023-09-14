import React from 'react';
import logo from '../assets/logo-header.jpg';
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <div className='logoContainer'>
                <img src={logo} alt='Logo QDW'/>
            </div>
            <nav>
                <ul>
                    <li>A propos</li>
                    <li>Mes projets</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;