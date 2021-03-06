import React, { Component } from "react";
import axios from "axios";


export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            myEmail: null,
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
        // console.log(this.state)
        let username = this.state.username;
        let myEmail = this.state.myEmail;
        let mypassword = this.state.mypassword;

        event.preventDefault();
        axios.post("/save-to-db", { username,myEmail,mypassword }).then(() => {
            alert("Signup sucessfully,please Login")
            console.log("user crated");
            window.location.href="https://automatic-email-sender.herokuapp.com/login"
            
        }).catch((error) => {
            event.preventDefault();
            console.log(error);
            alert("user not created...Email or Username is Allready registerd")
            console.log("react err0r");

        })
    }


    render() {

        return (<>

<div className="row mx-0 text-start">
                    <div className="inner col-10 col-md-4 " id="inner-right" style={{marginTop:"150px"}}>
                        <form onSubmit={this.handleSubmit} className="col-10 mx-auto">

                            <h3 className="text-center">Signup</h3>
                            <div className="form-group">
                                <label>UserName</label>
                                <input name="username" type="text" id="username" className="form-control" placeholder="Enter UserName" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="myEmail" type="email" id="myEmail" className="form-control" placeholder="Enter your email" value={this.state.value} onChange={this.handleChange} />

                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="mypassword" type="password" id="mypassword" className="form-control" placeholder="Enter your Email password" value={this.state.value} onChange={this.handleChange} />
                                </div>

                                <div className="btn-div">
                                    <button type="submit" className="btn btn-dark" >Login</button>
                                </div>
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