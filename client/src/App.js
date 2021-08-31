import React from "react";
import NavBar from "./components/Navbar.js";
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Route exact path = '/'>  {/*using exact ensures that when the url will only contain '/' then only this page will be rendered*/}
      <Home/>
    </Route>
    <Route path = '/profile'>
      <Profile/>
    </Route>
    <Route path = '/signin'>
      <Signin/>
    </Route>
    <Route path = '/signup'>
      <Signup/>
    </Route>
    </BrowserRouter>
  );
}

export default App;