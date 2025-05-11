// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const { filterEvents, sortEvents } = require('../utils/eventUtils.js');

const teamMembers = [];
const events = [
    {
    club: "Gaming",
    eventName: "LAN Party Showdown",
    date: "2025-06-05",
    description: "Join us for an all-night LAN party featuring popular multiplayer games like Valorant, League of Legends, and CS2."
  },
  {
    club: "Book Club",
    eventName: "Summer Reading Kickoff",
    date: "2025-06-10",
    description: "Start your summer reading with us as we introduce the season’s first book and hand out reading lists."
  },
  {
    club: "Sign Language",
    eventName: "Intro to Fingerspelling",
    date: "2025-06-12",
    description: "A beginner-friendly workshop on the basics of fingerspelling in South African Sign Language."
  },
  {
    club: "Gaming",
    eventName: "FIFA Face-Off Tournament",
    date: "2025-06-15",
    description: "Compete in a campus-wide FIFA tournament and win merch, snacks, and bragging rights!"
  },
  {
    club: "Book Club",
    eventName: "Poetry Slam Night",
    date: "2025-06-18",
    description: "An open mic night where students can perform original or favorite poems in a cozy, relaxed setting."
  },
  {
    club: "Sign Language",
    eventName: "Silent Movie Night",
    date: "2025-06-20",
    description: "Experience storytelling in silence and learn how expression and body language play a role in communication."
  },
  {
    club: "Gaming",
    eventName: "Game Dev 101",
    date: "2025-06-22",
    description: "A hands-on introduction to creating your first simple game using Unity. No prior experience required!"
  },
  {
    club: "Book Club",
    eventName: "Classic Novels Revisited",
    date: "2025-06-25",
    description: "A roundtable discussion on timeless classics and how they relate to modern society."
  },
  {
    club: "Sign Language",
    eventName: "Sign & Snack",
    date: "2025-06-27",
    description: "Practice casual sign conversation over snacks in a judgment-free environment. All skill levels welcome!"
  },
  {
    club: "Gaming",
    eventName: "Speedrunning 101",
    date: "2025-06-30",
    description: "Learn the basics of speedrunning and watch pros attempt record-breaking runs live."
  }
];

const contactSubmissions = [];

router.get('/', (req, res) => {
    res.render('pages/home', {events})
});

router.get('/about', (req, res) => {
    res.render('pages/about', {teamMembers})
});

router.get('/events', (req, res) => {
    const { club, sort } = req.query;

    let filtered = filterEvents(events, club);
    let sorted = sortEvents(filtered, sort);

    res.render('pages/events', {
        events: sorted,
        selectedClub: club || 'all',
        selectedSort: sort || 'none'
    });
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
