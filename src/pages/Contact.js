import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div className='ContactPage'>
         <h1>Contactez moi !</h1>
         <p>Vous retrouverez ici le même formulaire que sur la page d'accueil ! 
            Les joies des commposants react ! Enfin si vous voulez que je vous recontacte,
            envoyer moi un message via se formulaire. Ou l'autre !
         </p>
         <ContactForm />
        </div>
    )
}

export default Contact;
