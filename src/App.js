import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import './assets/styles/styles.scss';
import FormContact from './components/FormContact';
import Satisfactory from './components/Satisfactory';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/contact' component={FormContact}/>
      <Route path='/contact-satisfactory' component={Satisfactory} />
    </Switch>
  </BrowserRouter>
)

export default App;
