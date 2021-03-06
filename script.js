//question 1
//Create an object called cat.
//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
const cat ={
	complain: function() {
		console.log("Meow!");
	}
}
//question 2
//Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
//Change its innerHTML value to "Updated heading".
const heading = document.querySelector("h3")
heading.innerHTML = `
<h3>Updated heading</h3>`;
//question 3
//Use the style property on the heading variable from the question above to change its font size to "2em".
heading.innerHTML = '
<h3 style = "font-size : 2em">Updated heading</h3>'
//question 4
//Add a class to the heading variable called subheading.
const heading = document.querySelector(".subheading");
//question 5
//Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
//Loop through the p elements and change the colour of each to "red".
const paragraphs = document.querySelector("p");
for (let i = 0; i <= paragraphs.lenght; i++) {
	paragraphs = <p style = "color : red"></p>
};
//question 6
//Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML
//to be <p>New paragraph</p> and its background colour to be yellow.
const resultContainer = document.querySelector(".results");
resultContainer.innerHTML = `
<p style = "backgroundcolor : yellow">New paragraph</p>`
//question 7
//Create a function that has one parameter called list.
//Inside the function, loop through the list parameter and console log the name property in each object.
//Call the function and pass in the cats variable in the script.js file in the repo.
const cats = [
	{
		 name: "Blob",
		 age: 10
	},
	{
		 name: "Harold",
	},
	{
		 name: "Blurt",
		 age: 21
	}
];
function listFunction(list){
	for (let i=0; i < cats.lenght; i++)
	console.log(i);
};
listFunction();
//question 8
//Create a function called createCats. The function will have one parameter called cats.
//Inside the function loop through the value passed in as cats and create HTML for each object in the array.
//Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
//If the age property is missing, it should display “Age unknown” instead.
//Return the HTML from the function.
//Call the function and pass in the cats array as the argument.
//Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.
const cats = [
	{
		 name: "Blob",
		 age: 10
	},
	{
		 name: "Harold",
	},
	{
		 name: "Blurt",
		 age: 21
	}
];
const container = document.querySelector(".cat-container");
console.log(container);
let html ="";
for (let i = 0; i < cats.lenght; i++) {
	let age = "Age unknown"
	if(cats[i].age) {
		age = cats[i].age
	}
	html += '<div class="name">
				<h5>name: $(cats[i].name)</h5>
				<p>age: $(age)</p>
	';
	console.log(cats[i])
}
container.innerHTML = html;

