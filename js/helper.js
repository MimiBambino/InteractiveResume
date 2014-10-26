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
var mapHeader = "<h3 id='map-header'>Where I've Lived</h3>";

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


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var styles = [
  {
    "featureType":"landscape.natural.landcover",
    "stylers":[
    { "gamma":0.44 },
    { "hue":"#2bff00" }
    ]
  },{
    "featureType":"water",
    "stylers":[
    {"hue":"#03bbc5"},
    {"saturation":29},
    {"gamma":0.74}
    ]
  },{
    "featureType":"landscape.natural.terrain",
    "stylers":[{"hue":"#00ff00"},{"saturation":54},{"lightness":-51},{"gamma":0.4}]},{"featureType":"transit.line","stylers":[{"gamma":0.27},{"hue":"#0077ff"},{"saturation":-91},{"lightness":36}]},{"featureType":"landscape.man_made","stylers":[{"saturation":10},{"lightness":-23},{"hue":"#0099ff"},{"gamma":0.71}]},{"featureType":"poi.business","stylers":[{"hue":"#0055ff"},{"saturation":9},{"lightness":-46},{"gamma":1.05}]},{"featureType":"administrative.country","stylers":[{"gamma":0.99}]},{"featureType":"administrative.province","stylers":[{"lightness":36},{"saturation":-54},{"gamma":0.76}]},{"featureType":"administrative.locality","stylers":[{"lightness":33},{"saturation":-61},{"gamma":1.21}]},{"featureType":"administrative.neighborhood","stylers":[{"hue":"#ff0000"},{"gamma":2.44}]},{"featureType":"road.highway.controlled_access","stylers":[{"hue":"#ff0000"},{"lightness":67},{"saturation":-40}]},{"featureType":"road.arterial","stylers":[{"hue":"#ff6600"},{"saturation":52},{"gamma":0.64}]},{"featureType":"road.local","stylers":[{"hue":"#006eff"},{"gamma":0.46},{"saturation":-3},{"lightness":-10}]},{"featureType":"transit.line","stylers":[{"hue":"#0077ff"},{"saturation":-46},{"gamma":0.58}]},{"featureType":"transit.station","stylers":[{"gamma":0.8}]},{"featureType":"transit.station.rail","stylers":[{"hue":"#ff0000"},{"saturation":-45},{"gamma":0.9}]},{"elementType":"labels.text.fill","stylers":[{"gamma":0.58}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"gamma":2.01},{"hue":"#00ffff"},{"lightness":22}]},{"featureType":"transit","stylers":[{"saturation":-87},{"lightness":44},{"gamma":1.98},{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"gamma":0.06},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"hue":"#00aaff"},{"lightness":-6},{"gamma":2.21}]},{"elementType":"labels.text.stroke","stylers":[{"gamma":3.84}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"gamma":9.99}]},{"featureType":"administrative","stylers":[{"gamma":0.01}]}];
  var locations;        

  var mapOptions = {
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: ['map_style']
    }
  };

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
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
