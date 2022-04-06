const { Router } = require('express')
const Exercise = require('../models/exercises')
const router = Router()

router.get('/', (req, res) => {
    User.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ username, description, duration, date });

    newExercise.save()
        .then(() => res.json('New Exercise Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router
