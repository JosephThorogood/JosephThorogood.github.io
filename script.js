
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  const displayLink = document.getElementById('displayLink');
	
  const segmentCount = 8;
  const zoneSize = 360 / segmentCount; // deg

  let deg = 0;

  // Counter clockwise
  const exerciseDetails = (symbolNumber) => {
    const correctedNumber = segmentCount - symbolNumber + 1;
  //  const msg = `You've picked exercise ${correctedNumber}, Click here to find out more!`;
    const href = `/exercises/ex${correctedNumber}.html`;

    let msg = ""
  switch(correctedNumber){
    case 1:
      msg = "You've picked tricep dips, Click here to find out more!";
      break;
    case 2:
      msg = "You've picked desk push ups, Click here to find out more!";
      break;
    case 3:
      msg = "You've picked oblique twists, Click here to find out more!";
      break;
    case 4:
      msg = "You've picked seated leg extensions, Click here to find out more!";
      break;   
    case 5:
      msg = "You've picked overhead arm stretches, Click here to find out more!";
      break;
    case 6:
      msg = "You've picked upper body stretches, Click here to find out more!";
      break; 
    case 7:
      msg = "You've picked leg stretches, Click here to find out more!";
      break;
    case 8:
      msg = "You've picked neck stretches, Click here to find out more!";
      break;
  
  }
    return [msg, href];
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    const [msg, href] = exerciseDetails(winningSymbolNr)

    display.innerHTML = msg;
    displayLink.href = href;
  }

  startButton.addEventListener('click', () => {
    // Reset link
    displayLink.removeAttribute('href');
    // Reset display
    display.innerHTML = "What exercise will you get!";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 2s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
	
})();

 
