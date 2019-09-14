import React from 'react';
import './App.css';
import Nav from './nav';
import Header from './header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      
    </div>
  );
}

export default App;
