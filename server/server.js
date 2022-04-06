const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const exerciseRouter = require('./routes/exerciseRoutes')
const userRouter = require('./routes/userRoutes')

app = express()

const username = process.env.DB_NAME
const password = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${username}:${password}@exercise-tracker.e4igp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => {
    console.log('Connected To Db')
})

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/exercises', exerciseRouter);
// app.use('/users', userRouter);



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
})
