const { Router } = require('express')
const Exercise = require('../models/exercises')
const router = Router()

router.get('/', (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json(err + '...Exercise get request error'))
})

router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ username, description, duration, date });

    newExercise.save()
        .then(() => res.json('New Exercise Added!'))
        .catch(err => res.status(400).json(err + '...Exercise add route error'));
})

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(err));
})

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json(`${req.body.username}'s Exercise Has Been Deleted.`))
        .catch(err => res.status(400).json(err + '...Exercise delete request error'));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
            exercise.save()
                .then(() => res.json('Exercise Has Been Updated'))
                .catch(err => res.status(400).json(err + '...Exercise udpate ID error'))
        })
        .catch(err => res.status(400).json(err))
})


module.exports = router
