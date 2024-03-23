const request = require('request');

// user defines the cat breed through command line arg
const breed = process.argv[2];

// url to cat breed api
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  // if there's an error print to command line and handle error
  if (error) {
    console.log(error);
    return;
  }

  // take the json string and transform to object
  const data = JSON.parse(body);

  // print error message if breed not found
  if (body === '[]') {
    console.log("Breed not found.");
    return;
  }

  // print the description of the cat breed to terminal
  console.log(data[0]['description']);

});