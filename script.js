//your JS code here. If required.
function displayTime() {
  const now = new Date();
 const options = { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = now.toLocaleString('en-US', options);

  document.getElementById('timer').textContent = formattedTime;
}

// Update time every second
setInterval(displayTime, 1000); 

// Initial display
displayTime();