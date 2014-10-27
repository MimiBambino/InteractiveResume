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
	"display": function(){
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
	"click": function(){
		$("#education-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#education').show();
			$('#work').hide();
			$('#projects').hide();
			$('#skills').hide();
			$('#contacts').hide();
		});
		$("#work-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#work').show();
			$('#education').hide();
			$('#projects').hide();
			$('#skills').hide();
			$('#contacts').hide();
		});
		$("#projects-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#projects').show();
			$('#education').hide();
			$('#work').hide();
			$('#skills').hide();
			$('#contacts').hide();
		});
		$("#skills-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#skills').show();
			$('#education').hide();
			$('#work').hide();
			$('#projects').hide();
			$('#contacts').hide();
		});
		$("#contacts-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#contacts').show();
			$('#education').hide();
			$('#work').hide();
			$('#projects').hide();
			$('#skills').hide();
		});
	}
};

var bio = {
	"name": "Cynthia O'Donnell",
	"role": "Front End Web Developer",
	"welcomeMessage": "<p>Welcome to my resume!  Please click on an area of interest for more information.</p>",
	"contacts": {
		"website" : "www.mimibambino.com", 
		"email" : "mimibambino@gmail.com",
		"twitter" : "@mimibambino",
		"github" : "MimiBambino",
		"linkedin" : "Cynthia O'Donnell",
		"location" : "Naples, Italy"
	},
	"skills": ["css", "php", "html5", "python", "javascript", "business law", "management", "paper airplanes", "conversational german"], 
	"image": "images/Cynthia.jpg",
	"displayHeader": function(){
		var formattedName = headerName.replace("%data%", bio.name);
		var formattedRole = headerRole.replace("%data%", bio.role);
		$("header").prepend(formattedRole);
		$("header").prepend(formattedName);
		//$("header").append(headerContacts);
		var formattedContactBar = headerContacts.replace("%website%", bio.contacts["website"]).replace("%website%", bio.contacts["website"]).replace("%email%", bio.contacts["email"]).replace("%email%", bio.contacts["email"]).replace("%twitter%", bio.contacts["twitter"]).replace("%github%", bio.contacts["github"]).replace("%github%", bio.contacts["github"]).replace("%linkedin%", bio.contacts["linkedin"]);
		$("header").append(formattedContactBar);
	},
	"displayContacts": function(){
		var formattedWebsite = contactWebsite.replace("%data%", bio.contacts["website"]).replace("%data%", bio.contacts["website"]);
		$(".contact-list").append(formattedWebsite);
		var formattedEmail = contactEmail.replace("%data%", bio.contacts["email"]).replace("%data%", bio.contacts["email"]);
		$(".contact-list").append(formattedEmail);
		var formattedTwitter = contactTwitter.replace("%data%", bio.contacts["twitter"]);
		$(".contact-list").append(formattedTwitter);
		var formattedGithub = contactGithub.replace("%data%", bio.contacts["github"]).replace("%data%", bio.contacts["github"]);
		$(".contact-list").append(formattedGithub);
		var formattedLinkedIn = contactLinkedIn.replace("%data%", bio.contacts["linkedin"]);
		$(".contact-list").append(formattedLinkedIn);
		var formattedLocation = contactLocation.replace("%data%", bio.contacts["location"]);
		$(".contact-list").append(formattedLocation);
		$("#contacts").hide();
	},
	"displaySkills": function(){
		var formattedPic = HTMLbioPic.replace("%data%", bio.image);
		$(".biopic").append(formattedPic);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$(".skill-list").append(formattedSkill);
		}
		$("#skills").hide();
	}
};

