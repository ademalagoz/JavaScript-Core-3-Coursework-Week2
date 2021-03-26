let ulTag = document.getElementById("list")
let btnTag = document.getElementById("new")

let liTag = document.createElement("li")
let image = document.createElement("img")

liTag.appendChild(image)
ulTag.appendChild(liTag)

btnTag.addEventListener("click", getDogApi)

function getDogApi() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data =>{
       
       image.src = data.message
    }
    )
    .catch(err => console.log(err))

}