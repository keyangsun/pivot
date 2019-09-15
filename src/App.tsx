import React from 'react';
import './App.css';
import Nav from './nav';
import Header from './header';
import Table from './table';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Table />
    </div>
  );
}

export default App;
