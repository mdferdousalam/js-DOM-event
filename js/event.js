console.log("This is seperate js file");

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

function makePink() {
  document.body.style.backgroundColor = "pink";
}

const pinkButton = document.getElementById("make-pink");
console.log(pinkButton);
pinkButton.addEventListener("click", makePink);

const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
