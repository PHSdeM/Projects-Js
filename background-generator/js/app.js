const colors = ['green', 'red', 'white', 'aqua ', 'blue ','silver', 'gray', 'fuchsia', 'navy', 'lime',
'maroon', 'yellow', 'olive', 'teal', 'purple','MediumBlue', 'bege', 'CornflowerBlue', 'DeepSkyBlue', 'SteelBlue',
'DarkTurquoise', 'CadetBlue', 'MediumSpringGreen', 'MediumSeaGreen', 'GreenYellow','SaddleBrown', 'Indigo', 'DarkMagenta', 'Violet', 'HotPink'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

