var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bayangan-kucing.png') {
      myImage.setAttribute ('src','images/bayangan-dino.png');
    } else {
      myImage.setAttribute ('src','images/bayangan-kucing.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'semoga bisa, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'semoga bisa, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }