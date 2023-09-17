import React from 'react';
import '../styles/About.css';
import ReturnButton from '../components/returnButton';

function About() {
    return (
        <div className='about'>
            <h1>A propos</h1>

            <h2>C'est le moment de parler un peu de moi.</h2>

            <p>Suite à un bac professionel en hotellerie restauration, j'ai entrepris une
                licence en etude thêatrale à la sorbonne nouvelle. Après ça, j'ai commencé 
                à travailler dans la vente de cigarette élèctronique. Apres un an en tant que vendeur,
                j'ai été promu responsable de magasin.
                En 2020 comme plein de gens la pandemie et les confinement à repetions m'on permis de 
                prendre du recul et de reflechir à ce que je voulais faire. 
                Et c'est donc en 2023 apres moultes peripetie que je peux enfin entreprendre une formation
                de developpeur web avec Openclassrooms.
                J'ai pu apprendre à intégré des site web depuis une maquette, utiliser react, 
                créer un serveur NodeJs, le css... 
                Enfin j'ai encore enormement de chose à apprendre et j'ai vraiment hate de m'y mettre
                en accomplissant les missions qui me seront confiée.
            </p>
            <ReturnButton />
        </div>
    )
}

export default About;