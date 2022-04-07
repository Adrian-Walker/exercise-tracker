const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const ATLAS_URI = process.env.ATLAS_URI
const cors = require('cors')
const bodyParser = require('body-parser')

const exerciseRouter = require('./routes/exerciseRoutes')
const userRouter = require('./routes/userRoutes')





mongoose.connect(
    ATLAS_URI,
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('common'))

// Routes
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 4500
app.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
})




// const express = require('express');
// require('dotenv').config;
// const mongoose = require('mongoose');
// const cors = require('cors')

// const exerciseRouter = require('./routes/exerciseRoutes')
// const userRouter = require('./routes/userRoutes')

// app = express()

// const username = process.env.DB_NAME
// const password = process.env.DB_PASS
// const user = process.env.ATLAS_URI

// mongoose.connect('mongodb+srv://1walker:adrian22@exercise-tracker.e4igp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', (err, db) => {
//     if (err) {
//         console.log('Unable to connect to the server. Error:', err);
//     } else {
//         console.log('Successfully connected!');
//     }
// }
// )


// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/exercises', exerciseRouter);
// app.use('/users', userRouter);



// const port = process.env.PORT || 3500
// app.listen(port, () => {
//     console.log(`Server Running On Port ${port}`)
// })
