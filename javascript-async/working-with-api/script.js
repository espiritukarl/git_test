// const img = document.querySelector('img');
const div = document.querySelector('div.weather')
const btn = document.getElementById('searchButton')
let inputBox = document.getElementById("searchBox")

// const API_KEY = "XmUdn52LNDMRqrzm8RcJxgISoPnY1HIO" //giphy
API_KEY = "f3afea27ad3346fbb0980935240306" //weather app

// function APICall() {
//     let searchTerm = inputBox.value
//     div.innerHTML = ''
//     // fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`, {
//     // mode: 'cors',
//     // }).then((response) => {
//     //     return response.json()
//     // }).then((response) => {
//     //     img.src = response.data.images.original.url
//     // })

//     fetch(`http://api.weatherapi.com/v1/current.json?q=${searchTerm}&key=${API_KEY}`, {
//         mode: 'cors',
//     }).then((response) => {
//         return response.json()
//     }).then((response) => {
//         let newDiv = document.createElement('div')
//         let img = document.createElement('img')
//         let span = document.createElement('span')
//         let span2 = document.createElement('span')
//         let span3 = document.createElement('div')

//         console.log(response)

//         span2.textContent = response.current.condition.text + " " + response.current.temp_c + "C"
//         img.src = response.current.condition.icon
//         span.textContent = response.location.name + ", " + response.location.country + "."
//         span3.textContent = "Current Time: " + response.location.localtime

//         newDiv.append(span2)
//         newDiv.append(img)
//         div.append(newDiv)
//         div.append(span)
//         div.append(span3)
//     })
// }

//using async/await
async function APICall() {
    let searchTerm = inputBox.value
    div.innerHTML = ''
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${searchTerm}&key=${API_KEY}`)
    const data = await response.json()

    //create element
    let newDiv = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('div')

    span2.textContent = data.current.condition.text + " " + data.current.temp_c + "C"
    img.src = data.current.condition.icon
    span.textContent = data.location.name + ", " + data.location.country + "."
    span3.textContent = "Current Time: " + data.location.localtime

    newDiv.append(span2)
    newDiv.append(img)
    div.append(newDiv)
    div.append(span)
    div.append(span3)
}

btn.addEventListener('click', APICall)