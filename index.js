const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')


dotenv.config();

//Connect to database
mongoose.connect(
    process.env.DB_CONNECT,
    {}).then(() => console.log("Database connected!"))
     .catch(err => console.log(err));;

//Middleware
app.use(express.json());

//Route MiddLewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up and running'));

