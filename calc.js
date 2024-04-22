const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#result');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === '=') {
      display.value = eval(display.value);
    } else if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});
