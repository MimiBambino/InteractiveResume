var name = "Cynthia O'Donnell";
var role = "Front End Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderName.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);