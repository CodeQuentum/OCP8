import React, { useState } from 'react';
import '../styles/Login.css';

function Login() {
  // Déclarez les états pour les champs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Gérez les changements dans les champs du formulaire
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Gérez la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuez ici la logique de connexion lorsque le serveur est prêt.
    // Vous pouvez envoyer les données d'authentification au serveur.

    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <div className='login-content'>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className='logItem'>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='logItem'>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
