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
                    <li><a href="#a-propos">A propos</a></li>
                    <li><a href="#mes-competences">Competences</a></li>
                    <li><a href="#mes-projets">Mes projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
