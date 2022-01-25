
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Exercise 8",
    2: "Exercise 7",
    3: "Exercise 6",
    4: "Exercise 5",
    5: "Exercise 4",
    6: "Exercise 3",
    7: "Exercise 2",
    8: "Exercise 1",
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  }

  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "-";
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
