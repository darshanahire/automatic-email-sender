import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

import send from "./send.component";
<Route exact path='/send-mail' component={send} />
export default class Home extends Component {

    render() {
        return (
            <>
                    <div className="row mx-0">
                        <div className="col-12 col-md-6 my-md-auto my-5">

                            <h3 className="heading" style={{marginTop:"170px"}}>Welcome to Autometic Email Sender App</h3>
                            <div className="heading2">
                                <Link type="submit" className="btn btn-success"  to={'/send-mail'}>Send Mail</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 my-5">
                            <img src="/img/img3.jpg" alt="" className="img1" />
                        </div>
                    </div>
       
                </>
        );
    }
}