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
var onlineSchool = "<div class='row oC'><div class='title col-sm-6 col-md-9 text-left'><p>%title% -- <a class='school' target='_blank' href='%#%'>%school%</a></p></div><div class='col-md-3 text-right'><span class='certificate'><a target='_blank' href='#'>Certificate</a></span></div></div>";
var endOnline = "</div>";

var schoolStart = "<div class='%major%-col col-md-12'><h1 class='heading text-center'>%major%</h1></div></div>";
var degreeString = "<div class='row'><div class='col-md-5 text-left'><p class='degree'>%degree%</p></div>";
var schoolString = "<div class='col-md-7 text-right'><a class='school' target='_blank' href='%#%'>%school%</a></div></div>";
var locationString = "<div class='row text-center'><div class='col-md-12'><p class='location-text'>%location%</p></div></div><div class='row text-center'><div class='col-md-12'><p class='date-text'>%dates%</p></div></div>";

var workStart = "<div class='%job%-col col-md-12'><h1>%title%</h1><p class='employer'>%employer%</p><div class='row'><div class='col-md-offset-1 col-md-10'><p class='description'>%description%</p></div></div></div>";
var workLocation = "<p class='location'>%location%</p>";

var projectStart = "<div class='col-md-4 text-center'><a href='%demo%' target='_blank'><img class='img-responsive img-rounded' src='%image%' alt='%description%'></a><a class='project' target='_blank' href=%url%><h3 class='text-uppercase text-center'>%title%</h3></a><p>%description%</p></div>";

var contactLocation = "<li class='contact-type'>location: <span class='contact-data'>%data%</span></li>";
var contactWebsite = "<li class='contact-type'>website: <span class='contact-data'><a target='_blank' href='http://%data%'>%data%</a></span></li>";
var contactEmail = "<li class='contact-type'>email: <span class='contact-data'><a href='mailto:%data%'>%data%</a></span></li>";
var contactTwitter = "<li class='contact-type'>twitter: <span class='contact-data'><a target='_blank' href='http://www.twitter.com/mimibambino'>%data%</a></span></li>";
var contactGithub = "<li class='contact-type'>github: <span class='contact-data'><a target='_blank' href='https://www.github.com/%data%'>%data%</a></span></li>";
var contactLinkedIn = "<li class='contact-type'>linkedin: <span class='contact-data'><a target='_blank' href='http://www.linkedin.com/pub/cynthia-o-donnell/a2/719/7a0/'>%data%</a></span></li>";

var HTMLbioPic = "<img src='%data%' class='img-responsive img-rounded'>";
var HTMLskills = "<li>%data%</li>";
var blogPostEven = "<div class='blog-box col-md-offset-2 col-md-10'><h4>%title%</h4><p class='even' id='%index%'>%data%</p></div>";
var blogPostOdd = "<div class='blog-box col-md-10'><h4>%title%</h4><p class='odd' id='%index%'>%data%</p></div>";
