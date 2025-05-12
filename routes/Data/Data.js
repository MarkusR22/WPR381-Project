const teamMembers = [
    {
        id: 0,
        name: "Iwan Groenewald",
        role: "Documentation",
        studentId: "600166"
      },
      {
        id: 1,
        name: "Markus Du Plessis",
        role: "Backend",
        studentId: "600611"
      },
      {
        id: 2,
        name: "Markus Reblin",
        role: "Frontend",
        studentId: "578083"
      },
      {
        id: 3,
        name: "Barend Blom",
        role: "Data Management",
        studentId: "600228"
      }
];

const Venues = ["Phi", "Smart City", "Gymnasium", "Library"]

const clubs = ["Gaming", "Sports", "IT"]

const events = [
    {
        id: 0,
        club: clubs[0],
        title: "LAN Party Showdown",
        date: "2025-06-3",
        location: Venues[1],
        description: "Join us for an All-Night LAN party featuring competative games and casual rpg's",
        imageUrl: '../public/images/LANParty.jpg',
        registrationLink: "#"
      },
      {
        id: 1,
        club: clubs[1],
        title: "FIFA Face-Off Tournament",
        date: "2025-06-10",
        location: Venues[2],
        description: "Compete in a campus-wide FIFA tournament and win awesome prizes",
        imageUrl: '../public/images/FIFAGame.jpg',
        registrationLink: "#"
      },
      {
        id: 2,
        club: clubs[2],
        title: "Game Dev 101",
        date: "2025-06-23",
        location: Venues[0],
        description: "A Hands on introduction to creating your first simple game using unity",
        imageUrl: '../public/images/GameDev.jpg',
        registrationLink: "#"
      },
      {
        id: 3,
        club: clubs[0],
        title: "Speedrunning 101",
        date: "2025-06-30",
        location: Venues[3],
        description: "Learn the basics of speedrunning and watch the pros go at it live!",
        imageUrl: '../public/images/SpeedRunning.jpg',
        registrationLink: "#"
      },
      {
        id: 4,
        club: clubs[1],
        title: "Fitness Day",
        date: "2025-06-05",
        location: Venues[0],
        description: "Join us for a day to do some exercises!",
        imageUrl: '../public/images/Fitness.jpg',
        registrationLink: "#"
      },
      
];

const contactSubmissions = [];//Gets inserted into from use input

module.exports = {teamMembers, Venues, clubs, events, contactSubmissions}