import React from 'react';
import Intro from '../components/Intro';
import ProjectGallery from './ProjectGallery';
import ContactForm from './ContactForm';
import Apropos from './Apropos';
import Competences from './Competences';

function HomeContent(){
    return (
        <div>
            <Apropos />
            <Competences />
            <ProjectGallery />
            <ContactForm />
        </div>
    );
}


export default HomeContent;