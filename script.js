// script.js

document.getElementById('yes-btn').addEventListener('click', function() {
    const message = document.getElementById('response-message');
    const image = document.getElementById('valentine-img');
  
    // Change the image for "Yes" response
    image.src = "yes.jpeg";
    
    // Update the message
    message.innerHTML = "<h2>Teheeeee! 💖 I’m so happy baby! Let's make this Valentine’s Day unforgettable!🌹😘</h2>";
    message.classList.remove('hidden');
    
    // Hide original content (question, message, and buttons)
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.message').classList.add('hidden');
    document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
  });
  
  document.getElementById('no-btn').addEventListener('click', function() {
    const message = document.getElementById('response-message');
    const image = document.getElementById('valentine-img');
  
    // Change the image for "No" response
    image.src = "no.jpeg";
    
    // Update the message
    message.innerHTML = "<h2>Really babe... You can't say no 😢</h2>";
    message.classList.remove('hidden');
    
    // Hide original content (question, message, and buttons)
    document.querySelector('h1').classList.add('hidden');
    document.querySelector('.message').classList.add('hidden');
    document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
  });

document.getElementById('yes-btn').addEventListener('click', function() {
  // Hide the question and the buttons
  document.querySelector('h1').style.display = 'none';
  document.querySelector('.message').style.display = 'none';
  document.getElementById('yes-btn').style.display = 'none';
  document.getElementById('no-btn').style.display = 'none';
  
  // Show the response message
  document.getElementById('response-message').innerHTML = 'Yay! I’m so happy! 💖';
  document.getElementById('response-message').classList.remove('hidden');
});

document.getElementById('no-btn').addEventListener('click', function() {
  // Hide the question and the buttons
  document.querySelector('h1').style.display = 'none';
  document.querySelector('.message').style.display = 'none';
  document.getElementById('yes-btn').style.display = 'none';
  document.getElementById('no-btn').style.display = 'none';
  
  // Show the response message
  document.getElementById('response-message').innerHTML = 'Oh no... maybe next time 😢';
  document.getElementById('response-message').classList.remove('hidden');
});

  
