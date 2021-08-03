import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect ,useHistory } from 'react-router';

import Home from "./components/Home.component";
import send from "./components/send.component";
import Signup from "./components/signup.component";
import login from "./components/login.component";
import Logout from "./components/logout.component";

const checkAuth=()=>{
  let key=window.localStorage.getItem('key');
  if(key==null){ 
    return false;
  }
  return true;
}


const AuthRoute =({component:Component,...rest})=>(
  <Route{...rest} render={probs=>(
     checkAuth()?(
    <Component {...probs} />
  ):(
    <Redirect to={"/Login"}/>
  )
  )}/>
)





function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Atometed Email Sender</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/send-mail"}>Send mail</Link>
              </li>
              
              <li className="nav-item float">
                <Link className="nav-link"  to={"/logout"}>Log out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
              <AuthRoute exact path='/' component={Home} />
              <Route  exact path="/Login" component={login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/logout' component={Logout} />
              <AuthRoute exact path='/send-mail' component={send} />
              
            </Switch>
    </div>
    </Router>
  );
}

export default App;