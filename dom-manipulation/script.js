//DOM MANIPULATION
const content = document.querySelector(".content");

// create p in div.content
const par = document.createElement("p");
par.textContent = "Hey I'm red!";
par.style.color = "red";

content.appendChild(par);

//creating h3 in div.content
const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!"
blueHeader.style.color = "blue"

content.appendChild(blueHeader);

//creating div with a black border in div.content
const divBorder = document.createElement("div");
divBorder.style.border = "solid 1px black"
divBorder.style.backgroundColor = "pink";

//creating h1 and p inside div with a black border
const header = document.createElement("h1");
const parInH1 = document.createElement("p");
header.textContent = "I'm in a div";
parInH1.textContent = "ME TOO!"

divBorder.appendChild(header);
divBorder.appendChild(parInH1);

content.appendChild(divBorder);

//EVENTS LISTEN
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World!");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', () => {
    alert("Hello World!");
});

const btn = document.querySelector("#btn")
btn.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll("#container>button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});