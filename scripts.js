document.addEventListener('DOMContentLoaded', () => {
  const cuteButton = document.getElementById('cuteButton');
  const cuteMessage = document.getElementById('cuteMessage');
  const birthdayCard = document.querySelector('.birthday-card');
  const alertCard = document.getElementById('alertCard');
  const alertButton = document.getElementById('alertButton');
  const bgBlur = document.getElementById('bgBlur');
  const cuteMessageContainer = document.getElementById('cuteMessageContainer');

  // Show the alert card on load
  alertCard.style.display = 'flex';

  // Handle the alert button click
  alertButton.addEventListener('click', () => {
    backgroundSound.play();
    alertCard.style.display = 'none';
    bgBlur.style.filter = 'none';
    var alert = document.getElementById("alertCard")
    alert.remove()
  });

  // Fade in the main card on load
  setTimeout(() => {
    birthdayCard.classList.add('animate__fadeInUp');
  }, 100);

  cuteButton.addEventListener('click', () => {
    cuteMessage.classList.add('animate__fadeIn');
    cuteMessage.style.opacity = 1;

    // Create a new card with the cute message
    const newCard = document.createElement('div');
    newCard.classList.add('card', 'text-center', 'birthday-card', 'animate__animated', 'animate__fadeInUp', 'position-absolute', 'mr-3');
    const newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');
    const newCardText = document.createElement('p');
    newCardText.classList.add('card-text');
    newCardText.textContent = 'Kacamatanya beneran bagus kok kak, ga bohong sumpah baguss bangettttt';
    const closeButton = document.createElement('button');
    const img = document.createElement('img');
    img.src = 'thumbs.gif';
    img.width = '190'
    closeButton.classList.add('btn', 'btn-danger', 'mt-3');
    closeButton.textContent = 'Close';

    // Close button functionality
    closeButton.addEventListener('click', () => {
      newCard.remove();
    });

    newCardBody.appendChild(newCardText);
    newCardBody.appendChild(img);
    newCardBody.appendChild(closeButton);
    newCard.appendChild(newCardBody);
    birthdayCard.appendChild(newCard);
  });
});
