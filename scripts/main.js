const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/astronaut-fox.jpg") {
    myImage.setAttribute("src", "images/astronaut-fox-2.jpg");
  } else {
    myImage.setAttribute("src", "images/astronaut-fox.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Foxy the astronaut, ${myName}`;
}
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Foxy the astronaut, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
