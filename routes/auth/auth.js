const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../../models/User");  


// middlewares
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
} = require("../../helpers/middlewares");
////////

//SignUp

router.post(
    '/signup',

    isNotLoggedIn(),
    validationLoggin(),

    async (req, res, next) => {

        const { email, password, shippingAddress } = req.body
        

        try {
            const emailExists = await User.findOne({ email });

            if (emailExists) return next(createError(400));
            else {

                const salt = bcrypt.genSaltSync(saltRounds);
                const hashPass = bcrypt.hashSync(password, salt);
                const newUser = await User.create({ email, shippingAddress, password: hashPass});

                req.session.currentUser = newUser;

                res.status(200).json(newUser);

            }
        } catch (error) {
            next(error);
        }
    }
)

////// Login

router.post('/login',

    isNotLoggedIn(),
    validationLoggin(),
    async (req, res, next) => {
        const { email, password } = req.body;
        console.log({email, password})

        try {
            const findUser = await User.findOne({ email });
            console.log(findUser)
            if (!findUser) {
                next(createError(404))
            } else if (bcrypt.compareSync(password, findUser.password)) {
                req.session.currentUser = findUser;
                res.status(200).json(findUser);
                return;
            } else {
                console.log('ERROR user not found')
                next(createError(404));

            }

        } catch (error) {
            next(error);
        }
    }
);

//// logout

router.post("/logout", isLoggedIn(), (req, res, next) => {
    req.session.destroy();

    res.status(204).send();
    return;
  });

//// /user

router.get("/user", isLoggedIn(), (req, res, next) => {
    req.session.currentUser.password = "******";
    res.json(req.session.currentUser);
  });
  
//user/edit-profile

  router.post('/user/:userId/edit-profile', async  (req, res, next) => {

        try {

    const {email, shippingAddress, password} = req.body
    const salt = bcrypt.genSaltSync(saltRounds);
    const findEmail = await User.findOne({email:email})
    
    if(!email|| !password|| !shippingAddress){
     res.status(400 ).json('You must fill the gaps!')
    }

    
    if(!findEmail || email === req.session.currentUser.email ) {
    const hashPass = bcrypt.hashSync(password, salt);
    const udpdatedUser = await User.findByIdAndUpdate(req.params.userId, {email, shippingAddress, password:hashPass}, {new:true})
    req.session.currentUser = udpdatedUser  
    res.status(200).json(udpdatedUser)
    
    } 
    
    else {
        res.json('Email already exists on db') 
    }
    
    

        }catch {
      next(error);
      
    }
  
  });

module.exports = router