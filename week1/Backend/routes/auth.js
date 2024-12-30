const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register',async(req,res) => {
    const { name,email,password } = req.body;
    try{
        //check if the user already exists
        const userExists = await user.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
    
    //create a new user with plain password(hashed in the model)
    const user = new User({ name,email,password });
    await user.save(); //hashing is handled by the pre-save hook in model
     
    // Generate a JSON Web Token
    const token =JsonWebTokenError.sign({ id: user._id }, process.env.JWT_SECRET,{
        expiresIn: '1h',
    });
    //Respond with the token
    res.status(201).json({ username: user.username,token:token });
    }catch(error){
        res.status(500).json({error : 'Server error' });
    }
});

//POST: Sign In
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        console.log(user)
        if(!user){
            return res.status(400).json({ message: 'Invalid Email' });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            return res.status(400).json({ message: 'Invalid password '});
        }
    
        const token = jwt.sign({ id:user._id }, process.env.JWT_SECRET,{
            expiresIn: '1h',
        });
        res.status(201).json({ username:user.name,token:token});
        console.log(user.name);
    }catch(error){
        res.status(500).json({ error:'Server error' });
    }
});
module.exports = router;
    

