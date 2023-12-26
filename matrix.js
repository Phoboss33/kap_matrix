function applyStyles() {
  var block = document.getElementById('block');
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var color = document.getElementById('color').value;
  var imageUrl = document.getElementById('imageUrl').value;
  var border = document.getElementById('border').checked;
  var borderStyle = document.getElementById('borderStyle').value;
  var borderColor = document.getElementById('borderColor').value;
  var borderWidth = document.getElementById('borderWidth').value;
  var text = document.getElementById('text').value;
  var textRepeat = document.getElementById('textRepeat').value;
  var textAlign = document.getElementById('textAlign').value.split(' ');
  var shadow = document.getElementById('shadow').checked;

  block.innerHTML = text.repeat(Number(textRepeat));
  block.style.width = width + 'px';
  block.style.height = height + 'px';
  block.style.backgroundColor = color;
  block.style.backgroundImage = imageUrl ? 'url(' + imageUrl + ')' : '';
  block.style.borderStyle = border ? borderStyle : 'none';
  block.style.borderColor = borderColor;
  block.style.borderWidth = borderWidth + 'px';
  block.style.justifyContent = textAlign[0];
  block.style.alignItems = textAlign[1];
  block.style.display = 'flex';
  block.style.boxShadow = shadow ? '10px 10px 5px grey' : 'none';

  // Удаляем предыдущие анимации, если они есть
  block.classList.remove('text-animation');

  // Анимация текста
  switch (borderStyle) {
    case 'solid':
      block.classList.add('text-animation');
      block.style.animationName = 'textAnimationSolid';
      break;
    case 'dashed':
      block.classList.add('text-animation');
      block.style.animationName = 'textAnimationDashed';
      break;
    case 'dotted':
      block.classList.add('text-animation');
      block.style.animationName = 'textAnimationDotted';
      break;
    default:
      block.style.animationName = 'none';
      break;
  }
}

// Примеры CSS Keyframes для анимации текста
// Добавить внутрь тега <style> в HTML
/*
@keyframes textAnimationSolid {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes textAnimationDashed {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
}

@keyframes textAnimationDotted {
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}
*/