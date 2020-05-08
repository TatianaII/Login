import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './Registro';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';

const App = () => (
  <Router>
    <React.Fragment>
        <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Registro" component={Registro}/>
        <Route exact path="/" component ={Home}/>
        </Switch>
    </React.Fragment>
  </Router>
  
);

export default App;