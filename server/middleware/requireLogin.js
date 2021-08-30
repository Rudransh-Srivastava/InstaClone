const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
    const{authorization} = req.headers;
    console.log(authorization);
    if(!authorization)
    {
        res.status(400).send({
            error:"Unauthorized access"
        })
    }
    else{
        const token = authorization.replace("Bearer ","");
        console.log(authorization);
        jwt.verify(token,JWT_SECRET,(err,payload)=>{
            if(err)
            {
                return res.status(400).send({error:"Unauthorized access"})
                
            }
            const {_id} = payload
            User.findById(_id).then(userdata=>{
                req.user = userdata
                next()
            })
             
        })

    }
}