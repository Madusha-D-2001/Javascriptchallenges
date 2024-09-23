var name1 = prompt("what is your first name?")
var name2 = prompt("what is your middle name?")
var name3 = prompt("what is your last name?")

var upperCase = name1.slice(0,1).toUpperCase();//fist name
var lowerCase = name1.slice(1,name1.length).toLowerCase();
var complete1 = upperCase + lowerCase;

var upperCase2 = name2.slice(0,1).toUpperCase();//middle name
var lowerCase2 = name2.slice(1,name2.length).toLowerCase();
var complete2 = upperCase2 + lowerCase2;

var upperCase3 = name3.slice(0,1).toUpperCase();//last name
var lowerCase3 = name3.slice(1,name3.length).toLowerCase();
var complete3 = upperCase3 + lowerCase3;



 alert("We got your full name :" + " " + complete1 + " " +complete2 + " " +complete3);
