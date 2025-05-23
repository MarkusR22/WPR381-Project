//Filtering events array based on club
function filterEvents(events, club){
  if (!club || club === 'all'){
    return events;
  }
  return events.filter(event => event.club === club);
}

//Sorting events array based on date
function sortEvents(events, sortOrder){
  if (sortOrder === 'oldest-newest'){
    return events.sort((a,b) => new Date(a.date) - new Date(b.date));
  }
  else if (sortOrder ==='newest-oldest'){
    return events.sort((a,b) => new Date(b.date) - new Date(a.date));
  }
  return events;
}

//Getting the 3 closest events
function getUpcomingEvents(events) {
  const today = new Date();

  return events
    .filter(event => new Date(event.date) >= today) 
    .sort((a, b) => new Date(a.date) - new Date(b.date)) 
    .slice(0, 3); 
}


module.exports = {filterEvents, sortEvents, getUpcomingEvents};