import React from 'react';
import Intro from '../components/Intro';
import ProjectGallery from './ProjectGallery';
import ContactForm from './ContactForm';

function HomeContent(){
    return (
        <div>
            <Intro />
            <ProjectGallery />
            <h2>Contactez-moi</h2>
      <p>Si vous le souhaitez, vous pouvez remplir
        ce formulaire de contact.
        Je vous repondrais dans les plus bref delais.
      </p>
            <ContactForm />
        </div>
    );
}


export default HomeContent;