import React from 'react';
import logo from '../assets/logo-header.jpg';
import '../styles/Header.css';

function Header() {
    const scrollToSection = (sectionId) => {
        const targetElement = document.getElementById(sectionId);
    
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };
    return (
        <header>
            <div className='logoContainer'>
                    <img src={logo} alt='Logo QDW'/>
            </div>
            <nav>
                <ul>
                    <li><button className='headerButton' onClick={() => scrollToSection('a-propos')}>A propos</button></li>
                    <li><button className='headerButton' onClick={() => scrollToSection('mes-competences')}>Compétences</button></li>
                    <li><button className='headerButton' onClick={() => scrollToSection('mes-projets')}>Mes projets</button></li>
                    <li><button className='headerButton' onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
