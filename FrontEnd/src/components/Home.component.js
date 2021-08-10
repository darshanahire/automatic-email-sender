import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

import send from "./send.component";
<Route exact path='/send-mail' component={send} />
export default class Home extends Component {

    render() {
        return (
            <>
                <div className="outer">
                    <div className="middle">
                        <div className="inner-home" id="inner-right">

                            <h3 className="heading">Welcome to Autometic Email Sender App</h3>
                            <div className="heading2">
                                <Link type="submit" className="btn btn-success"  to={'/send-mail'}>Send Mail</Link>
                            </div>
                        </div>
                        <div className="img1" id="inner-left">
                            <img src="/img/img3.jpg" alt="" className="img1" />
                        </div>
                    </div>
                </div>
                </>
        );
    }
}