fetch('https://api.github.com/orgs/nodejs/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('NodeJS Public Members: Raw data \n----------');
    console.log(data);
  });

fetch('https://api.github.com/orgs/nodejs/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('NodeJS Repositories: Names only \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
  });
