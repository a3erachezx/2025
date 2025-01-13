// script.js

document.getElementById('yes-btn').addEventListener('click', function() {
  const message = document.getElementById('response-message');
  message.innerHTML = "<h2>Yay! 💖 I’m so happy! Let's make this Valentine’s Day unforgettable 😘🌹, I love you.!</h2>";
  message.classList.remove('hidden');
  document.querySelector('h1').classList.add('hidden');
  document.querySelector('.message').classList.add('hidden');
  document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
});

document.getElementById('no-btn').addEventListener('click', function() {
  const message = document.getElementById('response-message');
  message.innerHTML = "<h2>Haha Sorry, You can't say no 😚h2>";
  message.classList.remove('hidden');
  document.querySelector('h1').classList.add('hidden');
  document.querySelector('.message').classList.add('hidden');
  document.querySelectorAll('.btn').forEach((btn) => btn.classList.add('hidden'));
});
