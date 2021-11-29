import React from 'react';
import Navbar from './componenta/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './componenta/pages/Home';
import Services from './componenta/pages/Services';
import Products from './componenta/pages/Products';
import SignUp from './componenta/pages/SignUp';

 
function App() {
  return (
    <>

    <Router>
       <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/services" component={Services}/>
         <Route path="/products" component={Products}/>
         <Route path="/sign-up" component={SignUp}/>

       </Switch>
    </Router>
 
  </> 
  );
}

export default App;