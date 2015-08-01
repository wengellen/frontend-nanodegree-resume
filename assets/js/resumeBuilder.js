
var work = {
    "jobs" : [
        {
            "employer": "Dax Solutions",
            "title": "Flex Developer",
            "location": "Los Angeles",
            "dates": "August, 2010 - July, 2012",
            "description": "Here are some description and responsibilities"
        },
        {
            "employer": "Riot Games",
            "title": "Flash/Flex Developer",
            "location": "Los Angeles",
            "dates": "Jan, 2010 to July, 2010",
            "description": "Here are some description and responsibilities"
        },
        {
            "employer": "Petrol Advertising",
            "title": "Flash Developer",
            "location": "Los Angeles",
            "dates": "August, 2008 to October, 2008",
            "description": "Here are some description and responsibilities"
        },
        {
            "employer": "Imperial Media",
            "title": "Flash Developer",
            "location": "Santa Monica",
            "dates": "Jan, 2007 to July, 2008",
            "description": "Here are some description and responsibilities"
        },
        {
            "employer": "Davis Merchandising",
            "title": "Web Master",
            "location": "Los Angeles",
            "dates": "Jan, 2006 to June, 2006",
            "description": "Here are some description and responsibilities"
        }
    ]
};

var projects = {
     "projects" : [
             {
                "title": "Koda Madison",
                "dates": "Jan, 2005",
                "description": "Flex and Flex developer for in store purchase",
                "images": [
                        "images/imperial-small.jpg",
                        "images/kodamadison-small.jpg",
                        "images/crankmedia-small.jpg"
                    ]

             },
             {
                 "title": "Dax Solution Content Management Website",
                 "dates": "August, 2010 - July, 2012",
                 "description": "Flex Developor",
                 "images":
                     [
                         "images/moma-small.jpg",
                         "images/space-small.jpg",
                         "images/tennis-small.jpg"
                     ]
             }
        ]
};


var bio = {
    "name" : "yilun weng",
    "role" : "Front End Developer",
    "contacts" : {
        "mobile": "3103705656",
        "email": "wengellen@gmail.com",
        "github": "wengellen",
        "twitter": "wengellen",
        "location": "san francisco"
    },
    "welcomeMessage": "Welcome",
    "skills" : ['awesomeness', 'programming', 'teaching', 'JS'],
    "biopic": "images/me.jpg"
};

var education = {
    "schools": [
        {   "name" : "The Art Institute of California",
            "location" : "Santa Monica, California",
            "degree": "Associate of Arts",
            "majors":
                [
                    "Interactive Media"
                ],
            "dates" : 2005,
            "url": ""

        },
        {   "name" : "San Jose States University",
            "location" : "San Jose, California",
            "degree": "Bachelor of Arts",
            "majors": ["Advertising"],
            "dates" : 1998,
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Syntax",
            "school" : "Code School",
            "dates" : 2015,
            "url" :"http://www.udacity.com/course/ue804"
        },
        {
            "title": "Javascript Syntax",
            "school" : "Coursera",
            "dates" : 2015,
            "url" :"http://www.udacity.com/course/ue804"
        },
        {
            "title": "Javascript Syntax",
            "school" : "Udacity",
            "dates" : 2015,
            "url" :"http://www.udacity.com/course/ue804"
        }
    ]
};


function inName() {
    var oldName = $('#name').text();
    var newName;
    var namesArr = oldName.split(" ");
    namesArr[0] = namesArr[0].slice(0, 1).toUpperCase() +
    namesArr[0].slice(1).toLowerCase();
    namesArr[1] = namesArr[1].toUpperCase();
    newName = namesArr.join(" ");
    return newName;
}


education.display = function(){
    if(education.schools.length > 0) {
        for(i in education.schools) {
            var school = education.schools[i];
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName,
                formattedSchoolDegree,
                formattedSchoolDates,
                formattedSchoolLocation,
                formattedSchoolMajor;
            formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
            formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
            formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

            $('.education-entry:last').append(formattedSchoolName);
            $('.education-entry:last').append(formattedSchoolDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolLocation);

            for(i in education.schools.majors) {
                var major = education.schools.majors[i];
                formattedSchoolMajor = HTMLschoolMajor.replace('%data%', major);
                $('.education-entry:last').append(formattedSchoolMajor);
            }
        }

        $('.education-entry:last').append(HTMLonlineClasses);

        for(i in education.onlineCourses) {
            var course = education.onlineCourses[i];
            var formattedCourseTitle,
                formattedCourseSchool,
                formattedCourseDates,
                formattedCourseUrl;

            formattedCourseTitle = HTMLonlineTitle.replace('%data%', course.title);
            formattedCourseSchool = HTMLonlineSchool.replace('%data%', course.school);
            formattedCourseDates = HTMLonlineDates.replace('%data%', course.dates);
            formattedCourseUrl = HTMLonlineURL.replace('%data%', course.url);

            $('.education-entry:last').append(formattedCourseTitle);
            $('.education-entry:last').append(formattedCourseSchool);
            $('.education-entry:last').append(formattedCourseDates);
            $('.education-entry:last').append(formattedCourseUrl);
        }
    }
};



bio.display = function() {

    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg)

    if(bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(item){
            var formattedSkills = HTMLskills.replace('%data%', item);
            $('#skills').append(formattedSkills);
        })
    }

    var formattedContact,
        formattedMobile,
        formattedEmail,
        formattedTwitter,
        formattedGithub,
        formattedBlog,
        formattedLocation;

    formattedContact = HTMLcontactGeneric.replace('%contact%', 'ms.');
    formattedContact = formattedContact.replace('%data%', bio.name);
    formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
    formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);


    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);

    $('#footerContacts').append(formattedContact);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedBlog);
    $('#footerContacts').append(formattedLocation);
};



work.display = function(){
    if(work.jobs.length > 0){
        for(var id in work.jobs) {
            var job = work.jobs[id];
            $('#workExperience').append(HTMLworkStart);
            var formatedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formatedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            var formatedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
            var formatedWorkDates = HTMLworkDates.replace('%data%', job.dates);
            var formatedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formatedWorkEmployer.concat(formatedWorkTitle));
            $('.work-entry:last').append(formatedWorkDates);
            $('.work-entry:last').append(formatedWorkLocation);
            $('.work-entry:last').append(formatedWorkDescription);
        }
    }
};


projects.display = function(){
    for(i in projects.projects) {
      $('#projects').append(HTMLprojectStart);
        var project = projects.projects[i];
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(formattedProjectDates);
        $('.project-entry:last').append(formattedProjectDescription);

        if(project.images.length > 0) {
            for (i in project.images) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', project.images[i]);
                $('.project-entry:last').append(formattedProjectImage);
            }
        }
    }
};

$(document).ready(function(){
    bio.display();
    projects.display();
    work.display();
    education.display();

    $('#main').append(internationalizeButton);
    $('#mapDiv').append(googleMap);
});




