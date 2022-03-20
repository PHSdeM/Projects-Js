let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

const disabledButton = document.getElementsByClassName('.assync');

btns.forEach(function(buttons) {
    buttons.addEventListener('click', function(options){
    const type = options.currentTarget.classList;
    if(type.contains('decrease'))  {
        count--;
    }      
    else if(type.contains('assync_increase'))  {
        console.log(count);
        count += 5;
        setTimeout(() => {count}, 3000);
        console.log(count);
    } 
    else if (type.contains('assync_decrease')) {
        console.log(count);
        count -= 5;
        setTimeout(() => {count}, 3000);
        console.log(count);
    }
    else if(type.contains('increase'))  {
        count++;
    }      
    else{
        count = 0;
    }
    value.textContent = count;

    if(count < 0){
        value.style.color = 'red';
    }
    else if (count > 0){
        value.style.color = 'green';
    }else {
        value.style.color = 'black';
    }
    }); 
});

function onClickDelayEvent (elem) {
   
    function newColor(elem) {
        elem.style.background = 'red';
        elem.style.color = 'white';
    }
    function normalColor(elem) {
        elem.style.background = '';
        elem.style.color = 'black';
    }
    setTimeout(normalColor,3000,elem);
    newColor(elem);
    }