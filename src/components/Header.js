import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link depuis react-router-dom
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
                    <li><Link to="/a-propos">A propos</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