var education = {
	"schools": [
		{
		"name": "University of Florida",
		"location": "Gainesville, Florida",
		"degree": "Juris Doctor", 
		"major": "Law",
		"dates": "2005 &#151; 2008",
		"url": "http://www.law.ufl.edu/"
		},
		{
		"name": "Florida State University",
		"location": "Tallahassee, Florida",
		"degree": "Bachelor of Arts",
		"major": "Music",
		"dates": "1996 &#151; 2000",
		"url": "http://www.music.fsu.edu//"
		}
	],
	"onlineCourses": [
		{
		"title": "Front End Developer Nanodegree",
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
		"school": "edX",
		"dates": 2014,
		"url": "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
		"certificate": "images/SaasCertificate.pdf"
		}
	],
	"display": function(){
		$(".education-row").append(educationStart);
		for (var i in education.onlineCourses){
			var oC = education.onlineCourses[i];
			var formattedTitle = onlineTitle.replace("%title%", oC["title"]);
			var formattedSchool = onlineSchool.replace("%#%", oC["url"]).replace("%school%", oC["school"]);
			var titleSchoolRow = formattedTitle + formattedSchool;
			$(".programming-col").append(titleSchoolRow);
			if (oC.certificate){
				var formattedCertificate = HTMLcerficate.replace("#", oC.certificate);
				$(".programming-col").append(formattedCertificate);
			}
		}
		for (var i in education.schools) {
			var school = education.schools[i];
			var formattedSchoolStart = schoolStart.replace("%major%", school.major).replace("%major%", school.major);
			$(".education-row").append(formattedSchoolStart);
			var formattedDegree = degreeString.replace("%degree%", school.degree);
			var formattedSchool = schoolString.replace("%school%", school.name).replace("%#%", school.url);
			var formattedLocation = locationString.replace("%dates%", school.dates).replace("%location%", school.location);
			var formattedSchoolString = formattedDegree + formattedSchool + formattedLocation;
			var selector = "." + school.major + "-col";
			$(selector).append(formattedSchoolString);
		}
		$("#education").hide();
	}
}

var work = {
	"jobs": [
	{
		"job": "lawyer",
		"employer": "Case, Lombardi &amp; Pettit",
		"title": "Attorney",
		"location": "Honolulu, Hawaii",
		"dates": "2008 - 2010",
		"description": "I began my legal career as a bankruptcy and business litigation attorney during the Summer of 2008. About 2 months after I began my career, the financial crisis hit. As a result, I was quickly indoctrinated in the inner workings of business reorganization, corporate board restructuring, and corporate finance as I advised and represented business clients on their rights under federal bankruptcy law as corporate creditors."
	},
	{
		"job": "navy",
		"employer": "United States Navy",
		"title": "Naval Officer",
		"locations": ["Norfolk, Virginia", "Mediterranean Sea", "North Sea", "Indian Ocean", "Arabian Gulf"],
		"dates": "2001 - 2005",
		"description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including missiles) and installation and use of all system software.  I served in the Arabian Gulf, Indian Ocean, Mediterranean Sea and the North Sea."
	}
	],
	"display": function(){
		for (var i in work.jobs){
			var job = work.jobs[i];
			formattedWork = workStart.replace("%job%", job.job).replace("%title%", job.title).replace("%employer%", job.employer).replace("%description%", job.description);
			$(".work-row").append(formattedWork);
		}
		$("#work").hide();
	}
};

var projects = {
	"project": [
	{
		"title": "Brigitte",
		"dates": "2012",
		"description": "A sweet little girl",
		"images": "images/Brigitte.jpg", 
		"url": "https://github.com/MimiBambino"
	},
	{
		"title": "Grandpa",
		"dates": "2010",
		"description": "The best grandpa ever.",
		"images": "images/Grandpa.jpg",
		"url": "https://github.com/MimiBambino"
	},
	{
		"title": "Johnny",
		"dates": "2010",
		"description": "This kid loves Spiderman!",
		"images": "images/Johnny.jpg",
		"url": "https://github.com/MimiBambino"
	}
	],
	"display": function() {
		for (var i in projects.project) {
			var project = projects.project[i];
			var formattedProject = projectStart.replace("%image%", project.images).replace("%description%", project.description).replace("%url%", project.url).replace("%title%", project.title);
			$("#projects").append(formattedProject);
		}
		$("#projects").hide();
	}
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});

bio.displayHeader();
SVG.display();
education.display();
work.display();
projects.display();
bio.displaySkills();
bio.displayContacts();
SVG.click();

$("#mapDiv").append(mapHeader);
$("#mapDiv").append(googleMap);

$("button").on("click", function() {
	if ($("button").hasClass('home')) {
		$(".main").show();
		$("#education").hide();
		$("#work").hide();
		$("#projects").hide();
		$("#skills").hide();
		$("#contacts").hide();
		$('button').html("Show Whole Resume").addClass('show-all').removeClass('home');
	}
	else {
		//$(".main").hide();
		$("#education").show();
		$("#work").show();
		$("#projects").show();
		$("#skills").show();
		$("#contacts").show();
		$('button').html("Home").removeClass('show-all').addClass('home');
	}
});
