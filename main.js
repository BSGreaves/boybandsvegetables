// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var bandElement = document.getElementById("boy-bands");
var veggieElement = document.getElementById("vegetables");

for (var i = 0; i < bands.length; i++) {
	bandElement.innerHTML += "<div>" + bands[i] + "</div>" + "<br>";
	veggieElement.innerHTML += "<div>" + vegetables[i] + "</div>" + "<br>";
}





