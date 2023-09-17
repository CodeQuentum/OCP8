// App.js
import React from 'react';
import Header from './components/Header'; 
import RoutesComponent from './routes';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <Header /> 
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
