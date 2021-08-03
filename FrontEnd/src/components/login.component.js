// import React, { Component } from "react";
import React, { Component, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";



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

        axios.post("/login", { username,mypassword }).then(() => {
            window.localStorage.setItem("key",username);
            event.preventDefault();
            // alert("user Login Successfully")
            console.log("user Login Successfully");
            window.location.href="http://localhost:5000/"

        }).catch((error) => {
            event.preventDefault();
            console.log(error);
            alert("Please Enter correct Username or Password")
            console.log("react err0r");

        })
    }


    render() {

        return (<>

            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <form onSubmit={this.handleSubmit}>

                            <h3>Login</h3>
                            <div className="form-group">
                                <label>UserName</label>
                                <input name="username" type="text" id="username" className="form-control" placeholder="Enter UserName" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="mypassword" type="password" id="mypassword" className="form-control" placeholder="Enter your Email password" value={this.state.value} onChange={this.handleChange} />
                            </div>

                            <div className="btn-div">
                                <button type="submit" className="btn btn-dark" >Login</button>
                            </div>
                          
                                
                
            </form>
                </div>

                <div className="img1">
                    <img src="/img/img1.jpg" alt="" className="img1" />
                </div>
            </div>
        </div>

</>


        );
    }
}