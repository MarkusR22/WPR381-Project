// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const data = require('../routes/Data/Data')
const {filterEvents, sortEvents, getUpcomingEvents } = require('../utils/eventUtils.js');




router.get('/', (req, res) => {
    res.render('pages/home', {events: data.events})
});

router.get('/about', (req, res) => {
    res.render('pages/about', {teamMembers: data.teamMembers})
});

router.get('/events', (req, res) => {
    const {club, sort} = req.query;

    let filtered = filterEvents(data.events, club);
    let sorted = sortEvents(filtered, sort);
    res.render('pages/events', {
        events: sorted,
        selectedClub: club || 'all',
        selectedSort: sort || 'none'
    })
});

router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

router.post('/contact', (req, res) => {
    const {name, email, message} = req.body;
    data.contactSubmissions.push({name, email, message})
    console.log(data.contactSubmissions)
    res.redirect('/thankyou')
})

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou')
});

router.get('/error-test', (req, res, next) => {
  const err = new Error("This is a test error");
  err.status = 500;
  next(err);
});

module.exports = router;
