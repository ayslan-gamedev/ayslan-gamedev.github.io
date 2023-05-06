$(document).ready(function() {
    var text_rotator = $('#txt-rotate');
    var rotate_data = text_rotator.attr('data-rotate');
    var rotate_array = JSON.parse(rotate_data);

    var period = text_rotator.attr('data-period') || 1000;
    var rotate_index = 0;
    var rotate_text = rotate_array[rotate_index];
    var current_text = '';
    var isDeleting = false;

    function rotate() {
      var text_length = rotate_text.length;

      if (isDeleting) {
        current_text = rotate_text.substring(0, current_text.length - 1);
      } else {
        current_text = rotate_text.substring(0, current_text.length + 1);
      }

      text_rotator.text(current_text);

      // Adicionando animação da barrinha de digitação
      var cursor = $('#txt-cursor');
      var cursor_position = text_rotator.position().left + text_rotator.width();
      cursor.css('left', cursor_position + 'px');

      if (!isDeleting && current_text === rotate_text) {
        setTimeout(function() {
          isDeleting = true;
        }, 500);
      } else if (isDeleting && current_text === '') {
        isDeleting = false;
        rotate_index++;
        if (rotate_index == rotate_array.length) {
          rotate_index = 0;
        }
        rotate_text = rotate_array[rotate_index];
        setTimeout(function() {
          isDeleting = false;
        }, 500);
      }

      setTimeout(rotate, period);
    }

    setTimeout(rotate, period);
  });