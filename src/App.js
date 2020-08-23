import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/'>
            <Header/>
            <Section/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
