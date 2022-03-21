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
        elem.style.background = 'rgba(255, 48, 0, 0.8)';
        elem.style.color = 'white';
    }
    function normalColor(elem) {
        elem.style.background = '';
        elem.style.color = 'black';
    }
    setTimeout(normalColor,3000,elem);
    newColor(elem);
    }


function typingEffect() {
    const contactTexts = shuffleArray(['Counter', 'What Counter?🙃', 'Count Count Count', 'Lets Count🤗', 'Do you need help in count?👍']);
    const typedtext = document.getElementsByClassName("typed-text")[0];
    let removing = false;
    let idx = char = 0;

    setInterval(() => { // 

        
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        
        if (char == contactTexts[idx].length + 15) removing = true;

        
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; 

        
        if (typedtext.innerHTML.length === 0) {

            
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; 
            removing = false; 
        }

    }, 150);

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    
    while (0 !== currentIndex) {

        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}