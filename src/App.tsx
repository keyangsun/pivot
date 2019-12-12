import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import List from './components/list';
import Header from './header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/list" component={Header}/>
        <Route path="/" component={List}/>
      </Switch>
    </div>
  );
}

export default App;
