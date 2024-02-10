const User = require('../models/userModel')
//helpers
const { hashPassword } = require('../helpers/passwordHash');
const {emailValidate} = require('../helpers/emailValidate')

//test endpoint
const test = (req, res) => {
    res.json('The test endpoint workin ^^')
}

//register endpoint
const register = async (req, res) => {
    try {
        const {name, surname, username, email, password, userRole, company}  = req.body;
        
        //name 
        if (!name) {
            return res.json({
                error: 'name is require',
            });
        }
        //surname
        if (!surname) {
            return res.json({
                error: 'surname is require',
            });
        }
        //username
        if (!username) {
            return res.json({
                error: 'username is require',
            });
        }
        const existUsername = await User.findOne({ username });
        if (existUsername) {
            return res.json({
                error: 'username is exist',
            });
        }
        //password
        if (!password || password.length < 6) {
            return res.json({
                error: 'password must be at least 6 characters',
            });

        }
        const hashedPassword = await hashPassword(password);
        //email
        if (!email) {
            return res.json({
                error: 'email is require',
            });
        }
        if(!emailValidate(email)){
            return res.json({
                error: 'Please enter valid email services',
            });
        }
        const existEmail = await User.findOne({email});
        if (existEmail) {
            return res.json({
                error: 'email is exist',
            });
        }
        //company
        if (!company) {
            return res.json({
                error: 'company is require',
            });
        }

        const user = await User.create({
            name,
            surname,
            username,
            email,
            password: hashedPassword,
            userRole,
            company
        })

        return res.json({
        message: 'register is success',
        user: user,
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    register
};