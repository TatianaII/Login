import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './Registro';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navegation from './Navegation';
import Editar from './Editar';


const App = () => (
   <Router>
     <React.Fragment>
         <Switch>
         <Route exact path="/Login" component={Login}/>
         <Route exact path="/Registro" component={Registro}/>
         <Route exact path="/" component ={Home}/>
         <Route exact path="/Navegation" component = {Navegation}/>
         <Route exact path="/Editar" component = {Editar}/>

         </Switch>
     </React.Fragment>
   </Router>

);

export default App;