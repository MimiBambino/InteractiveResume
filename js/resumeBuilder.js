var name = "Cynthia O'Donnell";
var role = "Front End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.message);
$("#main").append(bio.skills);

var work = {
	"jobs": [
	{
	    "employer": "United States Navy",
	    "title": "Navy Surface Warfare Officer",
	    "location": "Norfolk, Virginia",
	    "dates": "2001 - 2005",
	    "description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I 
	    supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and 
	    use of all onboard missile launching system hardware (including all missiles) and installation 
	    and use of system software."
	},
	{
	    "employer": "Case, Lombardi and Pettit",
	    "title": "Attorney",
	    "location": "Honolulu, Hawaii",
	    "dates": "2008 - 2010",
	    "description": "As a bankruptcy and business litigation attorney, I represented individual 
	    debtors in personal bankruptcy proceedings.  I also advised business clients on their rights 
	    under federal bankruptcy law as creditors and I participated in the successful reorganization 
	    of companies emerging from bankruptcy protection."
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
	"name": "Cynthia",
	"role": role,
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
	]
},
	"onlineCourses": [
	  {
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com"
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
}	