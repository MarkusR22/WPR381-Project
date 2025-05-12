// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const data = require('../routes/Data/Data')

//const teamMembers = []; Sent to Data file
//const events = [];

//const contactSubmissions = [];

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
    contactSubmissions.push({name, email, message})
    console.log(contactSubmissions)
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
