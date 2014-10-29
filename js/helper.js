var headerName = "<h1 class='analgous-color'>%data%</h1>";
var headerRole = "<h4 class='contrasting1-color'>%data%</h4>";
var headerContacts = "<div class='container'><div class='row'><div class='contactBar col-md-12'><ul class='nav nav-pills navbar-center'><li><a target='_blank' href='https://www.github.com/%github%' class='icon icon-github'></a></li><li><a target='_blank' href='http://www.linkedin.com/pub/cynthia-o-donnell/a2/719/7a0/' class='icon icon-linkedin'></a></li><li><a target='_blank' href='http://www.twitter.com/mimibambino' class='icon icon-twitter'></a></li><li><a href='mailto:%email%' class='icon icon-mail'></a></li><li><a target='_blank' href='http://%website%' class='icon icon-link'></a></li></ul></div></div></div>";

var HTMLWelcomeMsg = "<h4 class='welcome-message'>%data%</h4>";

// The id must be in the svg and not the circle in order for CSS to supply the fill property correctly
var SVGcircleHelper = "<li class='%class%'><svg id='%id%' class='%color%' width='210' height='210'><circle cx='105' cy='105' r='105'/>";
var SVGtext = "<text x='%text_x%' y='%text_y%' width='300' height='150'>%text%</text>";
var moreTextHelper = "";
var SVGend = "</svg></li>";

var educationStart = "<div class='programming-col col-md-12 text-center'><div class='row'><div class='col-md-12'><h1 class='heading'>Programming</h1>";
var onlineTitle = "<div class='row oC'><div class='col-md-9 text-left'><p 'class='title'>%title%</p></div>";
var onlineSchool = "<div class='col-md-2 text-right'><a class='school' target='_blank' href='%#%'>%school%</a></div></div>";
var HTMLcerficate = "<div class='row><div class='col-md-12 text-center><a class='certificate' target='_blank' href='#'>Certificate</a></div></div>";
var endOnline = "</div></div>";

var schoolStart = "<div class='%major%-col col-md-12'><h1 class='heading text-center'>%major%</h1></div></div>";
var degreeString = "<div class='row'><div class='col-md-5 text-left'><p class='degree'>%degree%</p></div>";
var schoolString = "<div class='col-md-7 text-right'><a class='school' target='_blank' href='%#%'>%school%</a></div></div>";
var locationString = "<div class='row text-center'><div class='col-md-12'><p class='location-text'>%location%</p></div></div><div class='row text-center'><div class='col-md-12'><p class='date-text'>%dates%</p></div></div>";

var workStart = "<div class='%job%-col col-md-12'><h1>%title%</h1><p class='employer'>%employer%</p><div class='row'><div class='col-md-offset-1 col-md-10'><p class='description'>%description%</p></div></div></div>";
var workLocation = "<p class='location'>%location%</p>";

var projectStart = "<div class='col-md-4 text-center'><img class='img-responsive img-rounded' src='%image%' alt='%description%'><a class='project' target='_blank' href=%url%><h3 class='text-uppercase text-center'>%title%</h3></a></div>";

var contactLocation = "<li class='contact-type'>location: <span class='contact-data'>%data%</span></li>";
var contactWebsite = "<li class='contact-type'>website: <span class='contact-data'><a target='_blank' href='http://%data%'>%data%</a></span></li>";
var contactEmail = "<li class='contact-type'>email: <span class='contact-data'><a href='mailto:%data%'>%data%</a></span></li>";
var contactTwitter = "<li class='contact-type'>twitter: <span class='contact-data'><a target='_blank' href='http://www.twitter.com/mimibambino'>%data%</a></span></li>";
var contactGithub = "<li class='contact-type'>github: <span class='contact-data'><a target='_blank' href='https://www.github.com/%data%'>%data%</a></span></li>";
var contactLinkedIn = "<li class='contact-type'>linkedin: <span class='contact-data'><a target='_blank' href='http://www.linkedin.com/pub/cynthia-o-donnell/a2/719/7a0/'>%data%</a></span></li>";

var HTMLbioPic = "<img src='%data%' class='img-responsive img-rounded'>";
var HTMLskills = "<li>%data%</li>";

var googleMap = "<div id='map'></div>";

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
};

/*
Uncomment all the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
