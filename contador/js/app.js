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

    setInterval(() => { // We define the interval of the typing speed

        // If we do not reach the limit, we insert characters in the html
        if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

        // 15*150ms = time before starting to remove characters
        if (char == contactTexts[idx].length + 15) removing = true;

        // Removing characters, the last one always
        if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

        char++; // Next character

        // When there is nothing else to remove
        if (typedtext.innerHTML.length === 0) {

            // If we get to the end of the texts we start over
            if (idx === contactTexts.length - 1) idx = 0
            else idx++;

            char = 0; // Start the next text by the first character
            removing = false; // No more removing characters
        }

    }, 150); // Typing speed, 150 ms

}
typingEffect();
function shuffleArray(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}