var headerName = "<h1 class='analgous-color'>%data%</h1>";
var headerRole = "<h4 class='contrasting1-color'>%data%</h4>";
var HTMLWelcomeMsg = "<h4 class='welcome-message'>%data%</h4>";

var educationHeader = "<h2>Education</h2><p>Please click on a subject for more information.</p>";
// The id must be in the svg and not the circle in order for CSS to supply the fill property correctly
var SVGcircleHelper = "<li class='%class%'><svg id='%id%' class='%color%' width='210' height='210'><circle cx='105' cy='105' r='105'/>";
var SVGtext = "<text x='%text_x%' y='%text_y%' width='300' height='150'>%text%</text>";
var moreTextHelper = "";
var SVGend = "</svg></li>";

var educationStart = "<div class='programming-col col-md-4 col-sm-6 col-xs-12 text-center'><h1 class='heading'>Programming</h1>";
var onlineTitleAndSchool = "<p 'class='title'>%title%&nbsp; &#151; &nbsp;<a class='school' target='_blank' href='%#%'>%school%</a></p>";
var HTMLcerficate = "<a class='certificate' target='_blank' href='#'>Certificate</a>";
var schoolString = "<div class='%major%-col col-md-4 col-sm-6 col-xs-12'><h1 class='heading'>%major%</h1><div class='education-entry'>";
var degreeLocationDate= "<p class='degree'>%degree% &nbsp;&#151; &nbsp;<a class='school' target='_blank' href='%#%'>%school%</a></p><p class='location-text'>%location%</p><p class='date-text'>%dates%</p></p></div></div>";

var workStart = "<div class='%job%-col col-md-6 col-sm-12'><h1>%title%</h1><p class='employer'>%employer%</p><p class='description'>%description%</p></div>";
var workLocation = "<p class='location'>%location%</p>";

var projectStart = "<div class='col-md-4 text-center'><img class='img-responsive img-rounded' src='%image%' alt='%description%'><a class='project' target='_blank' href=%url%><h3 class='text-uppercase text-center'>%title%</h3></a></div>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%:</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile:</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email:</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter:</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github:</span><span class='white-text'>%data%</span></li>";
var HTMLwebsite = "<li class='flex-item'><span class='orange-text'>website:</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location:</span><span class='white-text'>%data%</span></li>";

var HTMLcontact = "<li class='contact-type'>%type%: <span class='contact-data'> %data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='img-responsive img-rounded'>";
var HTMLskills = "<li>%data%</li>";

var googleMap = "<div id='map'></div>";
var mapHeader = "<h4 id='map-header'>Where I've Lived</h4>";


//The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
/*
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
})

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
*/

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


//This is the fun part. Here's where we generate the custom Google Map for the website.
//See the documentation below for more details.
//https://developers.google.com/maps/documentation/javascript/reference

/*var map;    // declares a global map variable



//Start here! initializeMap() is called when page is loaded.

function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  
  //locationFinder() returns an array of every location string from the JSONs
  //written for bio, education, and work.
  
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

  
  //createMapMarker(placeData) reads Google Places search results to create map pins.
  //placeData is the object returned from search results containing information
  //about a single location.
  
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

  
  //callback(results, status) makes sure the search returned results for a location.
  //If so, it creates a new map marker for that location.
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  
  //pinPoster(locations) takes in the array of locations created by locationFinder()
  //and fires off Google place searches for each location
  
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

//Uncomment all the code below when you're ready to implement a Google Map!

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});*/