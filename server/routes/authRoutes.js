const express = require('express')
const router = express.Router()
const cors = require('cors')
const { test, register, login, logout, user } = require('../controllers/authController')

//middleware
router.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)

//routes
router.get('/', test)
router.post('/register', register)
router.post('/login', login)
router.use('/logout', logout)
router.get('/user', user)

module.exports = router
