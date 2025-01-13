document.getElementById('yes-btn').addEventListener('click', function() {
  const message = document.getElementById('response-message');
  const image = document.getElementById('valentine-img');

  // Change the image for "Yes" response (ensure "yes.jpeg" exists)
  image.src = "yes.jpeg";
  
  // Update the message
  message.innerHTML = "<h2>Teheeeee! 💖 I’m so happy baby! Let's make this Valentine’s Day unforgettable!🌹😘</h2>";
  message.classList.remove('hidden');  // Show the response message
  
  // Hide original content (question, message, and buttons)
  document.querySelector('h1').classList.add('hidden');
  document.querySelector('.message').classList.add('hidden');
  document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
});

document.getElementById('no-btn').addEventListener('click', function() {
  const message = document.getElementById('response-message');
  const image = document.getElementById('valentine-img');

  // Change the image for "No" response (ensure "no.jpeg" exists)
  image.src = "no.jpeg";
  
  // Update the message
  message.innerHTML = "<h2>Really babe... You can't say no 😢</h2>";
  message.classList.remove('hidden');  // Show the response message
  
  // Hide original content (question, message, and buttons)
  document.querySelector('h1').classList.add('hidden');
  document.querySelector('.message').classList.add('hidden');
  document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
});
