const request = require('request');

let url = 'https://api.thecatapi.com/v1/breeds/search?name=';

const fetchBreedDescription = (breedName, callback) => {
  url += breedName;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const err = `${breedName} not found!!!`;
    if (data.length === 0) {
      callback(err, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};
