// TODO: add findAndModify in connection set
"use strict";
// this module is used to transfer the otp mail
require("dotenv").config();
const mailer = require("nodemailer");
const mongoose = require("mongoose");
// getting schema for user
const User_OTP = require("../models/otpSchema");

const User = require("../models/userSchema");






// const handleErrors = (err) => {
//     console.log(err.message, err.code);
//     let errors = { email: '', password: '' };
//     if (err.message = 'Invalid login') {
//         console.log("incorect email or password");
//         alert("incorect")
//     }
//     if (err.message === 'incorrect Email') {
//         errors.email = 'this email is not registerd';
//     }
//     if (err.message === 'incorrect Password') {
//         errors.password = 'this is incorrect password';
//     }
// }







    const SendMail = (email, subject, mbody, mymail, mypassword) => {
        // console.log(mymail);
        // console.log(mypassword);
        // const m="darshanahire101@gmail.com";
        // const p=1304013040;

        const transport = mailer.createTransport(
            {

                service: "gmail",
                auth: {

                    // user: process.env.E_USER,
                    // pass: process.env.E_PASS
                    user: mymail,
                    pass: mypassword
                }
            }
        )
        // sending otp to user with this body
        const body = {
            from: mymail,
            to: email,
            subject: subject,
            text: mbody
        }

        transport.sendMail(body, async function (err, data) {
            if (err) {
                console.log("error occured");

                console.log(err.errresponseCode)
            }
            else {
                // console.log(data);
                if (data.accepted !== null)
                    console.log("Mail Sent sucessfully");
                else {
                    console.log(`OTP is Not send an Error Occurs`);
                    console.log("mail not sent, Please Enter Valid data");
                }
                // check is we already send email or not if we send it then just update it
                const fileter = { email: email };
                // const update = { otp: otp, createdAt: Date.now() };
                let doc = await User.findOneAndUpdate(fileter, {
                    new: true, //By default, findOneAndUpdate() returns the document as it was before update was applied.
                    upsert: true//normal findOneAndUpdate() if it finds a document that matches filter. But, if no document matches filter, MongoDB will insert one by combining filter and update
                });
                // console.log(doc);
                /** 
                 making new user to adding user_otp database after that we access it verify otp and email using route
                 let newUserOTP = new User_OTP({
                         email: toMail, otp: otp
                     });
                     newUserOTP.save().then((data) => {
                             console.log("OTP is saved correctly", data);
                         }).catch((err) => {
                                 console.log("otp not saved correctly", err);
                             })
                */
            }
        })
    }

    module.exports = SendMail;