const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // url to cat breed api
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // if there's an error print to command line and handle error
    if (error) {
      callback(error, null);
    }

    // take the json string and transform to object
    const data = JSON.parse(body);

    console.log(data.length);

    // print error message if breed not found
    if (data.length === 0) {
      callback('Invalid breed', null);
    } else {
      // print the description of the cat breed to terminal
      callback(null, data[0]['description']);
    }

  });

};

module.exports = { fetchBreedDescription };