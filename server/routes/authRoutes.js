const express = require('express');
const router = express.Router();
const cors = require('cors');
const {
    test,
    register
} = require('../controllers/authController')


//middleware
router.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
)

//routes
router.get('/', test)
router.post('/register', register)


module.exports = router;