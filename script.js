//  test
let data = [
  ["images/test03.png", "title 1", "aaa"],
  ["images/test02.png", "tile2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ante pulvinar, nec suscipit urna. Ut rhoncus ex id dolor gravida ultrices. Nulla facilisi. Nunc semper id tortor vel molestie. Mauris mi eros, faucibus quis tempus in, sollicitudin eget magna. Ut ornare vitae felis et rhoncus. Fusce fringilla elementum velit. Etiam ac purus tempus, consectetur metus eget, vehicula quam. Nunc a sapien a velit venenatis ultrices sollicitudin et urna. Ut fringilla dapibu."],
  ["images/test01.png", "title 3", "ccc"],
  ["images/test01.png", "title 3", "ccc"]
]
// ;...

const carousel = document.querySelector('.session_projects .carousel');

const images_container = Object.assign(document.createElement("div"), {
  className: "images"
});
const inputs_container = Object.assign(document.createElement("div"), {
  className: "inputs"
});

carousel.append(images_container);
carousel.append(inputs_container);

let slides = [];
let inputs = [];

(function create_carousel(items) {
  for (let i = 0; i < items.length; i++) {
    let _container = Object.assign(document.createElement("div"), {
      className: "container"
    });

    let _image = Object.assign(document.createElement("img"), {
      src: items[i][0]
    });
    images_container.append(_container);
    _container.append(_image);

    let _text_container = Object.assign(document.createElement("div"), {
      className: "texts"
    });

    let _title = document.createElement("h1");
    let _description = document.createElement("p");
    let _button = document.createElement("button");

    _container.append(_text_container);
    _text_container.append(_title);
    _text_container.append(_description);
    _text_container.append(_button);

    _title.textContent = items[i][1];  // Adding the title as text
    _description.textContent = items[i][2];  // Adding the description as text
    _button.textContent = "Click me";  // Button text

    let _input = Object.assign(document.createElement("input"), {
      type: "radio",
      id: `slide${i}`,
      name: "slides"
    });

    _input.checked = i === 0;  // Mark the first slide as selected

    inputs_container.append(_input);
    slides.push(_container);
    inputs.push(_input);
  }
})(data); // The function is called immediately with 'images' as an argument

let curr_img = 0
const start_pos = (slides.length - 1) * 50;

(function moveSlide(slides, position) {
  slides.forEach((img, index) => {
    // new position = start position - (current image index * 100)
    img.style.transform = `translateX(${position}%)`;
  });
})(slides, start_pos);

function move_slide(slides) {
  slides.forEach(img => {
    //new position = start position - (current image index * 100)
    img.style.transform = `translateX(${start_pos - (curr_img * 100)}%)`;
  })
}

// pass by inputs (manual)
inputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    curr_img = index;
    move_slide(slides);
  })
});

setInterval(() => {
  curr_img = curr_img >= slides.length - 1 ? 0 : curr_img + 1;
  move_slide(slides)
  inputs[curr_img].checked = true
}, 10000);
