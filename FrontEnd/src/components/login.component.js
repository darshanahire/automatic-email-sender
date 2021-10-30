// import React, { Component } from "react";
import React, { Component } from "react";

import axios from "axios";
import alertBox from "./alertBox";
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            mypassword: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
        const target = event.target;
        var name = target.name;
        const value = target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        // alert("User login")
        // console.log(this.state)
        let username = this.state.username;
        let mypassword = this.state.mypassword;

        event.preventDefault();
        axios.post("/Login", { username, mypassword }).then(() => {
            window.localStorage.setItem("key", username);
            alert("user Login Successfully")
            // <alertBox msg="user Login Successfully"/>
            console.log("user Login Successfully");
            window.location.href = "https://automatic-email-sender.herokuapp.com/"

        }).catch((error) => {
            // <alertBox msg="Please Enter correct Username or Password"/>;
            event.preventDefault();
            console.log(error);
            alert("Please Enter correct Username or Password")
            console.log("react err0r");

        })
    }


    render() {

        return (<>


                <div className="row mx-0 text-start">
                    <div className="inner col-10 col-md-4 " id="inner-right" style={{marginTop:"150px"}}>
                        <form onSubmit={this.handleSubmit} className="col-10 mx-auto">

                            <h3 className="text-center">Login</h3>
                            <div className="form-group">
                                <label className="mt-2 mb-1">UserName</label>
                                <input name="username" type="text" id="username" className="form-control" placeholder="Enter UserName" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="mt-2 mb-1">Password</label>
                                <input name="mypassword" type="password" id="mypassword" className="form-control" placeholder="Enter your Email password" value={this.state.value} onChange={this.handleChange} />
                            </div>

                            <div className="btn-div ">
                                <button type="submit" className="btn btn-dark" >Login</button>
                            </div>
                        </form>
                    </div>

                    <div className="img1 col-12 col-md-6 my-5" id="inner-left">
                        <img src="/img/img1.jpg" alt="" className="img1" />
                    </div>
                </div>

        </>


        );
    }
}