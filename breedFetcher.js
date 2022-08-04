const request = require('request');

const catName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (err, response, body) => {
  if (err) {
    console.log(`Sorry, request failed...`);
    return;
  }
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length === 0) {
      console.log('The breed is not found...');
      return;
    }

    console.log(data[0].description);
});