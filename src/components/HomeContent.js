import React from 'react';
import Intro from '../components/Intro';
import ProjectGallery from './ProjectGallery';
import ContactForm from './ContactForm';

function HomeContent(){
    return (
        <div>
            <Intro />
            <ProjectGallery />
            <ContactForm />
        </div>
    );
}

export default HomeContent;