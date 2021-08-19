// TODO: add findAndModify in connection set
"use strict";
// this module is used to transfer the otp mail
require("dotenv").config();
const mailer = require("nodemailer");
const mongoose = require("mongoose");
// getting schema for user
const User_OTP = require("../models/otpSchema");

const User = require("../models/userSchema");


const SendMail = (username, friendsEmail, d) => {
    return new Promise
        (function (resolve, reject) {
            User.findOne({ username })
                .then(async (res) => {

                    let dbuser = res.email;
                    let dbpassword = res.password
                    // console.log(dbuser,dbpassword);
                    
                    const transport = mailer.createTransport(
                        {
                            service: "gmail",
                            auth: {
                                user: dbuser ,
                                pass: dbpassword
                            }
                        }
                    )
                    const body = {
                        from: dbuser,
                        to: friendsEmail,
                        subject: "Hello World!",
                        text: d
                    }
                    transport.sendMail(body, async function (err, data) {
                        if (err) {
                            console.log("error occured in transport sendMail");
                            console.log(err);
                            reject();
                            console.log(err.errresponseCode)
                        }
                        else {
                            // console.log(data);
                                // console.log("Mail Sent sucessfully........");
                                resolve();
                        }
                    })

                })
                .catch((err) => {
                    console.log(err);
                    reject();
                })
            })
}
module.exports = SendMail;