const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

//app connect
mongoose
   .connect(process.env.MONGODB)
   .then(() => console.log('Connected to MongoDB'))
   .catch((err) => console.log(err, 'Couldnt connect to MongoDB'));

//midleware
//const corsOptions = {};
app.use(cors())
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/auth', require('./routes/authRoutes'));

//port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));