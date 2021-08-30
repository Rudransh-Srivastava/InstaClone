// const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const requireLogin = require('../middleware/requireLogin')
const User = mongoose.model("User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');


router.get('/protected',requireLogin, (req, res) => {
    res.send("Hello user");
})

router.post('/sign-up', (req, res) => {
    console.log(req.body.name);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).send({ error: "All fields are mandatory" });
    }
    else {
        User.findOne({ email: email }).then((saveduser) => {
            if (saveduser) {
                res.status(400).send({ error: "user already exists with that email" });
            }
            else {
                bcrypt.hash(password, 12).then((hashedpassword) => {
                    const user = new User({
                        email,
                        name,
                        password:hashedpassword
                    })
                    user.save().then(user => {
                        res.json({ message: "User Saved Successfully" });
                    }).catch(err => {
                        res.status(400).send({ message: err });
                    })
                })

            }
        }).catch(err => {
            console.log(err);
        })
    }
})
router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(400).send({message:"All fields are mandatory"});
    }
    else{
        User.findOne({email:email}).then(saveduser=>{
            if(!saveduser)
            {
                res.status(400).send({message:"No such user exits with this email"});
            }
            else{
                bcrypt.compare(password,saveduser.password).then((domatch)=>{
                    if(domatch){
                        // res.status(200).send({message:'Sign-In Succesful'});
                        const token = jwt.sign({_id:saveduser._id},JWT_SECRET) // This will generate the token
                        res.status(200).send({
                            message:"Sign-in Successful",
                            token:token});
                    }
                    else{
                        res.status(400).send("Invalid Email/address");
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        })
    }

})
module.exports = router;