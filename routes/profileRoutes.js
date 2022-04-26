const router = require("express").Router()
const Profile = require("../models/profile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(req.body.password, salt)
        const createdProfile = await Profile.create({username: req.body.username, password: hash})
        const token = jwt.sign({_id: createdProfile._id}, process.env.SECRET)
        res.json({userProfile: createdProfile, token})
    } catch (error) {
        res.json({message: error.message})
    }
})

router.post("/login", async (req, res) => {
    try {
        const profile = await Profile.findOne({username: req.body.username})
        if(!profile) return res.status(400).json({message: "User not found"})

        const passwordIsValid = await bcrypt.compare(req.body.password, profile.password)
        if(!passwordIsValid) return res.status(400).json({message: "Incorrect details"})

        const token = jwt.sign({_id: profile._id}, process.env.SECRET)
        res.json({userProfile: profile, token})
    } catch (error) {
        res.json({message: error.message})
    }
})

module.exports = router
