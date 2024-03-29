//models
const User = require('../models/userModel')
//helpers
const { hashPassword, comparePassword } = require('../helpers/passwordHash')
const { emailValidate } = require('../helpers/emailValidate')
//jwt
const jwt = require('jsonwebtoken')

//test endpoint
const test = (req, res) => {
  res.json('The test endpoint workin ^^')
}

//register endpoint
const register = async (req, res) => {
  try {
    const { name, surname, username, email, password, userRole, company } = req.body

    //name
    if (!name) {
      return res.json({
        error: 'name is require'
      })
    }
    //surname
    if (!surname) {
      return res.json({
        error: 'surname is require'
      })
    }
    //username
    if (!username) {
      return res.json({
        error: 'username is require'
      })
    }
    const existUsername = await User.findOne({ username })
    if (existUsername) {
      return res.json({
        error: 'username is exist'
      })
    }
    //password
    if (!password || password.length < 6) {
      return res.json({
        error: 'password must be at least 6 characters'
      })
    }
    const hashedPassword = await hashPassword(password)
    //email
    if (!email) {
      return res.json({
        error: 'email is require'
      })
    }
    if (!emailValidate(email)) {
      return res.json({
        error: 'Please enter valid email services'
      })
    }
    const existEmail = await User.findOne({ email })
    if (existEmail) {
      return res.json({
        error: 'email is exist'
      })
    }
    //company
    if (!company) {
      return res.json({
        error: 'company is require'
      })
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
      user: user
    })
  } catch (error) {
    console.log(error)
  }
}

//login endpoint
const login = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body

    //check if user exist
    const user = await User.findOne({
      $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }]
    })
    if (!user) {
      return res.json({
        error: 'user is not exist'
      })
    }

    // Check if the provided password matches the stored hash
    const match = await comparePassword(password, user.password)

    if (match) {
      // Create a token
      jwt.sign(
        {
          id: user._id,
          name: user.name,
          surname: user.surname,
          username: user.username,
          email: user.email,
          userRole: user.userRole,
          company: user.company
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err
          res.cookie('token', token).json(user)
        }
      )
    } else {
      res.json({
        error: 'Invalid password'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

//logout endpoint
const logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logout success' })
}

//user endpoint
const user = (req, res) => {
  const { token } = req.cookies
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err
      res.json(user)
    })
  } else {
    res.json(null)
  }
}

module.exports = {
  test,
  register,
  login,
  logout,
  user
}
