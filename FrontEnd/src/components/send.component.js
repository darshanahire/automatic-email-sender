// import React, { Component } from "react";
import React, { Component } from "react";
import axios from "axios";

export default class send extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      friendsEmail: null,
      body: null,
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
    let friendsEmail = this.state.friendsEmail;
    let body = this.state.body;
    event.preventDefault();

    axios.post("/esend", { username, friendsEmail, body }).then(() => {
      alert("Mail Sends successfully...")
      window.location.reload();
      console.log("mail send successfully from react....");
    }).catch((error) => {
      console.log(error);
      alert("Sorry,Mail not send");
    })
  }
  render() {
    return (<>
      <div className="outer">
        <div className="middle">
          <div className="inner" id="inner-right">
            <form >
              <h3>Send Mail</h3>
              <div className="form-group">
                <label>From</label>
                <input name="username" type="text" id="username" className="form-control" placeholder="Enter UserName" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>TO</label>
                <input name="friendsEmail" type="email" id="friendsEmail" className="form-control" placeholder="Enter friends email" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label>Compose Email</label>
                <textarea name="body" type="text" id="body" className="form-control" rows="3" placeholder="Say something" value={this.state.value} onChange={this.handleChange}></textarea>
              </div>
              <div className="btn-div">
                <button onClick={this.handleSubmit} className="btn btn-dark" >Send Mail</button>
              </div>
            </form>
          </div>
          <div className="img1" id="inner-left">
            <img src="/img/img2.jpg" alt="" className="img1" />
          </div>
        </div>
      </div>
      <div id="note">*Note -By Default Gmail not allow to Third Party Apps to Send Mail, So Please allow it to Send Mails.</div>
    </>
    );
  }
}