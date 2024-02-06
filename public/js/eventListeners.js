// Define a variable to store the last shot time
let lastShotTime = 0;

// Add click event listener
addEventListener('click', (event) => {
  const now = Date.now();
  const delayBetweenShots = 500; // Set the desired delay between shots in milliseconds

  // Check if enough time has passed since the last shot
  if (now - lastShotTime > delayBetweenShots) {
    const canvas = document.querySelector('canvas');
    const { top, left } = canvas.getBoundingClientRect();
    const playerPosition = {
      x: frontEndPlayers[socket.id].x,
      y: frontEndPlayers[socket.id].y
    };

    const angle = Math.atan2(
      event.clientY - top - playerPosition.y,
      event.clientX - left - playerPosition.x
    );

    socket.emit('shoot', {
      x: playerPosition.x,
      y: playerPosition.y,
      angle
    });

    // Update the last shot time
    lastShotTime = now;

    // console.log(frontEndProjectiles);
  }
});
