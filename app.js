// listen 하고 싶은 event는 html element mdn을 검색

const title = document.getElementById('title');

function handleTitleOver() {
    const currentColor = title.style.color;
    let newColor;

    if (currentColor === "blue") {
        newColor = "green";
    } else {
        newColor = "blue";
    };
    title.style.color = newColor;
};

title.addEventListener('mouseover', handleTitleOver);

const detail = document.querySelectorAll("p.detail");

function handleDetailClick(element) {
    element.style.color = 'blue';
};

detail.forEach(element => {
    element.addEventListener('click', () => handleDetailClick(element));
});
