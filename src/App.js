import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import About from './Pages/Home/About/About'
import Contact from './Pages/Home/Contact/Contact'
import Portfolio from './Pages/Home/Portfolio/Portfolio'
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="App">
       <Router>
      <Navigation></Navigation>
          <Switch>
            <Route  path="/">
            <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/about">
             <About></About>

            </Route>
            <Route  path="/contact">
            <Contact></Contact>
            </Route>
            <Route  path="/portfolio">
           <Portfolio></Portfolio>
            </Route>
            

            {/* <Route exact path="*">
              <NotFound></NotFound>
            </Route> */}
          </Switch>
          
          <Footer></Footer>

        </Router>
       
    </div>
  );
}

export default App;
