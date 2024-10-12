//  test
let images = [
  ["images/test03.png", "title 1", "aaa"],
  ["images/test02.png", "tile2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ante pulvinar, nec suscipit urna. Ut rhoncus ex id dolor gravida ultrices. Nulla facilisi. Nunc semper id tortor vel molestie. Mauris mi eros, faucibus quis tempus in, sollicitudin eget magna. Ut ornare vitae felis et rhoncus. Fusce fringilla elementum velit. Etiam ac purus tempus, consectetur metus eget, vehicula quam. Nunc a sapien a velit venenatis ultrices sollicitudin et urna. Ut fringilla dapibu."],
  ["images/test01.png", "title 3", "ccc"],
  ["images/test01.png", "title 3", "ccc"]
]
// ;...

const carousel = document.querySelector('.session_projects .carousel');

const images_container = Object.assign(document.createElement("div"), { className: "images" });
const inputs_container = Object.assign(document.createElement("div"), { className: "inputs" });
carousel.append(images_container)
carousel.append(inputs_container)

function create_carousel(items) {
  for (let i = 0; i < items.length; i++) {

    let _container = Object.assign(document.createElement("div"), {
      className: "container"
    })

    let _image = Object.assign(document.createElement("img"), { src: items[i][0] })
    images_container.append(_container)
    _container.append(_image)

    let _text_conteiner = Object.assign(document.createElement("div"), { className: "texts" })

    let _title = document.createElement("h1")
    let _descrision = document.createElement("p")
    let _button = document.createElement("button")
    //_button.type = "button";

    _container.append(_text_conteiner);
    _text_conteiner.append(_title)
    _text_conteiner.append(_descrision)
    _text_conteiner.append(_button)

    _title.append(items[i][1]);
    _descrision.append(items[i][2])
    _button.append("click in me")
    let _input = Object.assign(document.createElement("input"), {
      type: "radio",
      id: `slide${i}`,
      name: "slides"
    })

    _input.checked = i == 0;

    inputs_container.append(_input)
  }
}

create_carousel(images);


//const carousel = document.querySelector('.session_projects .carousel');
//
//const carosel_images = carousel.append(document.createElement("div"), { className: "images" });
//
////console.log(carousel.className)
//let images = ["images/test01.png", "images/test02.png", "images/test03.png"]
//
//for (let i = 0; i < images.length; i++) {
//  //carousel.append(Object.assign(document.createElement("img"), { src: images[i] }));
//  //carousel.append(Object.assign(document.createElement("input"), { type: "radio" }));
//}
//
//



/*const inputs = document.querySelectorAll('.carousel .inputs input');
const imgs = document.querySelectorAll('.carousel .slides img');
let curr_img = 0;

// start position = (images count - i) * 50
let start_pos = (imgs.length - 1) * 50

function move_slide(position) {
  imgs.forEach(img => {
    if (position != null) {
      img.style.transform = `translateX(${position}%)`;
    }
    else {
      //new position = start position - (current image index * 100)
      img.style.transform = `translateX(${start_pos - (curr_img * 100)}%)`;
    }
    console.log(position);
  })
}

// pass by inputs (manual)
inputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    curr_img = index;
    move_slide();
  })
});

move_slide(start_pos)
*/
//const inputs = document.querySelectorAll('.inputs input');
//const imgs = document.querySelectorAll('.slides img');
//let curr_img = 0;
//
//console.log(inputs.length);
//
//function pass_slides() {
//  console.log('trying pass automatly')
//  inputs[curr_img].checked = true;
//  imgs.style.transform = 'translateX(-${curr_img * 100}%)';
//}
//
//
//inputs.forEach((input, index) => {
//
//
//  input.addEventListener('change', () => {
//    console.log('trying to pass manual');
//    curr_img = index;
//    const imagesContainer = document.querySelectorAll('.slides');
//    //console.log(imagesContainer[curr_img].src)
//    imagesContainer.style.transform = 'translateX(-${curr_img * 100}%)';
//  });
//});
//
//
//
//setInterval(move_slide, 1000);
//

//const inputs = document.querySelectorAll('.inputs input');
//const imgs = document.querySelectorAll('.slides img');
//let curr_img = 0;
//
//console.log('start script');
//
//function pass_slides() {
//  console.log('trying pass automatly')
//  inputs[curr_img].checked = true;
//  imgs.style.transform = 'translateX(-${curr_img * 100}%)';
//}
//
//inputs.forEach((input, index) => {
//  console.log('trying to pass manual');
//
//  input.addEventListener('pass', () => {
//
//    curr_img = index;
//    imgs.style.transform = 'translateX(-${curr_img * 100}%)';
//  });
//});
//
//setInterval(pass_slides, 1000);
//
//
//
//const inputs = document.querySelectorAll('.inputs input');
//let currentIndex = 0;
//const totalSlides = inputs.length;
//
//function changeSlide() {
//  currentIndex = (currentIndex + 1) % totalSlides;
//  inputs[currentIndex].checked = true;
//
//  const imagesContainer = document.querySelector('.imgs');
//  imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//}
//
//inputs.forEach((input, index) => {
//  input.addEventListener('change', () => {
//    currentIndex = index;
//    const imagesContainer = document.querySelector('.imgs');
//    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
//  });
//});
//
//setInterval(changeSlide, 10000);

//const inputs = document.querySelectorAll()

//inputs.forEach((input, index) => {
//  input.addEventListener('change', () => {
//    currentIndex = index + 1; // Ajusta o índice, já que o primeiro slide agora é um clone
//    imagesContainer.style.transition = 'transform 0.5s ease-in-out';
//    imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//  });
//});
//const inputs = document.querySelectorAll('.inputs input');
//let currentIndex = 0;
//const totalSlides = inputs.length;
//
//function changeSlide() {
//  currentIndex = (currentIndex + 1) % totalSlides;
//  inputs[currentIndex].checked = true;
//
//  const imagesContainer = document.querySelector('.imgs');
//  imagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//}
//
//inputs.forEach((input, index) => {
//  input.addEventListener('change', () => {
//    currentIndex = index;
//    const imagesContainer = document.querySelector('.imgs');
//    imagesContainer.style.transform = `translateX(-${index * 100}%)`;
//  });
//});
//
//setInterval(changeSlide, 10000);
//

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
//
//// Muda o slide automaticamente a cada 10 segundos
//setInterval(changeSlide, 10000);

