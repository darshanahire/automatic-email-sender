const { Router } = require("express");
const jwt = require('jsonwebtoken');

const { isTokenPresent } = require("../middleware/isTokenPresent")
const router = Router();
const User = require("../models/userSchema");
require("../db/conn")

const tokenAge = 10 * 60 * 60 * 24 * 100; //1 day

// token creation
const createToken = (id) => {
    return jwt.sign({ id }, 'thisisaloginandsignuppage', {
        expiresIn: tokenAge * 10  //10 days
    });
}


const sendmail = require("../middleware/SendMail");

router.post("/esend", async (req, res) => {
    const username = req.body.username;
    const friendsEmail = req.body.friendsEmail;
    const body = req.body.body;
    try {
        sendmail(username, friendsEmail, body).then(() => {
            res.status(200).json({});
            console.log("Mail send succesfully")
        }).catch((err) => {
            res.status(404).json("mail not send error occur in sendmail funct");
            console.log("mail not send error occur in sendmail funct");
            console.log(err)
        });
    } catch (err) {
        console.log(err);
    }
})
router.post('/save-to-db', async (req, res) => {
    const { username, myEmail, mypassword } = req.body;
    try {
        let ref = myEmail;
        // console.log(ref);
        User.findOne({ email: myEmail })
            .then(async (oll) => {
                if (oll === null) {
                    try {
                        const user = await User.create({ username, email: myEmail, password: mypassword });
                        res.status(200).json("user savedddd in db");
                        console.log("user added");
                        // console.log(user);
                    } catch (err) {
                        res.status(404).json("UserName is allready registrered");
                        console.log("UserName is allready registrered");
                    }
                }
                else {
                    res.status(404).json("Email is allready registrered");
                    console.log(oll);

                    console.log("Email  is allready registrered");
                }
            }).catch((err) => {
                console.log(err);
                res.status(404).json({})
            })
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
});





// this route used to verify email and otp  
router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.mypassword;
    User.findOne({ username })
        .then(async (data) => {
            if (data !== null) {
                if (data.password === password) {
                    console.log("User Login sucess---------------");
                    res.status(200).json();
                }
                else {
                    console.log("Incorect password");
                    res.status(404).json();
                }

            }
            else{
                res.status(404).json();
            }
            // else {
            //     // res.status(200).json("otp match");
            //     // creating user in Database after verification of mail
            //     console.log("otp matches");
            //     const user = await User.create({ email, password });
            //     const token = createToken(user._id);


            //     res.cookie('jwt', token, { httpOnly: true, maxAge: tokenAge * 10 })
            //     res.status(201).json("User added into database...");
            //     console.log("User added into database...");
            //     // console.log(data);
            // }
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;