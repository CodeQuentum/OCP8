// App.js
import React from 'react';
import Header from './components/Header'; 
import RoutesComponent from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
