/*
Bio
*/
var bio =
{
	"name" : "Veronica Artof",
	"role" : "Web Developer" ,
	"contacts" : {
		"mobile" : "(949) 683-8376",
		"email": "veronica.artof@gmail.com",
		"github" : "vartof",
		"twitter" : "@vartof",
		"location" : "Los Angeles"
	},
	"welcomeMessage" : "Thank you for visiting! Feel free to contact me anytime.",
	"skills" : [
		"Web Stuff", "SQL", ".NET", "Scrum", "Getting things done"
	],
	"bioPic" : "images/veronica.jpg"
}

bio.display = function() {

	// Header
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// Contacts
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBio = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBio);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	// Skills
	if (bio.skills.length > 0)
	{
		$("#header").append(HTMLskillsStart);
		for (skillNumber in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skillNumber]));
		}
	}
};

/*
Education
*/
var education = {
	"schools": [
	{
		"name": "UCI",
		"location": "Irvine, CA, US",
		"degree": "Masters",
		"majors": ["CompSci"],
		"dates": 2004,
		"url": "http://uci.edu"
	},
	{
		"name": "IPN",
		"location": "Mexico City, Mexico",
		"degree": "BS",
		"majors": ["Electrical Engineering"],
		"dates": 1997,
		"url": "http://ipn.mx.edu"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
	}
	]
}

education.display = function() {

	for (schoolNumber in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolNumber].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolNumber].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolNumber].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolNumber].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolNumber].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (onlineCourseNumber in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourseNumber].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourseNumber].school);
		$(".education-entry:last").append(formattedOnlineCourseTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourseNumber].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourseNumber].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

/*
Work
*/
var work = {
	"jobs": [
		{
			"employer": "Ixia",
			"location": "Calabasas, CA",
			"title": "Sr. Software Engineer",
			"dates": "February 2005 - August 2007",
			"description": "Responsible for contributing to the design and development of Test Conductor.  Test Conductor is a distributed system that allows multiple users to perform automated network testing by using test sets and baselines.  Contributed to the design and development of IxProfile, a C# GUI that emulates and monitors network activity by mirroring the network behavior of other applications."
		},
		{
			"employer": "Bank of America",
			"location": "Agoura Hills, CA",
			"title": "Software Development Lead",
			"dates": "August 2007 - Present",
			"description": "Responsible for leading development of financial applications for Loss Forecasting.  Currently working with the Oversight team.  The Oversight application automates the calculation of losses in our HFI portfolio and calculates FFIEC ChargeOffs and TDR Reserves."
		}
	]
}

work.display = function() {
	for (jobNumber in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobNumber].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobNumber].title);

		$(".work-entry:last").append(formattedEmployer  + formattedTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobNumber].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobNumber].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

/*
Projects
*/
var projects = {
	"projects": [
	{
		"title": "My portfolio",
		"dates": "2015",
		"description": "This is the first portfolio I created for my nanodegree.  It was a lot of fun!",
		"images": [
			"images/project1.jpg",
			"images/project1-work.jpg"
		]
	}
	]
}

projects.display = function() {

	for (projectNumber in projects.projects) {

		// Get all formatted Titles/Dates/Descriptions
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectNumber].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projectNumber].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectNumber].description);

		// Append to HTML
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);

		// Finally append all images
		if (projects.projects[projectNumber].images.length > 0) {
			for (imageNumber in projects.projects[projectNumber].images) {
				var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[projectNumber].images[imageNumber]);
				$(".project-entry:last").append(formattedProjectImages);
			}
		}
	}
};

/*
Locationizer
*/
function locationizer(work_obj) {

	var myLocations = new Array();

    for (jobNumber in work_obj.jobs) {
    	var currentLocation = work_obj.jobs[jobNumber].location;
        myLocations.push(currentLocation);
	}

    return myLocations;
}

/*
Display all sections of the resume
*/
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
