const productGrid = document.querySelector('.product-grid');
const pageIndicator = document.getElementById('page-number');
const totalcards=document.querySelectorAll('.product-card');
const totalPag=totalcards.length/3;
let currPag = 1;

document.querySelectorAll('.page-number').forEach(btn => {
    btn.addEventListener('click',() => {
        currPag=parseInt(btn.dataset.page)
        update();
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (currPag < totalPag) {
        currPag++;
        update();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currPag > 1) {
        currPag--;
        update();
    }
});

function update() {
    const offset = (currPag - 1) * -25;
    productGrid.style.transform = `translateX(${offset}%)`;
}