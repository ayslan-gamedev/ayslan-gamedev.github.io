const inputs = document.querySelectorAll('.inputs input');
let currentIndex = 0;
const totalSlides = inputs.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  inputs[currentIndex].checked = true;

  const imagesContainer = document.querySelector('.imgs');
  imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

inputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    currentIndex = index;
    const imagesContainer = document.querySelector('.imgs');
    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
  });
});

setInterval(changeSlide, 10000);
