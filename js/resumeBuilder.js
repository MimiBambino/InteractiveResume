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
		"skills": {
			"id": "skills-circle",
			"text_x": 65,
			"text_y": 115,
			"text": "Skills",
			"color": "contrasting-1"
		},
		"about": {
			"id": "about-circle",
			"text_x": 60,
			"text_y": 90,
			"text": "About",
			"moreText": "<text x='80' y='130' width='3cm' height='3cm' font-size='35' fill='white'>Me</text>",
			"color": "primary"
		}
	},
	display: function(){
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
			$('#about').hide();
		});
		$("#work-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#work').show();
			$('#education').hide();
			$('#projects').hide();
			$('#skills').hide();
			$('#about').hide();
		});
		$("#projects-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#projects').show();
			$('#education').hide();
			$('#work').hide();
			$('#skills').hide();
			$('#about').hide();
		});
		$("#skills-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#skills').show();
			$('#education').hide();
			$('#work').hide();
			$('#projects').hide();
			$('#about').hide();
		});
		$("#about-circle").on("click", function(){
			$(".main").hide();
			$('button').html("Home").removeClass('show-all').addClass('home');
			$('#about').show();
			$('#mapDiv').show();
			$('#education').hide();
			$('#work').hide();
			$('#projects').hide();
			$('#skills').hide();
		});
	}
};

var bio = {
	"name": "Cynthia O'Donnell",
	"role": "JavaScript Web Developer",
	"welcomeMessage": "<p>Welcome to my resume!  Please click on an area of interest for more information.</p>",
	"contacts": {
		"website" : "www.mimibambino.com", 
		"email" : "mimibambino@gmail.com",
		"twitter" : "@mimibambino",
		"github" : "MimiBambino",
		"linkedin" : "Cynthia O'Donnell",
		"location" : "Naples, Italy"
	},
	"skills": ["css", "php", "html5", "python", "ruby/rails", "javascript", "business law", "management", "paper airplanes", "conversational german"], 
	"image": "images/Cynthia.jpg",
	"blog": [
	{	
		"title": "Why Web Development?",
		"text":  "Why would an former-lawyer, former-naval officer become a Front End Web Developer?  Well, I've pretty much loved the internet since I first experienced it in the 90s. It felt like I suddenly had access to all of the information I could have ever wanted.  Twenty years later, it's even more true. However, I have been growing increasingly critical about how that information is organized.  I started learning about computer programming and web development because I wanted to help make the information already available online more useful by building web applications that find and display data in a more user-friendly way."
	},
	{
		"title": "What is MimiBambino?",
		"text": "Why MimiBambino? It makes me smile. When my son was a baby, he called me Mimi. So for a few years, I <em>was</em> Mimi. He was the <em>bambino</em>. Now no one calls me Mimi and he is no longer a baby. To my delight, when I started creating handles and user accounts, I found that MimiBambino was always available. MimiBambino reminds me of that sweet, tender time when for most of the day it was just me and my baby."
	}
	],
	"aboutDeveloper": "Why would a former-lawyer, former-naval officer become a Front End Web Developer?  Well, I've pretty much loved the internet since I first experienced it in the 90s. It felt like I suddenly had access to all of the information I could have ever wanted.  Twenty years later, it's even more true. However, I have been growing increasingly critical about how that information is organized.  I started learning about computer programming and web development because I wanted to help make the information already available online more useful by building web applications that find and display data in a more user-friendly way.",
	"aboutMimi": "Why MimiBambino? It makes me smile. When my son was a baby, he called me Mimi. So for a few years, I <em>was</em> Mimi. He was the <em>bambino</em>. Now no one calls me Mimi and he is no longer a baby. To my delight, when I started creating handles and user accounts, I found that MimiBambino was always available. MimiBambino reminds me of that sweet, tender time when for most of the day it was just me and my baby.",
	"displayBlog": function(){
		for (var i in bio.blog) {
			var selector = bio.blog[i];
			if (i % 2 === 0) {
				var blogPost = blogPostEven.replace('%title%', selector.title).replace('%index%', i).replace('%data%', selector.text);
				$(".blog-col-even").append(blogPost);
			}
			if (i % 2 === 1) {
				var blogPost = blogPostOdd.replace('%title%', selector.title).replace('%index%', i).replace('%data%', selector.text);
				$(".blog-col-odd").append(blogPost);
			}
		}
	},
	displayHeader: function(){
		var formattedName = headerName.replace("%data%", bio.name);
		var formattedRole = headerRole.replace("%data%", bio.role);
		$("header").prepend(formattedRole);
		$("header").prepend(formattedName);
		//$("header").append(headerContacts);
		var formattedContactBar = headerContacts.replace("%website%", bio.contacts["website"]).replace("%email%", bio.contacts["email"]).replace("%github%", bio.contacts["github"]);
		$("header").append(formattedContactBar);
	},
	displayContacts: function(){
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
	displaySkills: function(){
		var formattedPic = HTMLbioPic.replace("%data%", bio.image);
		$(".biopic").append(formattedPic);
		for (var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$(".skill-list").append(formattedSkill);
		}
		$("#skills").hide();
	},
	displayAbout: function(){
		$('.developer').append(bio.aboutDeveloper);
		$('.mimibambino').append(bio.aboutMimi);
		$('#about').hide();
		$('#mapDiv').hide();
	}
};

bio.displayBlog();

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
		"title": "Intro to HTML and CSS",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com",
		"certificate": "images/htmlCertificate.pdf"
		},
		{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com",
		"certificate": "images/jsCertificate.pdf"
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
	display: function(){
		$(".Programming-holder").append(educationStart);
		for (var i in education.onlineCourses){
			var oC = education.onlineCourses[i];
			var formattedSchool = onlineSchool.replace("%title%", oC["title"]).replace("%#%", oC["url"]).replace("%school%", oC["school"]).replace("#", oC.certificate);
			$(".programming-col").append(formattedSchool);
			$(".programming-col").append(endOnline);
		}
		for (var i in education.schools) {
			var school = education.schools[i];
			var formattedSchoolStart = schoolStart.replace("%major%", school.major).replace("%major%", school.major);
			var selector = "." + school.major + "-holder";
			$(selector).append(formattedSchoolStart);
			var formattedDegree = degreeString.replace("%degree%", school.degree);
			var formattedSchool = schoolString.replace("%school%", school.name).replace("%#%", school.url);
			var formattedLocation = locationString.replace("%dates%", school.dates).replace("%location%", school.location);
			var formattedSchoolString = formattedDegree + formattedSchool + formattedLocation;
			selector = "." + school.major + "-col";
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
		"dates": "2008 &#151; 2010",
		"description": "I began my legal career as a bankruptcy and business litigation attorney during the Summer of 2008. About 2 months after I began my career, the financial crisis hit. As a result, I was quickly indoctrinated in the inner workings of business reorganization, corporate board restructuring, and corporate finance as I advised and represented business clients on their rights under federal bankruptcy law as corporate creditors."
	},
	{
		"job": "navy",
		"employer": "United States Navy",
		"title": "Naval Officer",
		"locations": ["Norfolk, Virginia", "Mediterranean Sea", "North Sea", "Indian Ocean", "Arabian Gulf"],
		"dates": "2001 &#151; 2005",
		"description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including missiles) and installation and use of all system software.  I served in the Arabian Gulf, Indian Ocean, Mediterranean Sea and the North Sea."
	}
	],
	"display": function(){
		for (var i in work.jobs){
			var job = work.jobs[i];
			formattedWork = workStart.replace("%job%", job.job).replace("%title%", job.title).replace("%employer%", job.employer).replace("%description%", job.description);
			var selector = "." + job.job + "-holder";
			$(selector).append(formattedWork);
		}
		$("#work").hide();
	}
};

