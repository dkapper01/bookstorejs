const fetch = require("node-fetch");

fetch("https://s3.amazonaws.com/api-fun/books.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let arr = [];
    for (let x of myJson.data.books) {
      arr.push(x.PublishDate);
    }
    // const x = arr.sort();
    const y = arr.sort((a, b) => {return b - a});

    console.log(y);
  });
