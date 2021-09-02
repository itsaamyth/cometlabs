const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
const user = require("../models/user")



exports.checkEmail=(req,res,next)=>{
    var email = req.body.email
    var checkexitemail=user.findOne({email:email});
    checkexitemail.exec((error,data)=>{
    if(data){
        return res.status(400).json({
            error:"Username Already Exists"
        })
    }
    next()
    })
}

exports.signupUser=(req,res)=>{
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password
    
    password = bcrypt.hashSync(req.body.password,10) //password Encrypter
    userSignup = new user({
        name:name,
        email : email,
        password : password,
        authLevel:"User"
    })
    userSignup.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save user in the DB"
            })
        }
        res.json({
            message:"User Added Successfully",
            user
        })
    })
}

exports.isAdmin=(req,res,next)=>{
    var email = loggedinUser
    var checkAdmin=user.findOne({email:email});
    checkAdmin.exec((error,data)=>{
    if(data.authLevel != "Admin"){
        if( data.authLevel != "superAdmin" ){
        return res.status(400).json({
            error:"You are Not Authorised"
        })
    }
    }
    next()
    })
}


exports.signupAdmin=(req,res)=>{
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password
    
    password = bcrypt.hashSync(req.body.password,10) //password Encrypter
    userSignup = new user({
        name:name,
        email : email,
        password : password,
        authLevel:"Admin"
    })
    userSignup.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:"Not able to save Admin in the DB"
            })
        }
        res.json({
            message:"Admin Added Successfully",
            user
        })
    })
}

exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var checkUser = user.findOne({ email: email });
    checkUser.exec((err, data) => {
      if (!data) {
        res.status(404).json({
          message: "User not Found . Auth Failed !!",
        });
      } else {
            var objId = data._id;
            var encryPassword = data.password;
            if (bcrypt.compareSync(password, encryPassword)) {
              var token = jwt.sign(
                {
                  email: email,
                  objid: objId,
                },
                process.env.SECRET,
                { expiresIn: "2700s" }
              );
  
              res.status(201).json({
                message: "User logged in Succesfully",
                email: email,
                authLevel:data.authLevel,
                token: token,
              });
            } else {
              res.status(404).json({
                message: "Wrong Password. Auth Failed !!",
              });
            }
          }
      }
    );
  };

  exports.isLoggedIn = (req,res,next)=>{
    var headerToken = req.headers.authorization
    if(!headerToken){
        res.status(401).json({
            error:"No Token Provided",
            loggedIn:false
        }) 
    }
    else{
        try{
            var token  = headerToken.split(" ")[1];
            var decode = jwt.verify(token, process.env.SECRET)
            req.userData = decode
            loggedinUser = req.userData.email
            console.log(loggedinUser)
        }
        catch(err){
            res.status(401).json({
                error:"Invalid Token",
                loggedIn:false
            })
            next(err)
        }
        next()
    }
}