const request = require('request');

const fetchBreedDescription = function(catName, callback) {

const url = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`

request(url, (err, response, body) => {
  if (err) {
    callback(err, null);
    return;
  }

    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
      return;
    }

    callback('Breed is not found');
  });
};

// const breedName = process.argv[2];

// let callback = (error, desc) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(desc);
//   }
// }
// fetchBreedDescription(breedName, callback);

module.exports = { fetchBreedDescription };