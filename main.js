let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
console.log(buttons)

buttons.map( button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText){
      case 'C':
        display.innerText = '';
        break;
      case '←':
        display.innnerText = display.innerText.slice(0,-1);
        break;
     default:
      display.innerText  += e.target.innerText;
    }
  });
});
