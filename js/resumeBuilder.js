var bio = {
	"name": "Cynthia O'Donnell",
	"role": "Front End Web Developer",
	"welcomeMessage": "<p>Welcome to my resume!  Please click on an area of interest for more information.</p>",
	"contacts": {
		"website" : "www.mimibambino.com", 
		"email" : "mimibambino@gmail.com",
		"github" : "MimiBambino",
		"twitter" : "@mimibambino",
		"location" : "Naples, Italy"
	},
	"skills": ["awesomeness", "programming", "web development", "paper airplanes"], 
	"image": "images/Cynthia.jpg",
	"displayHeader": function(){
		var formattedName = headerName.replace("%data%", bio.name);
		var formattedRole = headerRole.replace("%data%", bio.role);
		$("header").prepend(formattedRole);
		$("header").prepend(formattedName);
	},
	"displayContacts": function(){
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$(".contacts").append(HTMLcontactsStart);
		$("#contacts").append(formattedEmail);
		$("#contacts").append(formattedWebsite);
		$("#contacts").append(formattedGithub);
		$("#contacts").append(formattedTwitter);
		$("#contacts").append(formattedLocation);
	},
	"displaySkills": function(){

		$(".skills").append(HTMLskillsStart);

		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	},
	"displayPic": function(){
		var formattedPic = HTMLbioPic.replace("%data%", bio.image);
		$(".pic").append(formattedPic);
	}
};

var education = {
	"schools": [
		{
		"name": "University of Florida",
		"location": "Gainesville, Florida",
		"degree": "Juris Doctor", 
		"major": "Law",
		"dates": "2005 - 2008",
		"url": "http://www.law.ufl.edu/"
		},
		{
		"name": "Florida State University",
		"location": "Tallahassee, Florida",
		"degree": "Bachelor of Arts",
		"major": "Music",
		"dates": "1996 - 2000",
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
		"certificate": "images/IntroToLinuxCertificate.pdf"
		},
		{
		"title": "Engineering Software as a Service",
		"school": "edx",
		"dates": 2014,
		"url": "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
		"certificate": "images/SaasCertificate.pdf"
		}
	],
	"display": function(){
		$("#education").append(educationStart);
		for (var i in education.onlineCourses){
			var oC = education.onlineCourses[i];
			var formattedTitleAndSchool = onlineTitleAndSchool.replace("%title%", oC["title"]).replace("%#%", oC["url"]).replace("%school%", oC["school"]);
			$(".programming-col").append(formattedTitleAndSchool);
			if (oC.certificate){
				var formattedCertificate = HTMLcerficate.replace("#", oC.certificate);
				$(".programming-col").append(formattedCertificate);
			}
		}
		for (var i in education.schools) {
			var school = education.schools[i];
			var formattedSchoolString = schoolString.replace("%major%", school.major).replace("%major%", school.major);
			var formattedDegreeLocationDate = degreeLocationDate.replace("%degree%", school.degree).replace("%school%", school.name).replace("%#%", school.url).replace("%dates%", school.dates).replace("%location%", school.location);
			$("#education").append(formattedSchoolString);
			var selector = "." + school.major + "-col";
			$(selector).append(formattedDegreeLocationDate);
		}
	}
}

