fetch('https://placehold.co/600x400?text=Hello+UCB&font=lora')
    .then(function (response) {
        var contentType = response.headers.get("content-type");
        console.log('+------------------------------+');
        console.log(response,contentType);
        console.log('+------------------------------+');
        
        return response.blob(); //binary large object
    })
    .then(function(blob)  {
        const objectURL = URL.createObjectURL(blob);
        document.querySelector("img").src = objectURL;
    });

fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5')
    .then(function (response) {
        var contentType = response.headers.get("content-type");
        console.log('+------------------------------+');
        console.log(response,contentType);
        console.log('+------------------------------+');
        return response.json();  //javascript object notation
    })
    .then(function (data) {
        console.log(data);
    });