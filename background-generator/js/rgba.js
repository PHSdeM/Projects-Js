const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let r = parseInt(Math.random() * 255);

    let g = parseInt(Math.random() * 255);

    let b = parseInt(Math.random() * 255);

    let opacidade = parseFloat(Math.random() * 1).toFixed(3);

    color.textContent = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacidade})`;
});
