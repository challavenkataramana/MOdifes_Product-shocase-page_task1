const productGrid = document.querySelector('.product-grid');
const pageIndicator = document.getElementById('page-number');
const totalPag=3;
let currPag = 1;

document.getElementById('one').addEventListener('click', () => {
    currPag=1;
    update();
});

document.getElementById('two').addEventListener('click', () => {
        currPag=2;
        update();
});


document.getElementById('three').addEventListener('click', () => {
    currPag=3;
    update();
});

function update() {
    const offset = (currPag - 1) * -33.3;
    productGrid.style.transform = `translateX(${offset}%)`;
    pageIndicator.textContent = `${currPag}`;
}