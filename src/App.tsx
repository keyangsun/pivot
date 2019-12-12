import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import List from './components/list';
import Header from './header';
import PivotList from './components/pivot_list/pivot_list';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/list" component={Header}/>
        <Route exact path="/pivot-list" component={PivotList}/>
        <Route path="/" component={List}/>
      </Switch>
    </div>
  );
}

export default App;
