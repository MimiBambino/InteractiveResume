var work = {
	"jobs": [
	{
	    "employer": "Case, Lombardi and Pettit",
	    "title": "Attorney",
	    "location": "Honolulu, Hawaii",
	    "dates": "2008 - 2010",
	    "description": "As a bankruptcy and business litigation attorney, I represented individual debtors in personal bankruptcy proceedings.  I also advised business clients on their rights under federal bankruptcy law as creditors and I participated in the successful reorganization of companies emerging from bankruptcy protection."
	},
	{
	    "employer": "United States Navy",
	    "title": "Navy Surface Warfare Officer",
	    "location": "Norfolk, Virginia",
	    "dates": "2001 - 2005",
	    "description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including all missiles) and installation and use of system software."
	}
	]

};
var projects = {
	"project": [
	{
		"title": "Mockup Portfolio",
		"dates": "2014",
		"description": "A single page website made to showcase all of my projects",
		"images": ["", "", ""]
	},
	{
		"title": "Interactive Resume",
		"dates": "2014",
		"description": "A resume made with javascript, jQuery and JSON",
		"images": ["", "", ""]
	}
	]
};

var bio = {
	"name": "Cynthia O'Donnell",
	"role": "Front End Web Developer",
	"welcomMessage": "Welcome to my resume!",
	"contacts": {
		"website" : "http://www.mimibambino.com", 
		"email" : "mimibambino@gmail.com",
		"github" : "MimiBambino",
		"twitter" : "@mimibambino",
		"location" : "Naples, Italy"
	},
		"skills": ["awesomeness", "programming", "web development", "paper airplanes"]
};

var education = {
	"schools": [
	  {
		"name": "University of Florida",
		"location": "Gainesville, Florida",
		"degree": "Juris Doctor", 
		"major": ["Law"],
		"dates": 2005 - 2008,
		"url": "http://www.law.ufl.edu/"
	  },
	  {
		"name": "Florida State University",
		"location": "Tallahassee, Florida",
		"degree": "Bachelors of Arts",
		"major": ["Music"],
		"dates": 1996 - 2000,
		"url": "http://www.music.fsu.edu//"
	  }
	],
	"onlineCourses": [
	  {
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com",
		"certificate": ""
  	  },
  	  {
  	  	"title": "Introduction to Linux",
  	  	"school": "edX",
  	  	"dates": 2014,
  	  	"url": "https://courses.edx.org/courses/LinuxFoundationX/LFS101x/2T2014/info",
        "certificate": "/images/IntroToLinuxCertificate.pdf"
  	  },
  	  {
  	  	"title": "Engineering Software as a Service",
  	  	"school": "edx",
  	  	"dates": 2014,
  	  	"url": "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
        "certificate": "/images/SaasCertificate.pdf"
  	  }
	]
};


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employerAndTitle = formattedEmployer + formattedJobTitle;
		$(".work-entry:last").append(employerAndTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
}

function displayHeader(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", "/../images/fry.jpg");

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedWebsite);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
    $("#header").append(formattedPic);
    $("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	  $("#skills").append(formattedSkill);
	}
}

displayHeader();
displayWork();


/** 
var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskills = "<li class='flex-item'><span class='white-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var internationalizeButton


*/







































