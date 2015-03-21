// TODO:
//   1.  Continue refactoring the SVG portion to use Knockout.js.
//   2.  Fix position the header and footer
//   3.  Fix position the contact icons to the right side of the page.
//   4.  Add fullpage.js to enable scrolling between sections.
//   5.  Remove show whole resume/back button
//   6.  Add education chart, chart.js looks promising

var projects = [
		{
			title: "Etch-A-Sketch",
			dates: "2014",
			description: "Draw your design on the gray box then resize the pixels in the box!",
			image: "images/Etch-A-Sketch.png",
			url: "https://github.com/MimiBambino/Etch-A-Sketch",
			demo: "http://mimibambino.github.io/Etch-A-Sketch/"
		},
		{
			title: "Interactive Resume",
			dates: "2014",
			description: "You're looking at it.  This resume was build with JavaScript, jQuery and Bootstrap.",
			image: "images/IR.jpg",
			url: "https://github.com/MimiBambino/InteractiveResume",
			demo: "http://mimibambino.github.io/InteractiveResume/"
		},
		{
			title: "Custom Meme Maker",
			dates: "2014",
			description: "Create your own meme and save it to your computer.",
			image: "images/johnnyMeme.png",
			url: "https://github.com/MimiBambino/MemeMaker",
			demo: "http://mimibambino.github.io/MemeMaker/"
		}
	];

var work = [
	{
		job: "lawyer",
		employer: "Case, Lombardi &amp; Pettit",
		title: "Attorney",
		location: "Honolulu, Hawaii",
		dates: "2008 &#151; 2010",
		description: "I began my legal career as a bankruptcy and business litigation attorney during the Summer of 2008. About 2 months after I began my career, the financial crisis hit. As a result, I was quickly indoctrinated in the inner workings of business reorganization, corporate board restructuring, and corporate finance as I advised and represented business clients on their rights under federal bankruptcy law as corporate creditors."
	},
	{
		job: "navy",
		employer: "United States Navy",
		title: "Naval Officer",
		locations: ["Norfolk, Virginia", "Mediterranean Sea", "North Sea", "Indian Ocean", "Arabian Gulf"],
		dates: "2001 &#151; 2005",
		description: "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including missiles) and installation and use of all system software.  I served in the Arabian Gulf, Indian Ocean, Mediterranean Sea and the North Sea."
	}
];
var law = {
		school: "University of Florida",
		degree: "Juris Doctor",
		major: "Law",
		dates: "2005 &#151; 2008",
		url: "http://www.law.ufl.edu/",
};
var music =	{
		school: "Florida State University",
		degree: "Bachelor of Arts",
		major: "Music",
		dates: "1996 &#151; 2000",
		url: "http://www.music.fsu.edu//",
};

var moocs = [
		{
		title: "Object-Oriented JavaScript",
		school: "Udacity",
		dates: 2014,
		url: "",
		certificate: "images/htmlCertificate.pdf"
		},
		{
		title: "Website Performance Optimization",
		school: "Udacity",
		dates: 2014,
		url: "",
		certificate: ""
		},
		{
		title: "JavaScript Design Patterns",
		school: "Udacity",
		dates: 2015,
		url: "",
		certificate: ""
		},
		{
		title: "Front End Web Developer Nanodegree",
		school: "Udacity",
		dates: 2015,
		url: "http://www.udacity.com",
		certificate: ""
		},
		{
		title: "Data Analysis and Statistical Inference",
		school: "Coursera",
		dates: 2015,
		url: "",
		certificate: ""
		},
		{
		title: "The Analytics Edge",
		school: "edX",
		dates: 2015,
		url: "",
		certificate: ""
		},
		{
		title: "Introduction to Linux",
		school: "edX",
		dates: 2014,
		url: "https://courses.edx.org/courses/LinuxFoundationX/LFS101x/2T2014/info",
		certificate: "images/IntroToLinuxCertificate.pdf"
		},
		{
		title: "Engineering Software as a Service",
		school: "edX",
		dates: 2014,
		url: "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
		certificate: "images/SaasCertificate.pdf"
		}
];
var bio = {
	name: "Cynthia O'Donnell",
	role: "Web Developer &amp; Lifelong Learner",
	contacts: {
		website : "http://www.mimibambino.com",
		email : "mailto:mimibambino@gmail.com",
		twitter : "http://www.twitter.com/mimibambino",
		github : "https://www.github.com/MimiBambino",
		linkedin : "http://www.linkedin.com/pub/cynthia-o-donnell/a2/719/7a0/",
		location : "Naples, Italy"
	},
	skills: ["r", "css", "html5", "python", "javascript", "business law", "management", "jasmine testing"],
	image: "images/Cynthia.jpg",
	blog: [
	{
		title: "Why Web Development?",
		text:  "Why would an former-lawyer, former-naval officer become a Front End Web Developer?  Well, I've pretty much loved the internet since I first experienced it in the 90s. It felt like I suddenly had access to all of the information I could have ever wanted.  Twenty years later, it's even more true. However, I have been growing increasingly critical about how that information is organized.  I started learning about computer programming and web development because I wanted to help make the information already available online more useful by building web applications that find and display data in a more user-friendly way."
	},
	{
		title: "What is MimiBambino?",
		text: "Why MimiBambino? It makes me smile. When my son was a baby, he called me Mimi. So for a few years, I <em>was</em> Mimi. He was the <em>bambino</em>. Now no one calls me Mimi and he is no longer a baby. To my delight, when I started creating handles and user accounts, I found that MimiBambino was always available. MimiBambino reminds me of that sweet, tender time when for most of the day it was just me and my baby."
	}
	],
	aboutDeveloper: "Why would a former-lawyer, former-naval officer become a Front End Web Developer?  Well, I've pretty much loved the internet since I first experienced it in the 90s. It felt like I suddenly had access to all of the information I could have ever wanted.  Twenty years later, it's even more true. However, I have been growing increasingly critical about how that information is organized.  I started learning about computer programming and web development because I wanted to help make the information already available online more useful by building web applications that find and display data in a more user-friendly way.",
	aboutMimi: "Why MimiBambino? It makes me smile. When my son was a baby, he called me Mimi. So for a few years, I <em>was</em> Mimi. He was the <em>bambino</em>. Now no one calls me Mimi and he is no longer a baby. To my delight, when I started creating handles and user accounts, I found that MimiBambino was always available. MimiBambino reminds me of that sweet, tender time when for most of the day it was just me and my baby.",
};

var viewModel = function(){
	// Save a reference to the ViewModel object.
	var self = this;

	self.projects = projects;
	self.work = work;
	self.law = law;
	self.music = music;
	self.bio = bio;
	self.moocs = moocs;

	self.showMain = ko.observable(true);
	self.showProjects = ko.observable(false);
	self.showWork = ko.observable(false);
	self.showEducation = ko.observable(false);
	self.showSkills = ko.observable(false);
	self.showAbout = ko.observable(false);
	self.showButton = ko.observable(true);

	self.showSection = function() {

	};
	self.educationClick = function() {
		self.showMain(false);
		self.showEducation(true);
		self.showButton(true);
	};

	// Keep track of what part of resume is visible
	self.projectVisible = ko.observable(false);
	self.toggleProject = function(){
		if (self.projectVisible) {
			self.projectVisible(false);
		} else {
			self.projectVisible(true);
		}
	};
};

/**
 * Custom binding for fade in effect on instructions
 */
ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
    },
    update: function(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
};

ko.applyBindings( new viewModel() );