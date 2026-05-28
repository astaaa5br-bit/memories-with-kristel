const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const popupDesc = document.getElementById('popupDesc');
const closeBtn = document.getElementById('closeBtn');
const music = document.getElementById('bgMusic');

// Auto play music
window.addEventListener('click', () => {
  music.play();
}, { once: true });

fetch('gallery.json')
.then(res => res.json())
.then(data => {

  data.forEach(item => {

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${item.image}" alt="">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupImg.src = item.image;
      popupTitle.textContent = item.title;
      popupDesc.textContent = item.description;
    });

    gallery.appendChild(card);
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e)=>{
  if(e.target === popup){
    popup.style.display='none';
  }
});