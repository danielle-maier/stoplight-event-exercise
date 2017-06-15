(function() {
  'use strict';

  var stopButton = document.getElementById('stopButton');
  var stopLight = document.getElementById('stopLight');
  stopButton.addEventListener('click', activateStop);
  stopButton.addEventListener('mouseenter', enter);
  stopButton.addEventListener('mouseleave', leave);
  var slowButton = document.getElementById('slowButton');
  var slowLight = document.getElementById('slowLight');
  slowButton.addEventListener('click', activateSlow);
  slowButton.addEventListener('mouseenter', enter);
  slowButton.addEventListener('mouseleave', leave);
  var goButton = document.getElementById('goButton');
  var goLight = document.getElementById('goLight');
  goButton.addEventListener('click', activateGo);
  goButton.addEventListener('mouseenter', enter);
  goButton.addEventListener('mouseleave', leave);

  function enter() {
    console.log("Entered " + this.textContent + " button");
  }

  function leave() {
    console.log("Left " + this.textContent + " button");
  }

  function activateStop() {
    if (stopLight.style.background == "red") {
      stopLight.style.background = "black";
    } else {
      stopLight.style.background = "red";
    }
  }

  function activateSlow() {
    if (slowLight.style.background == "yellow") {
      slowLight.style.background = "black";
    } else {
      slowLight.style.background = "yellow";
    }
  }

  function activateGo() {
    if (goLight.style.background == "green") {
      goLight.style.background = "black";
    } else {
      goLight.style.background = "green";
    }
  }
})();
