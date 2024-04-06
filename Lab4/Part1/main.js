/* 
  Name: Jeel Patel
	File: main.js
	Date: 03, march 2024
	Description: Main java script file connected with HTML file.
*/

// Get references to DOM elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to return a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Story template and placeholders
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Event listener for randomize button
randomize.addEventListener('click', result);

// Function to generate and display the random story
function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // Replace placeholders with random values
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    // Replace custom name if provided
    if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Convert temperature and weight for UK
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + 'stone';
    const temperature =  Math.round((94 - 32) * 5 / 9) + 'centigrade';
    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }

  // Display the generated story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