var projects = {
	"project": [
	{
		"title": "Etch-A-Sketch",
		"dates": "2014",
		"description": "Draw your design on the gray box then resize the pixels in the box!",
		"images": "images/Etch-A-Sketch.png", 
		"url": "https://github.com/MimiBambino/Etch-A-Sketch",
		"demo": "http://mimibambino.github.io/Etch-A-Sketch/"
	},
	{
		"title": "Interactive Resume",
		"dates": "2014",
		"description": "You're looking at it.  This resume was build with JavaScript, jQuery and Bootstrap.",
		"images": "images/IR.jpg",
		"url": "https://github.com/MimiBambino/InteractiveResume",
		"demo": "http://mimibambino.github.io/InteractiveResume/"
	},
	{
		"title": "Custom Meme Maker",
		"dates": "2014",
		"description": "Create your own meme and save it to your computer.",
		"images": "images/johnnyMeme.png",
		"url": "https://github.com/MimiBambino/MemeMaker",
		"demo": "http://mimibambino.github.io/MemeMaker/"
	}
	],
	"display": function() {
		for (var i in projects.project) {
			var project = projects.project[i];
			var formattedProject = projectStart.replace("%demo%", project.demo).replace("%image%", project.images).replace("%description%", project.description).replace("%url%", project.url).replace("%title%", project.title).replace("%description%", project.description);
			$("#projects").append(formattedProject);
		}
		$("#projects").hide();
	}
};

bio.displayHeader();
SVG.display();
education.display();
work.display();
projects.display();
bio.displaySkills();
SVG.click();
bio.displayAbout();

$("button").on("click", function() {
	if ($("button").hasClass('home')) {
		$(".main").show();
		$("#education").hide();
		$("#work").hide();
		$("#projects").hide();
		$("#skills").hide();
		$("#about").hide();
		$("#mapDiv").hide();
		$('button').html("Show Whole Resume").addClass('show-all').removeClass('home');
	}
	else {
		$("#education").show();
		$("#work").show();
		$("#projects").show();
		$("#skills").show();
		$("#about").show();
		$("#mapDiv").show();
		$('button').html("Home").removeClass('show-all').addClass('home');
	}
});
