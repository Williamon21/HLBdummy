const express = require('express');
const router = express.Router({ mergeParams: true });
const Hunt = require('../models/hunt');


//SHOW GET /users/profile
router.get('/profile', async (req, res) => {
    try {
        const myHunts = await Hunt.find({ owner: req.session.user._id }).populate('owner');

        const myFavoritedHunts = await Hunt.find({ favoritedByUsers: req.session.user._id }).populate('owner');

        res.render('users/show.ejs', {
            myHunts,
            myFavoritedHunts
        })
    } catch (error) {
        req.session.message = error.message;
        req.session.save(() => {
            res.redirect('/hunts');
        })
    }
})

module.exports = router