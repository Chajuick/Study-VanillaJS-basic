const title = document.getElementById('title');

title.innerText = "잡았다!";

const detail = document.querySelectorAll("p.detail");

function handleDetailClick(element) {
    element.style.color = 'blue';
};

detail.forEach(element => {
    element.addEventListener('click', () => handleDetailClick(element));
});