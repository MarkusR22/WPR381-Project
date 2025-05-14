//Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const data = require('../routes/Data/Data')
const {filterEvents, sortEvents, getUpcomingEvents } = require('../utils/eventUtils.js');



//Rendering the home page
router.get('/', (req, res) => {

    //Rendering ejs file and passing upcoming events to file
    res.render('pages/home', {
        events: getUpcomingEvents(data.events),
        includeCountdownScript: true
    });
});

//Rendering the about page
router.get('/about', (req, res) => {
    res.render('pages/about', {teamMembers: data.teamMembers})
});

//Rendering the events page
router.get('/events', (req, res) => {
    //Getting values to sort and filter events by
    const {club, sort} = req.query;

    let filtered = filterEvents(data.events, club);
    let sorted = sortEvents(filtered, sort);

    //Rendering ejs file and passing events array to file
    res.render('pages/events', {
        events: sorted,
        selectedClub: club || 'all',
        selectedSort: sort || 'none'
    })
});

//Rendering contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact')
});

//Getting input from form and saving it to contactSubmissions array
router.post('/contact', (req, res) => {
    const {name, email, message} = req.body;
    data.contactSubmissions.push({name, email, message})
    console.log(data.contactSubmissions)
    res.redirect('/thankyou')
})

//Rendering thank you page
router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou')
});

//Test endpoint to make sure server errors are properly handled
router.get('/error-test', (req, res, next) => {
  const err = new Error("This is a test error");
  err.status = 500;
  next(err);
});

module.exports = router;
