import React, { Component } from "react";
import axios from "axios";


export default class Home extends Component {



    constructor(props) {
        super(props);
        this.state = {
            mymail: null,
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
        console.log(this.state)
        let mymail = this.state.mymail;
        let mypassword = this.state.mypassword;
        event.preventDefault();
        alert("mail send successfully....");
        axios.post("/sign-up", { mymail, mypassword }).then(() => {

        }).catch((error) => {
            console.log(error);

        })
    }





    render() {
        return (


<>
<div className="outer">
        <div className="middle">
          <div className="inner-home">

          <h3 className="heading">Welcome to Atometed Email Sender App</h3>
      <div className="heading2">
          <button type="submit" to={'/send-mail'} className="btn btn-success" >Send Mail</button>
          {/* <Link type="submit" className="btn btn-success" to={"/send-mail"}>Sign mail</Link> */}
          </div>
          </div>
          <div className="img1">
            <img src="/img/img3.jpg" alt="" className="img1" />
          </div>
        </div>
      </div>




            
            </>
            // <form onSubmit={this.handleSubmit}>

                    //     <h3>Log in</h3>

            //     <div className="form-group">
                        //         <label>Email</label>
            //         <input name="mymail" type="email" id="mymail" className="form-control" placeholder="Enter email" value={this.state.value} onChange={this.handleChange} />
            //     </div>

            //     <div className="form-group">
                        //         <label>Password</label>
            //         <input name="mypassword" type="password" id="mypassword" className="form-control" placeholder="Enter password" value={this.state.value} onChange={this.handleChange} />
            //     </div>

            //     <div className="btn-div">
                        //     <button type="submit" className="btn btn-dark">Sign in</button>
            //     </div>
            // </form>
        );
    }
}