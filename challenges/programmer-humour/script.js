// 1. Create a `HTML`, `CSS` and `JavaScript` file to write your code in

// - Inside the same file write a program that gets the `json` using Fetch.
// - A function should make an API call to the given endpoint: `https://xkcd.now.sh/?comic=latest`
// - Log the received data to the console
// - Render the `img` property into an `<img>` tag in the DOM
// - Incorporate error handling


function getApi() {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(response => response.json())
    .then(data => {
    let body = document.querySelector("body")
    let h2Tag = document.querySelector("h2")

    let image = document.createElement("img")
    
    h2Tag.innerText = data.alt
     
    image.src = data.img;
     
     body.append(image,h2Tag) 

    })

.catch(err => console.log(err))
}

 getApi()