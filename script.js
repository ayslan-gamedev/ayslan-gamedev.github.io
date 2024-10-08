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


//
//const inputs = document.querySelectorAll('.inputs input');
//const imagesContainer = document.querySelector('.imgs');
//const totalSlides = inputs.length;
//let currentIndex = 1; // Começa no índice 1, já que o primeiro slide será um clone
//
//// Clona o primeiro e último slide
//const firstSlide = imagesContainer.children[0].cloneNode(true);
//const lastSlide = imagesContainer.children[totalSlides - 1].cloneNode(true);
//
//// Adiciona o último slide no início e o primeiro slide no final
//imagesContainer.insertBefore(lastSlide, imagesContainer.firstChild);
//imagesContainer.appendChild(firstSlide);
//
//// Atualiza o total de slides, agora com os clones
//const newTotalSlides = imagesContainer.children.length;
//
//// Função para trocar de slide
//function changeSlide() {
//  currentIndex = (currentIndex + 1) % newTotalSlides;
//
//  imagesContainer.style.transition = 'transform 0.5s ease-in-out';
//  imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//
//  // Quando atinge o último clone, volta instantaneamente para o primeiro slide
//  if (currentIndex === newTotalSlides - 1) {
//    setTimeout(() => {
//      imagesContainer.style.transition = 'none';
//      currentIndex = 1;
//      imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//    }, 500); // Tempo igual ao da transição (0.5s)
//  }
//
//  // Quando atinge o primeiro clone, volta instantaneamente para o último slide
//  if (currentIndex === 0) {
//    setTimeout(() => {
//      imagesContainer.style.transition = 'none';
//      currentIndex = newTotalSlides - 2;
//      imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//    }, 500);
//  }
//}
//
//// Evento para quando um botão for clicado manualmente
//inputs.forEach((input, index) => {
//  input.addEventListener('change', () => {
//    currentIndex = index + 1; // Ajusta o índice, já que o primeiro slide agora é um clone
//    imagesContainer.style.transition = 'transform 0.5s ease-in-out';
//    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//  });
//});
//
//// Muda o slide automaticamente a cada 10 segundos
//setInterval(changeSlide, 10000);

