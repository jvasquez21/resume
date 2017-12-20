var bio = {
    "name" : "Julia Vasquez",
    "role" : "Computer Science",
    "contacts" : {
    "email" : "john@gmail.com",
    "mobile" : "655-555-5555"
    },
    "welcomeMsg" : "Welcome to my interactive webpage",
    "skills" : ["C", "Java", "Perl", "Linux"]
};

var work = {
    "jobs" : [
    {
        "employer" : "bell",
        "title" : "intern",
        "dates" : "jan",
        "desciption" : "coffee"
    },
    {
        "employer" : "ross",
        "title": "cashier"
    }
        ]
    };
var education = {
    "schools" : [
    {
        "name" : "UTSA",
        "city" : "San Antonio",
        "degree" : "BS",
        "major" : "Computer Science"
    }
        ]
    };
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0){ 
    $("#header").append(HTMLskillsStart);
    for(i in bio.skills){ 
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
    }
}

function displayWork(){

for(i in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    }
}displayWork();
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#header").append(formattedEmail);
//$("#header").append(formattedSkills);
//$("#header").append(formattedMobile);
//$("#header").append(formattedWelcomeMsg);
/* accomplishes the same thing as above
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
*/