var SVG = {
	"circle": {
		"education": {
			"id": "education-circle",
			"text_x": 28,
			"text_y": 115,
			"text": "Education",
			"color": "primary"
		},
		"work": {
			"id": "work-circle",
			"text_x": 60,
			"text_y": 90,
			"text": "Work",
			"moreText": "<text x='20' y='130' width='3cm' height='3cm' font-size='35' fill='white'>Experience</text>",
			"color": "gray"
		},
		"projects": {
			"id": "projects-circle",
			"text_x": 40,
			"text_y": 115,
			"text": "Projects",
			"color": "analgous"
		},
		"contacts": {
			"id": "contacts-circle",
			"text_x": 35,
			"text_y": 115,
			"text": "Contacts",
			"color": "primary"
		},
		"skills": {
			"id": "skills-circle",
			"text_x": 65,
			"text_y": 115,
			"text": "Skills",
			"color": "contrasting-1"
		}
	},
	"circleDisplay": function(){
		// function takes one of the resume sections as the title parameter
		for (var i in SVG.circle){
			var svg = SVG.circle[i];
			// set caption to the appropriate property of SVG class 
			
			// insert appropriate SVG properties into the HTML helper
			var SVGstring = SVGcircleHelper + SVGtext;
			SVGstring = SVGstring.replace("%class%", svg["text"]).replace("%color%", svg["color"]).replace("%id%", svg["id"]).replace("%text_x%", svg["text_x"]).replace("%text_y%", svg["text_y"]).replace("%text%", svg["text"]).replace ("class", svg["id"]);
			if (svg["moreText"]){
				SVGstring = SVGstring + svg["moreText"];
			}
			SVGstring += SVGend;
			$(".main ul").append(SVGstring);
		}
		HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$(".main").prepend(HTMLWelcomeMsg);
	},
};

var work = {
	"jobs": [
	{
		"employer": "Case, Lombardi and Pettit",
		"title": "Attorney",
		"location": "Honolulu, Hawaii",
		"dates": "2008 - 2010",
		"description": "I began my legal career as a bankruptcy and business litigation attorney during the Summer of 2008. About 2 months after I began my career, the financial crisis hit. As a result, I was quickly indoctrinated in the inner workings of business reorganization, corporate board restructuring, and corporate finance as I advised and represented business clients on their rights under federal bankruptcy law as corporate creditors."
	},
	{
		"employer": "United States Navy",
		"title": "Navy Surface Warfare Officer",
		"locations": ["Norfolk, Virginia", "Mediterranean Sea", "North Sea", "Indian Ocean", "Arabian Gulf"],
		"dates": "2001 - 2005",
		"description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including missiles) and installation and use of all system software.  I served in the Arabian Gulf, Indian Ocean, Mediterranean Sea and the North Sea."
	}
	],
	"display": function(){
		for (var i in work.jobs){
			var job = work.jobs[i];
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
			var employerAndTitle = formattedEmployer + formattedJobTitle;
			$(".work-entry:last").append(employerAndTitle);

			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(formattedLocation);
		}
	}
};

var projects = {
	"project": [
	{
		"title": "Mockup Portfolio",
		"dates": "2014",
		"description": "A single page website made to showcase all of my projects",
		"images": ["images/Brigitte.jpg", "images/Grandpa.jpg", "images/Johnny.jpg"]
	},
	{
		"title": "Interactive Resume",
		"dates": "2014",
		"description": "A resume made with javascript, jQuery and JSON",
		"images": ["images/fry.jpg"]
	}
	],
	"display": function() {
		for (var i in projects.project) {
			var project = projects.project[i];
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedDescription);
			if (project.images.length > 0) {
				for (var image in project.images) {
					var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

/*$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});*/


bio.displayHeader();

//TODO:  Enable footer button 
//  if .main is showing:
//		button text="Show Whole Resume"
//			on click show all resume sections
//	else  
//		button text = "Home"
//		on click 
//			display .main
//			hide everything else
//			button text = "Show Whole Resume"

//TODO:  Revise calls to display to call display on click of each item.


SVG.circleDisplay();
//$('#education').hide();

$("#education-circle").on("click", function(){
	$(".main").hide();
	$('button').html("Home").removeClass('show').addClass('home');
	$('#education').show();
	});

$("button").on("click", function() {
	if ($("button").hasClass('home')) {
		$(".main").show();
		$("#education").hide();
		$('button').html("Show Whole Resume").addClass('show').removeClass('home');
	}
	else {
		$(".main").hide();
		$("#education").show();
		$(".work-data").show();
		$(".projects-data").show();
		$(".skills-data").show();
		$(".contact-data").show();
		$(".map").show();
		$('button').html("Home").removeClass('show').addClass('home');
	}
});

education.display();

//projects.display();

//$("#mapDiv").append(googleMap);



