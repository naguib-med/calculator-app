let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            display.value = eval(display.value);
        } else {
            display.value += e.target.innerText;
        }
    });
});
