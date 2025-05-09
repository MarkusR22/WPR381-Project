// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const teamMembers = [];
const events = [];

router.get('/', (req, res) => {
    res.render('pages/home', {events})
});

router.get('/about', (req, res) => {
    res.render('pages/about', {teamMembers})
});

router.get('/events', (req, res) => {
    res.render('pages/events', {events})
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.post('/contact', (req, res) => {
    const {name, email, message} = req.body;

    res.redirect('/thankyou')
})

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou')
});

module.exports = router;
