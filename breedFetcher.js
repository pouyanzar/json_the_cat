const request = require('request');

const query = process.argv[2];

const breedFetcher = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      return console.log('The request failed');
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log(`${query} not found!!!`);
    }
    console.log(data[0].description);
  });
};

breedFetcher(`https://api.thecatapi.co/v1/breeds/search?name=${query}`);