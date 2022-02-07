var storedCity = [];

var buttonClick = document.querySelector("#searchBtn");
var textBox = document.querySelector("#userInput");

// variable for the current year for long term usability
var currentYear = new Date().getFullYear();

// function to gather user input
var buttonClick = function(event) {
    event.preventDefault();
    var input = textBox.value;

    // check user input

    // call function to add inputed year to the array
    updateArray(input);
    
    // clearing text box for user
    textBox.value = "";
};

// function to update the array of stored values
var updateArray = function(city) {
    storedCity.push(city);
// need to display and interact with
saveContent();
};

// function to call api

// function to store array to localStorage
var saveContent = function() {
    localStorage.setItem("city", JSON.stringify(storedCity));
};

// function to persist local data
var loadTasks = function() {
    var cityStorage = localStorage.getItem("city");
    if (cityStorage) {
        storedYear = JSON.parse(cityStorage);
    }
    // update page
};

buttonClick.addEventListener("click", buttonEventHandler);

loadTasks();