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
    <meta name="viewport" content="width=device-width, initial-scale= 1.0" />
    <div className="App">
      <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        
          
          
            <ul className=" dispalyflex">
          <Link className="navbar-brand" to={"/"}>Autometic Email Sender</Link>
              <li className="nav-item1">
                <Link className="nav-link1" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item1">
                <Link className="nav-link1" to={"/signup"}>Signup</Link>
              </li>
              <li className="nav-item1">
                <Link className="nav-link1" to={"/send-mail"}>Send mail</Link>
              </li>
              
              <li className="nav-item1" id="float">
                <Link className="nav-link1"  to={"/Login"} onClick={() => window.localStorage.clear()}>Log out</Link>
              </li>
            </ul>
          
        
      </nav>
      </div>

      <Switch>
              <AuthRoute exact path='/' component={Home} />
              <Route  exact path="/Login" component={login} />
              <Route exact path='/signup' component={Signup} />
              <AuthRoute exact path='/send-mail' component={send} />
              
            </Switch>
    </div>
    </Router>
  );
}

export default App;